import { useState } from 'react';

import CategoryTabs from '../CategoryTabs/CategoryTabs';

import classes from './Gallery.module.scss';


const Gallery = ({ imageList, handleImageClick }) => {
    const [ activeTab, setActiveTab ] = useState(imageList[0].category);

    //create tabNames list from images categories
    const tabNames = imageList.reduce((categoryList, currentImg) => {
        if (categoryList.indexOf(currentImg.category) === -1) 
            categoryList.push(currentImg.category);
        return categoryList;
    }, [])

    //filter by the active category
    const filteredList = imageList.filter(img => (img.category === activeTab));


    return (
        <CategoryTabs
            tabNames={tabNames}
            activeTab={activeTab}
            handleTabClick={(tabName => setActiveTab(tabName))}
            containerStyle={{textAlign: 'center'}}
        >
            <div className={`${classes.Gallery}`}>
            {
                filteredList.map(( img, index ) =>
                    //if the image url has the string: 'BREAK_LINE', create a new line by rendering a 100% width div 
                    img.url === 'BREAK_LINE'
                        ? <div style={{width: `100%`, height: `1px`, backgroundColor: `#595959`, margin: `10px 0`}}
                        key={`${img.url}_${index}`}></div>
                        : <img
                            src={img.url}
                            alt={img.name}
                            width={img.width || 'auto'}
                            height={img.height || 'auto'}
                            onClick={() => handleImageClick(img)}
                            key={img.id} />
                )
            
            }
            </div>
        </CategoryTabs>
    );
}

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