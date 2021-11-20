import style from './Header.module.css';
import {Navbar} from "../navbar/Navbar";

type HeaderPropsType = {};
const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.header}>
            <Navbar/>
        </div>
    )
}

export default Header;