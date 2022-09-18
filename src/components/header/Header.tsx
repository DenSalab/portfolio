import style from './Header.module.scss';
import photo from '../../assets/images/Веселее.jpg'

const Header = () => {
    // const url = "http://zornet.ru/_fr/81/3394004.jpg";
    // const url = "https://watson-vcard.netlify.app/img/profile-img.jpg";
    const url = photo;
    const name = "Denis Salabash";
    return (
        <div className={style.header} id={'home'}>
            <div className={style.photo} style={{backgroundImage: `url(${url})`}}/>
            <div className={style.name}>{name}</div>
        </div>
    )
}

export default Header;