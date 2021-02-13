import React, { Component } from 'react';

import Home from './pages/Home';
import ResultPage from './pages/ResultPage';
import UploadPage from './pages/UploadPage'

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './Navbar';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar />
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/upload" exact>
              <UploadPage />
            </Route>

            <Route path="/results" exact>
              <ResultPage />
            </Route>

          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
