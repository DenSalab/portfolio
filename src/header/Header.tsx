import style from './Header.module.css';
import {Navbar} from "../navbar/Navbar";
import container from '../common/styles/Container.module.css';

const Header = () => {
    return (
        <div className={style.header} id={'home'}>
            <div className={`${container.container} ${style.container}`}>
                <Navbar/>
            </div>
        </div>
    )
}

export default Header;