import React from "react";
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

type MainPropsType = {};

 const Main = (props: MainPropsType) => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <span>Welcome</span>
                    <h1>My name is Salabash Denis</h1>
                    <p>But everybody calls me Sebastian</p>
                </div>
                <div className={style.mainPhoto}>
                    My Photo
                </div>
            </div>
        </div>
    )
}

export default Main;