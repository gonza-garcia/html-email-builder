import { useMemo, useState } from 'react';

import Modal from '../Modal/Modal';
import CustomButton from '../CustomButton/CustomButton';
import StringToComponent from '../StringToComponent/StringToComponent';

import { tableWrapper } from '../../assets/templateWrappers';
import { joinOutputBlocks } from '../../assets/helpers';

import type { OutputItem } from '../../types';

import classes from './ExportModal.module.scss';

type ExportModalProps = {
  outputs: OutputItem[];
  onClose: () => void;
  onDownload: (fileName: string) => void;
};

//strip characters that are invalid in file names; fall back to the historical default
const sanitizeFileName = (name: string): string =>
  name.replace(/[\\/:*?"<>|]/g, '').trim() || 'MyEmail';

const ExportModal = ({ outputs, onClose, onDownload }: ExportModalProps) => {
  const [fileName, setFileName] = useState('MyEmail');

  const jointOutput = useMemo(() => joinOutputBlocks(outputs), [outputs]);

  const finalName = sanitizeFileName(fileName);

  return (
    <Modal
      title="Create HTML"
      onClose={onClose}
      footer={
        <>
          <CustomButton buttonClasses={'Normal Black'} label={'Cancel'} handleClick={onClose} />
          <CustomButton
            buttonClasses={'Normal Green'}
            label={'Download'}
            handleClick={() => onDownload(finalName)}
          />
        </>
      }
    >
      <p>
        {outputs.length} block{outputs.length === 1 ? '' : 's'} will be wrapped in the email
        template and saved as a single .html file.
      </p>

      <label className={classes.FileNameRow}>
        <span className={classes.FileNameLabel}>File name</span>
        <input
          type="text"
          className={classes.FileNameInput}
          value={fileName}
          onChange={(event) => setFileName(event.target.value)}
          aria-label="File name"
        />
        <span className={classes.FileExtension}>.html</span>
      </label>
      <p className={classes.FileHint}>The file will be saved as “{finalName}.html”.</p>

      <p className={classes.PreviewLabel}>Preview of the assembled email:</p>
      <div className={classes.PreviewFrame}>
        <StringToComponent stringCode={jointOutput} wrapper={tableWrapper} />
      </div>
    </Modal>
  );
};

export default ExportModal;
