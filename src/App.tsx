import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home, Author, User} from "./pages";
import Route from './_route';

const App: React.FC<any> = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/author" component={Author}/>
                <Route path="/user" component={User}/>
            </Switch>
        </Router>
    );
};

export default App;