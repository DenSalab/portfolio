import React from "react";
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Welcome</span>
                    <h1>My name is <br/>Luke Skywalker</h1>
                    <p>I’m here to rescue you.</p>
                </div>
                <div className={style.photo}>
                    <span>My Photo</span>
                </div>
            </div>
        </div>
    )
}

export default Main;