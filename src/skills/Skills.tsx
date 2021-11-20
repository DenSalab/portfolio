import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt ea esse minus natus officia quas quibusdam, quod quos voluptatum.';
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill icon={'A'} title={'HTML'} description={description}/>
                    <Skill icon={'B'} title={'CSS'} description={description}/>
                    <Skill icon={'C'} title={'JavaScript'} description={description}/>
                    <Skill icon={'D'} title={'REACT/REDUX'} description={description}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;