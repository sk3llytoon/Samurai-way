import React from "react";
import s from './Navbar.module.css'

// let s = {
//     'nav': 'Navbar_nav__g5ij9',
//     'item': 'Navbar_item__5QWgc'
// }

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar