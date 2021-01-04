import React from 'react';
import {ISidebarProps} from "./type";
import {Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import {useHistory} from "react-router-dom";

/**
 * Component File Description
 */
const Sidebar: React.FC<ISidebarProps> = () => {

    const history = useHistory();

    const items = [
        {title: 'Home', link: '/'},
        {title: 'User', link: '/user'},
    ];

    return (
        <div className={'sidebar'}>
            <Drawer variant="permanent">
                <div className={""}>
                    <List>
                        {items.map((item, index) => {
                            return (
                                <ListItem button key={item.title} onClick={() => history.push(item.link)}>
                                    <ListItemText primary={item.title}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Sidebar;