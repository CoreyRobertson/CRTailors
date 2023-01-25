import React from 'react'
import styles from '@/styles/Home.module.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState, useEffect } from "react";

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);


        };
    }, []);



    return (

        <nav className="navbar">
            <a href="/" className="brand-name">
                CR Tailors
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <BiMenuAltRight className='hamburger_icon' />
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="#home" className='link_home' onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>About Us</a>
                    </li>
                    <li>
                        <a href="#tailoring" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Tailoring</a>
                    </li>
                    <li>
                        <a href="#products" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Products</a>
                    </li>
                    <li>
                        <a href="#suits" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Suits</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

