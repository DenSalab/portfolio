import React from "react";
import style from './Social.module.css';

type SocialPropsType = {
    title: string
}

const Social = (props: SocialPropsType) => {
    return (
        <div className={style.title}>{props.title}</div>
    )
}

export default Social;