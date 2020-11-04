import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import VideosList from './components/videos/VideosList';
import VideoForm from './components/videos/VideoForm';
import Navbar from './components/navbar/Navbar';

import 'bootswatch/dist/cosmo/bootstrap.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Navbar/>

      <Switch>
        <Route exact path="/" component={VideosList}/>
        <Route path="/new-video" component={VideoForm}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
