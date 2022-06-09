import React from "react";
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from "./work/Work";

type WorksPropsType = {}

const Works = (props: WorksPropsType) => {
    const tempDesc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis, culpa cupiditate debitis distinctio earum est iste nulla quaerat voluptates?';
    return (
        <div className={style.worksBlock} id={'works'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Work title={'To-do list'} description={tempDesc}/>
                <Work title={'Social network'} description={tempDesc}/>
            </div>
        </div>
    )
}

export default Works;