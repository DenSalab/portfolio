import style from './Navbar.module.css';

type NavbarPropsType = {};
export const Navbar = (props: NavbarPropsType) => {
    return (
        <div className={style.navbar}>
            <a href="">Главая</a>
            <a href="">Скиллы</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </div>
    )
}