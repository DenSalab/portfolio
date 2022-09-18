import React from "react";
import style from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import Project from "./project/Project";
import Title from "../../common/components/title/Title";

const Projects = () => {
    const tempDesc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis, culpa cupiditate debitis distinctio earum est iste nulla quaerat voluptates?';
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <Title title={'Projects'}/>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Project title={'To-do list'} description={tempDesc}/>
                <Project title={'Social network'} description={tempDesc}/>
            </div>
        </div>
    )
}

export default Projects;