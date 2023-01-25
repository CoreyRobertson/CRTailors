import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const About = () => {
    const [ref, inView, entry] = useInView();
    return (
        <div ref={ref} className='about_container' id='about'>
            <h2 className={`${styles.about_heading} ${inView ? styles.animateabout_heading : ''}`}>About Us.</h2>
            <p className={`${styles.about_text} ${inView ? styles.animateabout_text : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    )
}

export default About