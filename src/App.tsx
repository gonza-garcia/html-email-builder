import { useState, useEffect } from 'react';

import Layout from './components/Layout/Layout';
import InputsLister from './components/InputsLister/InputsLister';
import OutputsLister from './components/OutputsLister/OutputsLister';
import CustomButton from './components/CustomButton/CustomButton';
import Gallery from './components/Gallery/Gallery';
import CategoryTabs from './components/CategoryTabs/CategoryTabs';

import { htmlEmailWrapper } from './assets/templateWrappers';
import { generateNewId, copyToClipboard, saveHTML } from './assets/helpers';
import { originalComponents, components_categories } from './assets/myMailComponents';
import { imageList } from './assets/gallery-images';
import { all_prebuilt_emails } from './assets/gallery-prebuilt-emails';

import type { ComponentCategory, GalleryImage, MailComponent, OutputItem } from './types';

const App = () => {
  const [inputs, setInputs] = useState<MailComponent[]>(
    JSON.parse(JSON.stringify(originalComponents)),
  );
  const [outputs, setOutputs] = useState<OutputItem[]>([]);
  const [toggleImageGallery, setToggleImageGallery] = useState(false);
  const [message, setMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>(components_categories[0]);

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(''), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  const handleCodeChange = (newCode: string, id: string) => {
    const inputsCopy = [...inputs];

    const index = inputsCopy.findIndex((inpt) => inpt.id === id);

    inputsCopy[index].stringCode = newCode;

    setInputs(inputsCopy);
  };

  const handleCodeReset = (id: string) => {
    const inputsCopy = [...inputs];

    const index = inputsCopy.findIndex((inpt) => inpt.id === id);

    const originalIndex = originalComponents.findIndex((inpt) => inpt.id === id);

    if (inputsCopy[index].stringCode === originalComponents[originalIndex].stringCode) return;

    inputsCopy[index] = { ...originalComponents[originalIndex] };

    setInputs(inputsCopy);
  };

  const handleAddCode = (code: string) => {
    const outputsCopy = [...outputs];

    const newOutput = { id: generateNewId(), stringCode: code };

    outputsCopy.push(newOutput);

    setOutputs(outputsCopy);
  };

  const moveComponent = (direction: 'UP' | 'DOWN', currentIndex: number) => {
    const length = outputs.length;

    if (length < 2) return;
    if (currentIndex === 0 && direction === 'UP') return;
    if (currentIndex === length - 1 && direction === 'DOWN') return;

    let targetIndex;
    if (direction === 'UP') targetIndex = currentIndex - 1;
    else if (direction === 'DOWN') targetIndex = currentIndex + 1;
    else return;

    const outputsCopy = [...outputs];

    [outputsCopy[currentIndex], outputsCopy[targetIndex]] = [
      outputsCopy[targetIndex],
      outputsCopy[currentIndex],
    ];

    setOutputs(outputsCopy);
  };

  const removeComponent = (currentIndex: number) => {
    const outputsCopy = [...outputs];

    outputsCopy.splice(currentIndex, 1);

    setOutputs(outputsCopy);
  };

  const handleImageClick = (image: GalleryImage) => {
    //If the category is Pre builts, I look into all_prebuilt_emails array the element with the same id as image.id and then save HTML containing its code property.
    if (image.category === 'Pre-Builts') {
      const index = all_prebuilt_emails.findIndex((prebuilt) => prebuilt.id === image.id);

      saveHTML(all_prebuilt_emails[index].code, image.name);

      setMessage(`Download started: ${image.name}`);

      return;
    }

    copyToClipboard(image.url);

    setToggleImageGallery(false);

    setMessage(`Image Link Copied to Clipboard!`);
  };

  const prepareOutputsAndSave = () => {
    const jointOutput = outputs.reduce((jointCode: string, output) => {
      return jointCode.concat(
        output.stringCode +
          `
            
            
            `,
      );
    }, '');

    const htmlCode = [htmlEmailWrapper.topWrapper, jointOutput, htmlEmailWrapper.bottomWrapper]
      .join(`
        
        
        `);

    saveHTML(htmlCode, 'MyEmail');
  };

  const setCategory = (category: ComponentCategory) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
  };

  const filteredByCategory = inputs.filter((inpt) => inpt.category === activeCategory);

  return (
    <div className="App">
      <Layout
        leftContent={
          <InputsLister
            inputs={filteredByCategory}
            handleCodeChange={handleCodeChange}
            handleCodeReset={handleCodeReset}
            handleAddCode={handleAddCode}
          />
        }
        rightContent={
          <OutputsLister
            outputs={outputs}
            moveComponent={moveComponent}
            removeComponent={removeComponent}
          />
        }
        headerLeft={
          <p style={{ fontSize: '0.8em' }}>
            <b>Last Updated:</b>{' '}
            2021-06-16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Last Email Checked:</b> N° 90
          </p>
        }
        headerCenter={
          <p style={{ fontSize: '1em', color: '#036a43', fontWeight: 'bold' }}>{message}</p>
        }
        button1={
          <CustomButton
            buttonClasses={'Normal Green Wider'}
            label={toggleImageGallery ? 'Hide Gallery' : 'Image Gallery'}
            handleClick={() => setToggleImageGallery(!toggleImageGallery)}
            width="50px"
          />
        }
        button2={
          <CustomButton
            buttonClasses={'Normal Blue Wider'}
            label={'Create HTML'}
            handleClick={prepareOutputsAndSave}
            width="50px"
          />
        }
        subHeader={
          toggleImageGallery ? (
            <Gallery imageList={imageList} handleImageClick={handleImageClick} />
          ) : (
            <CategoryTabs
              tabNames={components_categories}
              activeTab={activeCategory}
              handleTabClick={setCategory}
            />
          )
        }
      />
    </div>
  );
};

export default App;
