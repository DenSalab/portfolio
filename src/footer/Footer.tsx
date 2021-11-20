import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Social from "./Social/Social";

const Footer = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Denis Salabash</h3>
                <div className={style.social}>
                    <Social title={'VK'}/>
                    <Social title={'FB'}/>
                    <Social title={'In'}/>
                    <Social title={'Ok'}/>
                </div>
                <span>© 2050 Все права защищены</span>
            </div>
        </div>
    )
}

export default Footer;