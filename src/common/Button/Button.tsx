import React from "react";
import style from './Button.module.css';

const Button = (props: ButtonPropsType) => {
    return (
        <button className={style.button} onClick={props.callback}>{props.title}</button>
    )
}

export default Button;
// types
type ButtonPropsType = {
    title: string
    callback: () => void
}