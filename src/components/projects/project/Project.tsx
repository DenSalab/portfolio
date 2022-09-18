import React from "react";
import style from './Project.module.scss';
import Button from "../../../common/components/button/Button";

type WorkPropsType = {
    title: string
    description: string
}

const Project = (props: WorkPropsType) => {
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

export default Project;