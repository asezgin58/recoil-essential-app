import React from 'react';
import Header from "../Header";
import Sidebar from "../Sidebar";

/**
 * Page Layout Description
 */
const Layout: React.FC<any> = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header
                className={'ib-header'}
                logo={'/images/logo.svg'}
                title={'Recoil Essential App'}
            />
            <div className="content" style={{display: 'flex'}}>
                <Sidebar/>
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Layout;