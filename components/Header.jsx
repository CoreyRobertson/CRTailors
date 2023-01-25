import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'
import Carousel from './Carousel';
const Header = () => {
    const [ref, inView] = useInView()
    const [ref2, inView2] = useInView()
    return (
        <Carousel>
            <div className='header_slide1' id='home'>
                <div ref={ref} className='header_slide1-text'>
                    <h1 className={`${styles.header_heading} ${inView ? styles.animateheader_heading : ''}`}>Traditional Tailoring</h1>
                    <h2 className={`${styles.header_heading2} ${inView ? styles.animateheader_heading2 : ''}`}>For a Modern Professional</h2>
                    <button className={`${styles.header_button} ${inView ? styles.animateheader_button : ''}`} type='button'>Make a booking.</button>
                </div>
            </div>
            <div className='header_slide2' >
                <div ref={ref2} className='header_slide2-text'>
                    <h1 className={`${styles.header2_heading} ${inView2 ? styles.animateheader2_heading : ''}`}>Suiting, done differently.</h1>
                </div>
                <div className='header_slide2-button'>
                    <button className={`${styles.header_button2} ${inView2 ? styles.animateheader_button2 : ''}`}>Explore the collection.</button>
                </div>
            </div>
        </Carousel>
    )
}

export default Header