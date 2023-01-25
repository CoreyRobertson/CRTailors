import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const Tailoring = () => {
    const [ref, inView, entry] = useInView();
    return (
        <div className='tailoring_container' id='tailoring'>
            <h2 className='tailoring_container-heading'>Tailoring.</h2>
            <div ref={ref} className='tailoring_container-grid'>
                <img src="/static/stencil.jpg" className='horizontal_img' />
                <p className={`${styles.tailoring_text1} ${inView ? styles.animatetailoring_text1 : ''}`}>The process of creating a bespoke suit requires the expertise of our experienced tailors who will take precise measurements, select the finest fabrics and craft a one-of-a-kind garment.</p>
                <img src="/static/stencil2.jpg" className='vertical_img' />
                <p className={`${styles.tailoring_text2} ${inView ? styles.animatetailoring_text2 : ''}`}>The bespoke tailoring process begins with taking detailed measurements of the individual’s body shape and size. Our tailors will then create a pattern based on these measurements and use it to cut out the fabric pieces for the suit. Following this, they will assemble all of the pieces together to create a unique piece of clothing that is tailored specifically for its wearer.</p>
                <img src="/static/sewing.jpg" className='horizontal_img' />
                <p className={`${styles.tailoring_text3} ${inView ? styles.animatetailoring_text3 : ''}`}>The end result is a well-fitting, luxurious suit that is made to last for many years. With bespoke tailoring, our customers have complete control over every aspect of their suits - from fabric selection to stitching details - resulting in truly unique garments that reflect their personal style and preferences.</p>
            </div>
        </div>
    )
}

export default Tailoring