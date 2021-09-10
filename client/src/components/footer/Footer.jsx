import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import "./Footer.scss";

const Footer = () => {

    const code = '/{213w-sfasd-445545-sdfdsfo2134-adfdf243401}';
    return (
        <div className="footer">
           <div className="icons">
                <Facebook className="icon" />
                <Instagram className="icon" />
                <Twitter className="icon" />
                <YouTube className="icon" />
           </div>
            <div className="row">
                <div className="column">
                    <p>Audio and Subtitles</p>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                </div>
                <div className="column">
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                </div>
                <div className="column">
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                </div>
                <div className="column">
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                </div>
            </div>
            <div className="row">
                <p className="box">
                    Service Code
                </p>
            </div>
            
            <p className="copyright">
                ©2019 - 2021 Godflix, Inc. {code}
            </p>
            
        </div>
    )
}

export default Footer
