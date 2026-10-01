import type { CSSProperties, ReactNode } from 'react';

import classes from './ControlPanel.module.scss';

type ControlPanelProps = {
  containerClasses: string;
  containerStyle?: CSSProperties;
  children?: ReactNode;
};

const ControlPanel = ({ containerClasses, containerStyle, children }: ControlPanelProps) => {
  const resolvedClasses = containerClasses
    .split(' ')
    .map((btc) => classes[btc])
    .join(' ');

  return (
    <div className={resolvedClasses} style={containerStyle}>
      {children}
    </div>
  );
};

export default ControlPanel;
