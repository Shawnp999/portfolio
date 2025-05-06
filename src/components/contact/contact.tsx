import '../../css/contact/contact.css';
// import React from 'react';
import {github, linkedin, envelope, paperPlane} from '../../assets/images/icons/icons';
import {useInDevelopmentLink} from "../utils/inDev/developmentContext.tsx";


const Contact = () => {

    // const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //     e.preventDefault();
    //     alert('Bear with me, currently in development :)');
    // };

    const handleInDevelopmentClick = useInDevelopmentLink();

    return (
        <section id="contact-section" /*style={{ marginTop: 300}}*/>
            <div className="contact-container">
                <h2>Get In Touch</h2>

                <div className="social-links">
                    <a
                        href="https://github.com/Shawnp999"
                        className="social-link"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} height="30px" width='30px' alt="Github logo"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shawn-pantzlaff-b86614239"
                        className="social-link"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} height="30px" width='30px' alt="LinkedIn logo"/>
                    </a>

                    <a
                        href="mailto:2001shawnp@gmail.com"
                        className="social-link"
                        aria-label="Email"
                        onClick={handleInDevelopmentClick}
                    >
                        <img src={envelope} height="30px" width='30px' alt="Email logo"/>
                    </a>

                    <a
                        href="https://t.me/shawn_pantzlaff"
                        className="social-link"
                        aria-label="Telegram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={paperPlane} height="30px" width='30px' alt="Telegram logo"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;