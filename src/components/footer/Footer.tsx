import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Social from "./Social/Social";
import Title from "../../common/components/title/Title";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title title={'Luke Skywalker'}/>
                <div className={style.social}>
                    <Social title={'VK'}/>
                    <Social title={'FB'}/>
                    <Social title={'In'}/>
                    <Social title={'Ok'}/>
                </div>
                <span>© “You’ll find I’m full of surprises.”</span>
            </div>
        </div>
    )
}

export default Footer;