import React from 'react';
import Header from "../Header/index";
import Sidebar from "../Sidebar/index";

/**
 * Page Layout Description
 */
const Layout: React.FC<any> = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header
                logo={'/images/logo.svg'}
                title={'Recoil Essential App'}
            />
            <Sidebar/>
            <div className="content">
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Layout;