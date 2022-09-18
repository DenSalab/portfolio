import React from 'react';
import style from './App.module.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
    return (
        <BrowserRouter>
            <div className={style.app_wrapper}>
                <div className={style.aside}>
                    <Header/>
                    <Navbar/>
                    {/*<Footer/>*/}
                </div>
                <Main/>
            </div>
        </BrowserRouter>
    )
}

export default App;
