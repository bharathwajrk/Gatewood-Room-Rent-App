import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../css/style.css';
import logo from '../images/logo192.png';
//UI Component
const NavbarHome = () => {
    return(
        <div>
            <div id="menu-bar-home-page">
                <Link to="/"><img className="logoImg-home-page" alt="logoImg" src={logo}/></Link>
                <nav className="menbar-home-page-Nav">
                    <ul>
                        <li><Link className="menubar-home-page-ATag" to="/beAHost">Become a Host</Link></li>
                        <li><Link className="menubar-home-page-ATag" to="/help">Help</Link></li>
                        <li><NavLink className="menubar-home-page-ATag" to="/signup">SignUp</NavLink></li>
                        <li><Link className="menubar-home-page-ATag" to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
    
export default NavbarHome;