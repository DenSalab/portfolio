import React from "react";
import style from './Work.module.css';

type WorkPropsType = {
    title: string
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.image}><span>Смотреть</span></div>
            <div className={style.description}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;