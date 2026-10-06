import { Fragment, useState } from 'react';

import CategoryTabs from '../CategoryTabs/CategoryTabs';

import type { GalleryImage, ImageCategory } from '../../types';

import classes from './Gallery.module.scss';

type GalleryProps = {
  imageList: GalleryImage[];
  handleImageClick: (image: GalleryImage) => void;
  handlePrebuiltDownload: (image: GalleryImage) => void;
};

//descriptive label for gallery thumbnails, e.g. 'https://.../header-security-0.png' -> 'header-security-0'
const labelFromUrl = (url: string): string => {
  const clean = url.split('?')[0].split('#')[0];
  const fileName = clean.slice(clean.lastIndexOf('/') + 1);
  return fileName.replace(/\.[^.]+$/, '') || 'image';
};

const Gallery = ({ imageList, handleImageClick, handlePrebuiltDownload }: GalleryProps) => {
  const [activeTab, setActiveTab] = useState<ImageCategory>(imageList[0].category);

  //create tabNames list from images categories
  const tabNames = imageList.reduce<ImageCategory[]>((categoryList, currentImg) => {
    if (categoryList.indexOf(currentImg.category) === -1) categoryList.push(currentImg.category);
    return categoryList;
  }, []);

  //filter by the active category
  const filteredList = imageList.filter((img) => img.category === activeTab);

  return (
    <Fragment>
      <h2 className={classes.Heading}>Image Gallery</h2>
      <CategoryTabs
        tabNames={tabNames}
        activeTab={activeTab}
        handleTabClick={(tabName) => setActiveTab(tabName)}
        containerStyle={{ textAlign: 'center' }}
      >
        <div className={`${classes.Gallery}`}>
          {filteredList.map((img, index) =>
            //if the image url has the string: 'BREAK_LINE', create a new line by rendering a 100% width div
            img.url === 'BREAK_LINE' ? (
              <div
                style={{
                  width: `100%`,
                  height: `1px`,
                  backgroundColor: `#595959`,
                  margin: `10px 0`,
                }}
                key={`${img.url}_${index}`}
              ></div>
            ) : img.category === 'Pre-Builts' ? (
              //pre-builts: the thumbnail opens a detail preview; downloading needs the explicit button
              <div className={classes.PrebuiltThumb} key={img.id}>
                <button
                  type="button"
                  className={classes.Thumb}
                  aria-label={`Preview: ${img.name}`}
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    src={img.url}
                    alt=""
                    width={img.width || 'auto'}
                    height={img.height || 'auto'}
                  />
                </button>
                <button
                  type="button"
                  className={classes.DownloadBadge}
                  aria-label={`Download: ${img.name}`}
                  title={`Download: ${img.name}`}
                  onClick={() => handlePrebuiltDownload(img)}
                >
                  Download
                </button>
              </div>
            ) : (
              <button
                type="button"
                className={classes.Thumb}
                aria-label={`Copy URL: ${labelFromUrl(img.url)}`}
                onClick={() => handleImageClick(img)}
                key={img.id}
              >
                <img
                  src={img.url}
                  alt=""
                  width={img.width || 'auto'}
                  height={img.height || 'auto'}
                />
              </button>
            ),
          )}
        </div>
      </CategoryTabs>
    </Fragment>
  );
};

export default Gallery;

/*this receives an array of image objects like this: {
    id: string,
    name: string,
    category: string,
    height: int,     OR      width: int,
    url: string,
}
then creates tabs from their categories and display each image on their category tab and also assigns the prop function handleImageClick to each image
*/
