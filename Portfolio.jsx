import React from 'react'
import Stacks from './Stacks'
import projectImg from '../assets/istockphoto-1224500457-1024x1024.jpg'


const Portfolio = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-green-400 min-h-screen w-full ms:w-full r-0 l-0 px-4 md:px-10 py-10 gap-10 self-center">

      <h1 className="text-center text-white text-4xl font-bold pt-32">
        Our Portfolio
      </h1>

      <h2 className="text-center text-white text-xl mt-4 px-4">
        Below are some of the great projects we have designed and delivered.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto mt-10">

        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="shadow-lg shadow-black/30 bg-white/20 rounded-lg p-4
                       flex flex-col items-center gap-4
                       hover:-translate-y-3 hover:shadow-2xl
                       transition-all duration-300"
          >
            <p className="text-white font-bold text-lg text-center">
              Pedi Wa Jersey
            </p>

            <img
              src={projectImg}
              alt="Pedi Wa Jersey project preview"
              className="w-full h-40 object-cover rounded-md"
            />

            <a
              href="https://www.pediwajersey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-blue-200"
            >
              Visit Website
            </a>
          </div>
        ))}

      </div>

      <Stacks />
    </div>
  )
}

export default Portfolio
