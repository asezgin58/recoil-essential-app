import React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import List from "./List";

/**
 * Component File Description
 */
const Author = () => {
    const match: any = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`}>
                <Redirect to={`${match.url}/list`}/>
            </Route>
            <Route path={`${match.url}/list`} component={List}/>
        </Switch>
    )
};

export default Author;