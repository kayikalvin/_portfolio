import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mx-auto text-center'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-gray-500'> About</p>

            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi amet pariatur enim nam deleniti! Illum quam expedita alias repudiandae hic magni minima, laboriosam est tempore, maiores iusto dolor non qui tempora odit quasi eius? Rerum iste perferendis provident minima similique nulla qui, voluptatibus est delectus soluta ad aperiam! Dolorem.</p>
            <br />
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel fugiat voluptatem velit. Suscipit sapiente sequi animi repellat velit deleniti cumque ducimus voluptatum magni quisquam debitis soluta nesciunt aliquid architecto delectus nihil asperiores quam tempora natus impedit, dolore aspernatur. A at unde dolorem quaerat quidem, architecto facilis pariatur labore iste?</p>
        </div>
    </div>
  )
}

export default About