import React from 'react'
import about from '../assets/Images/about.jpg'

const About = () => {
    return (
        <div className='bg-white'>
            <div className='p-24 m-2 grid grid-cols-2'>
                <div>
                    <h2 className='text-2xl font-medium text-blue-800'>About Us</h2>
                    <p className='text-sm  text-black  bg-green-600   font-serif font-semibold p-6' >
                    Zomato offers takeaway option for customers and restaurants at zero commission and payment gateway charges. 
                    Learn how to switch to takeaway on Zomato app and website, 
                    and how to follow safety measures
                    </p>
                </div>
                <div className='flex items-center justify-center m-5'>
                    <img src={about} alt="About us" className='w-[200px] h-[200px] object-cover' />

                </div>
            </div>

        </div>
    )
}

export default About;
