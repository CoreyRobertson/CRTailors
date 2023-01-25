import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const Suits = () => {
    const [ref, inView, entry] = useInView();
    return (
        <div ref={ref} className='suits_container' id='suits'>
            <div>
                <div className='suits_top-container'>
                    <div className='suits_top-container_text'>
                        <h1 className={`${styles.suits_heading} ${inView ? styles.animatesuits_heading : ''}`}>Our Suits.</h1>
                        <p className={`${styles.suits_text} ${inView ? styles.animatesuits_text : ''}`}>Our suit catalogue has something to offer for everyone, be it bespoke or ready-to-wear. Achieve a sophisticated and stylish look with our high-quality fabrics and tailoring. Experience the luxury of looking sharp and feeling confident in every occasion</p>
                    </div>
                    <img src='/static/sandsuit.jpg' />
                </div>
                <div className='suits_bottom-container'>
                    <img src='/static/tape.jpg' />
                    <div className='suits_bottom-container_text'>
                        <p className={`${styles.suits_text2} ${inView ? styles.animatesuits_text2 : ''}`}>Having a bespoke suit made is a process that requires time, effort and attention to detail. From selecting the right fabrics to getting the perfect fit, there are many steps involved in creating a bespoke suit that will last for years.</p>
                        <p className={`${styles.suits_text2} ${inView ? styles.animatesuits_text2 : ''}`}>
                            The bespoke tailoring process begins with taking detailed measurements of the individual’s body shape and size. The tailor will then create a pattern based on these measurements and use it to cut out the fabric pieces for the suit. After this, they will assemble all of the pieces together to create a unique piece of clothing that is tailored specifically for its wearer.
                        </p>
                        <p className={`${styles.suits_text2} ${inView ? styles.animatesuits_text2 : ''}`}>
                            The end result is a well-fitting, luxurious suit that is made to last for many years. With bespoke tailoring, customers have complete control over every aspect of their suits - from fabric selection to stitching details - resulting in truly unique garments that reflect their personal style and preferences.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Suits