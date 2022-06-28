import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';

const  App=(props) =>{ 
  return (
        <div className="app-wrapper">
<Header/>
<Navbar/>
<div className="app-wrapper-content">
  <Route path='/dialogs'
    render={()=>
    <DialogsContainer 
    store={props.store}
    />}/>
  <Route path='/profile'  
   render={()=>
   <Profile
   store={props.store}
    />}/>
  <Route path='/news' component={News}/>
  <Route path='/music' component={Music}/>
  <Route path='/Settings' component={Settings}/>
  <Route path='/Users' component={Users}/>


</div>
    </div>
  
    );
}

export default App;
