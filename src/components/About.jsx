import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex  flex-col w-full h-full'>
            <div className='pb-8 mx-auto text-center'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-gray-500'> About</p>

            </div>
            <p className='text-xl mt-20'>Hello! I'm Alvin Kayi Mwashi, a passionate data analyst with a background in Informatics from Rongo University. With a blend of technical expertise and analytical insight, I specialize in turning raw data into actionable insights that drive business decisions. My experience spans across data analysis, cybersecurity, and web development, giving me a versatile skill set to tackle complex problems in various domains.
               I enjoy working with diverse datasets and uncovering patterns that lead to impactful solutions. Whether it's building predictive models, creating visualizations, or optimizing processes, I am committed to delivering data-driven results that empower organizations to make informed decisions.
                Let’s connect and explore how I can help you harness the power of data to achieve your goals.</p>
            <br />
            
        </div>
    </div>
  )
}

export default About