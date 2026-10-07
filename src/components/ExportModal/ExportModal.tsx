import { useMemo, useState } from 'react';

import Modal from '../Modal/Modal';
import CustomButton from '../CustomButton/CustomButton';
import StringToComponent from '../StringToComponent/StringToComponent';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import htmlSanitizer from '../../assets/htmlSanitizer';
import { tableWrapper } from '../../assets/templateWrappers';
import { joinOutputBlocks } from '../../assets/helpers';

import type { OutputItem } from '../../types';

import classes from './ExportModal.module.scss';

type ExportModalProps = {
  outputs: OutputItem[];
  onClose: () => void;
  onDownload: (fileName: string, jointOutput: string) => void;
};

//strip characters that are invalid in file names; fall back to the historical default
const sanitizeFileName = (name: string): string =>
  name.replace(/[\\/:*?"<>|]/g, '').trim() || 'MyEmail';

const ExportModal = ({ outputs, onClose, onDownload }: ExportModalProps) => {
  const [fileName, setFileName] = useState('MyEmail');

  const jointOutput = useMemo(() => joinOutputBlocks(outputs), [outputs]);

  //export enforcement (T3.3): the joined blocks answer to the same email rules
  //the Add gate uses, but downstream of Add. A clean export shows no warning;
  //otherwise the user sees exactly what is off and can still take the raw file
  //or a sanitized copy produced by the same allowlists.
  const validation = useMemo(() => {
    const san = new htmlSanitizer();
    const { invalidNodes, result } = san.sanitizeHtml(jointOutput);

    return {
      invalidNodes: Array.from(new Set(invalidNodes)),
      sanitizedOutput: result,
    };
  }, [jointOutput]);

  const finalName = sanitizeFileName(fileName);
  const hasIssues = validation.invalidNodes.length > 0;

  return (
    <Modal
      title="Create HTML"
      onClose={onClose}
      footer={
        <>
          <CustomButton buttonClasses={'Normal Black'} label={'Cancel'} handleClick={onClose} />
          {hasIssues && validation.sanitizedOutput !== undefined && (
            <CustomButton
              buttonClasses={'Normal Blue'}
              label={'Download sanitized copy'}
              handleClick={() => onDownload(finalName, validation.sanitizedOutput as string)}
            />
          )}
          <CustomButton
            buttonClasses={'Normal Green'}
            label={hasIssues ? 'Download anyway' : 'Download'}
            handleClick={() => onDownload(finalName, jointOutput)}
          />
        </>
      }
    >
      <p>
        {outputs.length} block{outputs.length === 1 ? '' : 's'} will be wrapped in the email
        template and saved as a single .html file.
      </p>

      {hasIssues && (
        <ErrorMessage
          type={'Warning2'}
          title={
            'Some blocks contain expressions that are invalid or unsafe in email HTML. Download a sanitized copy with them removed, or download anyway.'
          }
          messages={validation.invalidNodes}
        />
      )}

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
