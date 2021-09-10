import { ArrowDropDown, ArrowDropUp, Notifications, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScrolled ? "nav scrolled" : "nav"}>
           <div className="container">
                <div className="left">
                    <img
                        src={logo}
                        alt="Godflix"
                    />
                    <span>Sermons</span>
                    <span>Movies</span>
                    <span>TV Shows</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                    <span>Rewatch</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KIDS</span>
                    <span>DVD</span>
                    <Notifications className="icon" />
                    
                    <div className="profile">
                        <img
                                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                        />
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <ArrowDropUp className="option-icon"/>
                            <div className="menu">
                                <span>Manage Profiles</span>
                                <hr />
                                <span>Account</span>
                                <span>Help Center</span>
                                <span>Sign out of Netflix</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Navbar;
