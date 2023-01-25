import React from 'react'
import { CiInstagram } from 'react-icons/ci'

const Contact = () => {
    return (
        <div id='contact'>
            <div className='line'><hr></hr></div>
            <div className='contact_container' >
                <div className='contact_brand-container'>
                    <h1>CR Tailors</h1>
                    <CiInstagram className='icon' />
                </div>
                <div className='contact_links-container'>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#tailoring'>Tailoring</a></li>
                        <li><a href='#products'>Products</a></li>
                        <li><a href='#suits'>Suits</a></li>
                        <li><a >Booking Process</a></li>
                        <li><a>Legal</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Contact