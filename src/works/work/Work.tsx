import React from "react";
import style from './Work.module.css';
import Button from "../../common/Button/Button";

type WorkPropsType = {
    title: string
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workBlock}>
            <div className={style.imageContainer}>
                <Button title={'show'} callback={()=> alert('good job!')}/>
            </div>
            <div className={style.description}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Work;