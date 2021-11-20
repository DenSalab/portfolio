import React from "react";
import style from './RemoteWork.module.css';
import styleContainer from '../common/styles/Container.module.css';

const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Рассматриваю вариатны удаленной работы!</h3>
                <div className={style.button}>Нанять меня</div>
            </div>
        </div>
    )
}

export default RemoteWork;