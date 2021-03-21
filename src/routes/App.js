import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound.jsx'

import Layout from '../components/Layout'
import Player from '../containers/Player';

const App = () =>(

    <Router>
        <Switch>
            <Layout>
            
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
            
            </Layout>
        </Switch>
    </Router>

);

export default App;