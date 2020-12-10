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
              <Route path='/registrese'>
              </Route>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/productos'>
              </Route>
              <Route path='/contactos'>
              </Route>
              <Route path='/'>
                <Content />
              </Route>
            </Switch>
          </Router>
        </div>
  );
}

export default App;
