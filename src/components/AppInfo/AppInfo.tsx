import { useEffect, useId, useRef, useState } from 'react';

import classes from './AppInfo.module.scss';

const REPO_URL = 'https://github.com/gonza-garcia/html-email-builder';

const AppInfo = () => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);

  //dismiss the popover on Escape or a click outside it (no modal: this is an
  //ambient info affordance, not a task that needs focus protection)
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);

  const commitUrl =
    __APP_COMMIT__ === 'unknown' ? REPO_URL : `${REPO_URL}/commit/${__APP_COMMIT__}`;

  return (
    <div className={classes.AppInfo} ref={wrapperRef}>
      <button
        type="button"
        className={classes.Trigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        title="Version and build details"
      >
        <svg
          className={classes.TriggerGlyph}
          width="12"
          height="12"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
          <rect x="7.25" y="6.9" width="1.5" height="4.5" rx="0.75" fill="currentColor" />
        </svg>
        <span className={classes.TriggerLabel}>
          v{__APP_VERSION__} · {__APP_COMMIT__}
        </span>
      </button>

      {open && (
        <div id={panelId} className={classes.Panel} role="group" aria-label="Version and build">
          <dl className={classes.List}>
            <dt className={classes.Term}>Version</dt>
            <dd className={classes.Value}>{__APP_VERSION__}</dd>

            <dt className={classes.Term}>Commit</dt>
            <dd className={classes.Value}>
              <a className={classes.CommitLink} href={commitUrl} target="_blank" rel="noreferrer">
                {__APP_COMMIT__}
              </a>
            </dd>

            <dt className={classes.Term}>Built</dt>
            <dd className={classes.Value}>{__APP_BUILD_DATE__}</dd>
          </dl>
          <p className={classes.Hint}>
            Compare this commit with the repository to see which build is deployed.
          </p>
        </div>
      )}
    </div>
  );
};

export default AppInfo;
