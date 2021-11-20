import React from "react";
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Контакты</h3>
                <form className={style.form}>
                    <input type="text" placeholder={'Имя'}/>
                    <input type="text" placeholder={'Фамилия'}/>
                    <textarea placeholder={'Описаие'}></textarea>
                </form>
                <div className={style.button}>Отправить</div>
            </div>
        </div>
    )
}

export default Contacts;