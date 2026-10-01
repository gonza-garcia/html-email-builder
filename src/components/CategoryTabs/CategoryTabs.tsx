import { Fragment } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import CustomButton from '../CustomButton/CustomButton';

type CategoryTabsProps<T extends string> = {
    tabNames: readonly T[];
    activeTab: T;
    handleTabClick: (tabName: T) => void;
    containerStyle?: CSSProperties;
    children?: ReactNode;
};

const CategoryTabs = <T extends string>({ tabNames, activeTab, handleTabClick, containerStyle, children }: CategoryTabsProps<T>) => {
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
