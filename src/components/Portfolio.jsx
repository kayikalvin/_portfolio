import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { FaGithub } from "react-icons/fa";


const Portfolio = () => {
    // Updated array with demoUrl and codeUrl
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            demoUrl: 'https://github.com/kayikalvin/World-homicide-analysis',
            codeUrl: 'https://github.com/kayikalvin/World-homicide-analysis',
            name:'World Homicide Analysis'
        },
        {
            id: 2,
            src: reactParallax,
            demoUrl: 'https://github.com/kayikalvin/Walmart-DataAnalysis',
            codeUrl: 'https://github.com/kayikalvin/Walmart-DataAnalysis',
            name:'Walmart Sales Analysis'
        },
        {
            id: 3,
            src: navbar,
            demoUrl: 'https://github.com/kayikalvin/Udemy-DataAnalysis',
            codeUrl: 'https://github.com/kayikalvin/Udemy-DataAnalysis',
            name:'Udemy Courses Analysis'
        },
        {
            id: 4,
            src: reactSmooth,
            demoUrl: 'https://github.com/kayikalvin/Weather-dataset-Analysis',
            codeUrl: 'https://github.com/kayikalvin/Weather-dataset-Analysis',
            name:'Weather Data Analysis'
        },
        {
            id: 5,
            src: installNode,
            demoUrl: 'https://github.com/kayikalvin/Ultra_Marathon_USA_Analysis',
            codeUrl: 'https://github.com/kayikalvin/Ultra_Marathon_USA_Analysis',
            name:'USA Ultra Marathon Analysis'
        },
        {
            id: 6,
            src: reactWeather,
            demoUrl: 'https://github.com/kayikalvin/diabetespredictor',
            codeUrl: 'https://github.com/kayikalvin/diabetespredictor',
            name:'Diabetes Predictor App'
        },
    ];

    // Click handler functions
    const handleDemoClick = (url) => {
        window.open(url, '_blank');
    };

    const handleCodeClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div name='portfolio' id='portfolio' className='bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
                <div className='pb-8 mx-auto text-center'>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right now</p>
                </div>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, demoUrl, codeUrl, name }) => (
                        <div key={id} className='shadow-md shadow-cyan-800 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-110' />
                            <div className='flex justify-center align-middle text-2xl font-bold pt-4 text-gray-300'>
                                {name}
                            </div>
                            <div className='flex items-center justify-center'>
                                <button 
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 font-bold text-gray-500 text-xl hover:text-cyan-500'
                                    onClick={() => handleDemoClick(demoUrl)}
                                >
                                    Demo
                                </button>
                                <button 
                                    className='w-1/2 px-6 py-3 m-4 flex gap-2 duration-200 hover:scale-110 font-bold text-xl text-gray-300  hover:text-cyan-500'
                                    onClick={() => handleCodeClick(codeUrl)}
                                >
                                    <FaGithub size={20}/>

                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
