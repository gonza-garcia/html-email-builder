import { memo, useState } from 'react';
import type { DragEvent, KeyboardEvent } from 'react';

import OutputPresenter from '../OutputPresenter/OutputPresenter';

import { tableWrapper } from '../../assets/templateWrappers';

import type { OutputItem } from '../../types';

import classes from './OutputsLister.module.scss';

type OutputsListerProps = {
  outputs: OutputItem[];
  moveComponent: (direction: 'UP' | 'DOWN', index: number) => void;
  removeComponent: (index: number) => void;
  reorderComponent: (fromIndex: number, toIndex: number) => void;
};

type DropTarget = {
  index: number;
  position: 'before' | 'after';
};
const dropPositionOf = (event: DragEvent<HTMLElement>): 'before' | 'after' => {
  const rect = event.currentTarget.getBoundingClientRect();

  return event.clientY < rect.top + rect.height / 2 ? 'before' : 'after';
};

//final index of the dragged block when dropped around targetIndex
const finalIndexOf = (dragIndex: number, targetIndex: number, position: 'before' | 'after') => {
  if (position === 'before') return dragIndex < targetIndex ? targetIndex - 1 : targetIndex;

  return dragIndex < targetIndex ? targetIndex : targetIndex + 1;
};

const OutputsLister = ({
  outputs,
  moveComponent,
  removeComponent,
  reorderComponent,
}: OutputsListerProps) => {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);

  const handleDragStart = (index: number, event: DragEvent<HTMLElement>) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(index));
    setDragIndex(index);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setDropTarget(null);
  };

  const handleDragOver = (index: number, event: DragEvent<HTMLElement>) => {
    if (dragIndex === null) return;

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';

    const position = dropPositionOf(event);

    if (dropTarget?.index !== index || dropTarget.position !== position) {
      setDropTarget({ index, position });
    }
  };

  const handleDrop = (index: number, event: DragEvent<HTMLElement>) => {
    if (dragIndex === null) return;

    event.preventDefault();
    event.stopPropagation();

    const toIndex = finalIndexOf(dragIndex, index, dropPositionOf(event));

    setDragIndex(null);
    setDropTarget(null);
    reorderComponent(dragIndex, toIndex);
  };

  //dropping on the empty area below the blocks moves the block to the end
  const handleContainerDragOver = (event: DragEvent<HTMLDivElement>) => {
    if (dragIndex === null) return;
    if (event.target !== event.currentTarget) return;

    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setDropTarget(null);
  };

  const handleContainerDrop = (event: DragEvent<HTMLDivElement>) => {
    if (dragIndex === null) return;
    if (event.target !== event.currentTarget) return;

    event.preventDefault();

    const fromIndex = dragIndex;

    setDragIndex(null);
    setDropTarget(null);
    reorderComponent(fromIndex, outputs.length - 1);
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLElement>) => {
    if (!event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

    event.preventDefault();
    moveComponent(event.key === 'ArrowUp' ? 'UP' : 'DOWN', index);
  };

  if (!outputs.length)
    return (
      <p style={{ color: '#ffffff' }}>
        Choose your components from the left, edit them if you want and start adding them to this
        panel. Once you are done, click on Create HTML.
      </p>
    );

  return (
    <div
      className={classes.OutputsLister}
      onDragOver={handleContainerDragOver}
      onDrop={handleContainerDrop}
    >
      {outputs.map((output, index) => (
        <OutputPresenter
          code={output.stringCode}
          wrapper={tableWrapper}
          isDragging={dragIndex === index}
          dropIndicator={
            dragIndex !== null && dropTarget?.index === index ? dropTarget.position : null
          }
          moveComponent={(direction) => moveComponent(direction, index)}
          removeComponent={() => removeComponent(index)}
          onDragStart={(event) => handleDragStart(index, event)}
          onDragEnd={handleDragEnd}
          onDragOver={(event) => handleDragOver(index, event)}
          onDrop={(event) => handleDrop(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          key={output.id}
        />
      ))}
    </div>
  );
};

export default memo(OutputsLister);
