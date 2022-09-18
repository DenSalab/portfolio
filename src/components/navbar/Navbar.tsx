import s from './Navbar.module.scss';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import type {LinkProps} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <CustomLink to="/home"><i className={'lnr lnr-home'}/>Home</CustomLink>
            <CustomLink to="/about_me"><i className={'lnr lnr-user'}/>About me</CustomLink>
            <CustomLink to="/skills"><i className={'lnr lnr-list'}/>Skills</CustomLink>
            <CustomLink to="/projects"><i className={'lnr lnr-briefcase'}/>Projects</CustomLink>
            <CustomLink to="/contacts"><i className={'lnr lnr-envelope'}/>Contacts</CustomLink>
        </div>
    )
}

const CustomLink = ({children, to, ...props}: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});
    return (
        <div>
            <Link
                className={s.link}
                style={{color: match ? "white" : "#777", cursor: "pointer"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}