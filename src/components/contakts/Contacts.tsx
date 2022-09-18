import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.css';
import Button from "../../common/components/button/Button";
import Title from "../../common/components/title/Title";


const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title title={'Contacts'}/>
                <form className={style.form}>
                    <label htmlFor="firstName">Name:</label>
                    <input type="text" name={'firstName'} placeholder={'Luke'}/>

                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" name={'lastName'} placeholder={'Skywalker'}/>

                    <label htmlFor="description">Description:</label>
                    <textarea
                        placeholder={'“You can either profit by this or be destroyed. It’s your choice, but I warn you not to underestimate my powers.” — Luke Skywalker'}
                        name={'description'}></textarea>
                </form>
                <Button title={'send'} callback={() => alert('mission completed')}/>
            </div>
        </div>
    )
}

export default Contacts;