import React from 'react'
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/Home.module.css'

const Products = () => {
    const [ref, inView, entry] = useInView();
    return (
        <div className='products_container' id='products'>
            <div>
                <img src='/static/suits.jpg' />
            </div>
            <div ref={ref} className='products_text-container'>
                <h1 className={`${styles.products_heading} ${inView ? styles.animateproducts_heading : ''}`}>Our Products.</h1>
                <ul>
                    <li className={`${styles.products_1} ${inView ? styles.animateproducts_1 : ''}`}>Bespoke, custom and ready-to-wear suits</li>
                    <li className={`${styles.products_2} ${inView ? styles.animateproducts_2 : ''}`}>Handspun ties</li>
                    <li className={`${styles.products_3} ${inView ? styles.animateproducts_3 : ''}`}>Leather Dress Shoes</li>
                    <li className={`${styles.products_4} ${inView ? styles.animateproducts_4 : ''}`}>Custom fitted coats</li>
                    <li className={`${styles.products_5} ${inView ? styles.animateproducts_5 : ''}`}>Handcrafted jewelry and accessories</li>
                </ul>
            </div>
        </div>
    )
}

export default Products