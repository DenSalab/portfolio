import React from "react";
import style from './Skill.module.scss';

type SkillPropsType = {
    icon: string
    title: string
    description: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>{props.icon}</div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Skill;