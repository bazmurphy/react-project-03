import React from "react";

import emailIcon from "../assets/mail-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"

function Main() {
    return (
        <main className="main-container">
            <section className="main-section-one">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <h4><a href="https://laurasmith.website" target="_blank">laurasmith.website</a></h4>
            </section>
            <section className="main-section-two">
                <section className="main-section-two-email">
                    <a href="mailto:laura@laurasmith.website" target="_blank">
                        <img src={emailIcon} />
                        <h2>Email</h2>
                    </a>
                </section>
                <section className="main-section-two-linkedin">
                    <a href="https://linkedin.com" target="_blank">
                        <img src={linkedinIcon} />
                        <h2>LinkedIn</h2>
                    </a>
                </section>
            </section>
            <section className="main-section-three-about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>
            <section className="main-section-four-interests">
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </main>
    );
}

export default Main;