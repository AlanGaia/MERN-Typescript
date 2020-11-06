import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//tools
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

//Components
import VideosList from './components/videos/VideosList';
import VideoForm from './components/videos/VideoForm';
import Navbar from './components/navbar/Navbar';

//Css
import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Navbar/>

    <div className="container p-4">
      <Switch>
        <Route exact path="/" component={VideosList}/>
        <Route path="/new-video" component={VideoForm}/>
        <Route path="/update/:id" component={VideoForm}/>
      </Switch>
      <ToastContainer />
    </div>

  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
