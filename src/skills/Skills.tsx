import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    const lorem_10 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, temporibus?';
    const lorem_15 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis est expedita ipsa magni veniam.';
    const lorem_20 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus dolor enim explicabo harum necessitatibus officia possimus quaerat ut velit.';
    const lorem_25 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate explicabo nihil nobis numquam rerum ut. Consequuntur culpa debitis et fugiat libero numquam quas, totam?';
    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={style.title}>
                <h2>My skills</h2>
            </div>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Skill icon={'A'} title={'HTML'} description={lorem_10}/>
                <Skill icon={'B'} title={'CSS'} description={lorem_25}/>
                <Skill icon={'C'} title={'JavaScript'} description={lorem_20}/>
                <Skill icon={'D'} title={'REACT/REDUX'} description={lorem_15}/>
                <Skill icon={'E'} title={'REACT/REDUX'} description={lorem_10}/>
            </div>
        </div>
    )
}

export default Skills;