import React from "react";
import style from './Main.module.scss';
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import {Route, Routes} from "react-router-dom";
import Contacts from "../contakts/Contacts";
import {Home} from "../home/Home";
import {AboutMe} from "../aboutme/AboutMe";

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about_me" element={<AboutMe/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/contacts" element={<Contacts/>}></Route>
            </Routes>
        </div>
    )
}

export default Main;