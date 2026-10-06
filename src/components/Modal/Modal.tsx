import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';

import classes from './Modal.module.scss';

type ModalProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Modal = ({ title, onClose, children, footer }: ModalProps) => {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  //focus the dialog on open and restore focus to the trigger on close
  useEffect(() => {
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    panelRef.current?.focus();

    return () => {
      returnFocusRef.current?.focus();
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      onClose();
      return;
    }

    if (event.key !== 'Tab') return;

    //keep Tab cycling inside the dialog
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleOverlayMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <div className={classes.Overlay} onMouseDown={handleOverlayMouseDown}>
      <div
        className={classes.Panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={panelRef}
        onKeyDown={handleKeyDown}
      >
        <header className={classes.Header}>
          <h2 id={titleId} className={classes.Title}>
            {title}
          </h2>
          <button
            type="button"
            className={classes.CloseButton}
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </header>
        <div className={classes.Body}>{children}</div>
        {footer && <footer className={classes.Footer}>{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
