import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


let rerenderEntireTree=()=>{
    ReactDOM.render(
<HashRouter>
          <Provider store={store}>
          <App/>
           </Provider>
    </HashRouter>,
        document.getElementById('root')
      );

};

rerenderEntireTree();