import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{
            background: `URL(${footer})`,
            backgroundSize: 'cover'
        }}
        >
            <footer className="footer p-12 text-base-content">
                <div>
                    <p>Dental CAre.<br />New Smile Starts Here</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Branding</Link>
                    <Link to='' className="link link-hover">Design</Link>
                    <Link to='' className="link link-hover">Marketing</Link>
                    <Link to='' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Our Health</span>
                    <Link to='' className="link link-hover">About us</Link>
                    <Link to='' className="link link-hover">Contact</Link>
                    <Link to='' className="link link-hover">Jobs</Link>
                    <Link to='' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </footer >
            <p className="footer-center">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;