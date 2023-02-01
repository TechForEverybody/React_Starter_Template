import React from 'react'
import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
    return (
        <>
            <footer>
                <div className="footerOptions">
                    <div className="smallIntro">
                        <h1>Site_Name</h1>
                        <p>Site Description.
                        </p>
                        <div className="links">
                            <a href="https://github.com/TechForEverybody"><GitHubIcon /></a>
                        </div>
                    </div>
                    <div className="option connectDetails">
                        <h4>Connect With Us</h4>
                        <li><NavLink to="/suggestions">Give Suggestions</NavLink></li>
                        <li><NavLink to="/complaints">Register Complaint</NavLink></li>
                    </div>
                    <div className="option contactDetails">
                        <h4>Contact Us</h4>
                        <h5>Get in touch with us!</h5>
                        <li><a href="mailto:farmerfriend2023@gmail.com">Email: <span>xxxxxxxxx@gmail.com</span></a></li>
                        <li><a href="tel:+91xxxxxxxxxx">Phone: <span>+91xxxxxxxxxx</span></a></li>
                    </div>
                </div>
                <div className="bottomTermsLink">
                    <NavLink to="/policy#terms">Terms and Conditions</NavLink>
                    <NavLink to="/policy">Data Policies</NavLink>
                </div>
                <hr />
                <div className="footerBottom">
                    <h3>Site_Name || All Rights are Reserved</h3>
                </div>
            </footer>
        </>
    )
}

export default Footer