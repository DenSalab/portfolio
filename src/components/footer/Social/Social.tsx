import React from "react";
import style from './Social.module.scss';

type SocialPropsType = {
    title: string
}

const Social = (props: SocialPropsType) => {
    return (
        <div className={style.title}>{props.title}</div>
    )
}

export default Social;