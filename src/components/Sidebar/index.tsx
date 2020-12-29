import React from 'react';
import {ISidebarProps} from "./type";

/**
 * Component File Description
 */
const Sidebar: React.FC<ISidebarProps> = () => {

    return (
        <div className={'sidebar'}>
            <h1>MENU</h1>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </div>
    );
};

export default Sidebar;