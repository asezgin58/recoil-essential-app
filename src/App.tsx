import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home, User} from "./pages";
import Route from './_route';

const App: React.FC<any> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
            </Switch>
        </Router>
    );
};

export default App;