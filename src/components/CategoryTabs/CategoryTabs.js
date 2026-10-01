import { Fragment } from 'react';

import CustomButton from '../CustomButton/CustomButton';


const CategoryTabs = ({ tabNames, activeTab, handleTabClick, containerStyle, children }) => {
    return (
        <Fragment>
            <div style={{...containerStyle, borderBottom: '10px solid #b90b0b'}}>
                {tabNames.map(catName => (
                    <CustomButton
                        buttonClasses={`Tab ${catName === activeTab ? 'Red Active' : 'Inactive'}`}
                        label={catName}
                        handleClick={() => handleTabClick(catName)}
                        key={catName}
                        />
                ))}
            </div>

            {children}
        </Fragment>
    );
}

export default CategoryTabs;