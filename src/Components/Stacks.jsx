import React from 'react'
import { FaGithub,  FaReact, FaJava, FaNodeJs, FaMapMarkerAlt, FaCss3, FaJs } from 'react-icons/fa'

const Stacks = () => {
  return (
    <div>
      <div className="pt-16 pb-10">
  <h1 className="text-white text-center text-3xl md:text-4xl font-bold">
    Tech Stack
  </h1>

  <p className="text-white/80 text-center mt-3 max-w-xl mx-auto">
    Technologies and tools I use to build fast, scalable, and user-friendly web applications.
  </p>

  <div className="flex flex-wrap justify-center gap-6 mt-10">

    <div className="bg-white/20 backdrop-blur-md w-40 h-24 rounded-xl
                    flex items-center justify-center text-white font-semibold
                    shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <FaReact className="mr-2" />
      React
    </div>

    <div className="bg-white/20 backdrop-blur-md w-40 h-24 rounded-xl
                    flex items-center justify-center text-white font-semibold
                    shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <FaCss3 className="mr-2" />
      Tailwind CSS
    </div>

    <div className="bg-white/20 backdrop-blur-md w-40 h-24 rounded-xl
                    flex items-center justify-center text-white font-semibold
                    shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <FaJs className='mr-2 font-bold text-xl'/>
      JavaScript
    </div>

    <div className="bg-white/20 backdrop-blur-md w-40 h-24 rounded-xl
                    flex items-center justify-center text-white font-semibold
                    shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <FaNodeJs className="mr-2" />
      Node.js
    </div>

    <div className="bg-white/20 backdrop-blur-md w-40 h-24 rounded-xl
                    flex items-center justify-center text-white font-semibold
                    shadow-lg hover:-translate-y-2 transition-all duration-300">
                        <FaGithub className="mr-2" />
      Git & GitHub
    </div>

  </div>
</div>

    </div>
  )
}

export default Stacks
