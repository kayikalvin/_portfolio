import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 pt-40 max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 mx-auto text-center'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 font-semibold text-gray-300'>Submit the form to get in  touch with us</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bwngkvna" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message" rows='10' id="" placeholder='Enter your message ' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Lets talk
                    </button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Contact