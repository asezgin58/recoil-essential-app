import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from "./pages";
import Layout from "./components/Layout";

const App: React.FC<any> = () => {
    return (
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        </Layout>
    );
};

export default App;
