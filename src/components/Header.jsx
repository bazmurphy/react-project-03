import React from "react";
import profilePhoto from "../assets/profile-photo.png";

function Header() {
    return (
        <header className="header-container">
            <img className="header-image" src={profilePhoto} alt="" />
        </header>
    );
}

export default Header;