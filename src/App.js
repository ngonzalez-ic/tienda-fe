import React from 'react'
import {Switch,BrowserRouter as Router, Route}from 'react-router-dom'
import Content from './components/content';
import Login from './components/login';
import Register from './components/register';
import GlobalState from './context/globalState';

function App() {
  return (
        <div> 
          <GlobalState>
          <Router>
            <Switch>
              <Route path='/Nosotros'>
              </Route>
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/productos'>
              </Route>
              <Route path='/contactos'>
              </Route>
              <Route path='/'>
                <Content />
              </Route>
            </Switch>
          </Router>
          </GlobalState>
        </div>
  );
}

export default App;
