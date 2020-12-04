import React from 'react'
import {Switch,BrowserRouter as Router, Route}from 'react-router-dom'
import Content from './components/content';
import Login from './components/login';

function App() {
  return (
        <div> 
          <Router>
            <Switch>
              <Route path='/Nosotros'>
              </Route>
            </Switch>
            <Switch>
              <Route path='/registrese'>
              </Route>
            </Switch>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
            </Switch>
            <Switch>
              <Route path='/productos'>
              </Route>
            </Switch>
            <Switch>
              <Route path='/contactos'>
              </Route>
            </Switch>
            <Switch>
              <Route path='/'>
                <Content />
              </Route>
            </Switch>
          </Router>
        </div>
  );
}

export default App;
