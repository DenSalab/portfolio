import React from "react";
import style from './RemoteWork.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Button from "../common/Button/Button";

const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>I'm considering remote work!</h3>
                <Button title={'hire me'} callback={()=> alert('good job!')}/>
            </div>
        </div>
    )
}

export default RemoteWork;