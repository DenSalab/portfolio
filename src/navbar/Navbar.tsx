import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#works">works</a>
            <a href="#contacts">Contacts</a>
        </div>
    )
}