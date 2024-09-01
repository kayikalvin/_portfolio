import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
    const images = [
        {
            id: 1,
            img: html,
            label: 'HTML',
            shadow: '0px 4px 8px rgba(255, 69, 0, 0.6)' 
        },
        {
            id: 2,
            img: css,
            label: 'CSS',
            shadow: '0px 4px 8px rgba(0, 191, 255, 0.6)' 
        },
        {
            id: 3,
            img: javascript,
            label: 'JavaScript',
            shadow: '0px 4px 8px rgba(255, 215, 0, 0.6)' 
        },
        {
            id: 4,
            img: reactImg,
            label: 'React',
            shadow: '0px 4px 8px rgba(0, 204, 255, 0.6)' 
        },
        {
            id: 5,
            img: nextjs,
            label: 'Next.js',
            shadow: '0px 4px 8px rgba(0, 255, 100, 0.6)' 
        },
        {
            id: 6,
            img: github,
            label: 'GitHub',
            shadow: '0px 4px 8px rgba(0, 0, 0, 0.6)' 
        },
        {
            id: 7,
            img: tailwind,
            label: 'Tailwind CSS',
            shadow: '0px 4px 8px rgba(56, 189, 248, 0.6)' 
        }
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-700 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full text-white'>
                <div className='mx-auto text-center pb-4'>
                    <p className='text-4xl text-gray-300 font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I have worked on</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {images.map(({ id, img, label, shadow }) => (
                        <div 
                            key={id} 
                            className='hover:scale-105 duration-500 py-2 rounded-lg'
                            style={{ boxShadow: shadow }}
                        >
                            <img src={img} alt={label} className='w-20 mx-auto'/>
                            <p className='mt-4'>{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
