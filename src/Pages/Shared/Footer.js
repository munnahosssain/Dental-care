import React from 'react';
import footer from '../../assets/images/footer.png';
import appointment from '../../assets/images/appointment.png';

const Footer = () => {
    return (
        <div style={{
            background: `URL(${footer})`,
            backgroundSize: 'cover'
        }}
        >
            <footer className="footer p-12 text-base-content">
                <div>
                    <p>ACME Industries Ltd.<br /> Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Our Health</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer >
            <p className="footer-center">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;