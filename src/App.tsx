import React from 'react';
import Header from './header/Header';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import RemoteWork from "./remote_work/RemoteWork";
import Contacts from "./contakts/Contacts";
import Footer from "./footer/Footer";
import style from './App.module.css';

function App() {
    return (
        <div className={style.app_wrapper}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App;
