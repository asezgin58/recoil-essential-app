import {FC} from 'react';
import Header from "../Header/index";
import Sidebar from "../Sidebar/index";

/**
 * Page Layout Description
 */
const Layout: FC<any> = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header
                position={"sticky"}
                logo={'/images/logo.svg'}
                title={'Recoil Essential App'}
            />
            <Sidebar/>
            <div className="content p-3">
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Layout;