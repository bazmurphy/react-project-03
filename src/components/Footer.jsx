import React from "react";

import twitterIcon from "../assets/twitter-icon.png"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import githubIcon from "../assets/github-icon.png"

function Footer() {
    return (
        <footer className="footer-container">
            <a href="https://twitter.com" target="_blank"><img src={twitterIcon} alt="" /></a>
            <a href="https://facebook.com" target="_blank"><img src={facebookIcon} alt="" /></a>
            <a href="https://instagram.com" target="_blank"><img src={instagramIcon} alt="" /></a>
            <a href="https://github.com/bazmurphy" target="_blank"><img src={githubIcon} alt="" /></a>
        </footer>
    );
}

export default Footer;