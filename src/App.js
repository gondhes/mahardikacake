import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'

import { Provider } from 'react-redux'
import store from './store/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className=" mt-4 mb-3">
            <div class="row">
              <div className="col-10 ml-5 text-left">
              <h5>MAHARDIKA CAKE</h5>
              </div>
              <div className="col-1 mr-5 text-right">
                <Link to="/">HOME</Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
