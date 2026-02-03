import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-blue-500 to-green-400 h-auto'>

      <div className="relative flex flex-col lg:flex-row h-[94vh] gap-10 w-full items-center justify-center overflow-hidden p-6 md:p-10 lg:p-20">
        
        {/* Content */}
        <div className="h-full w-full flex flex-col items-center lg:items-start justify-center text-white text-center px-1.5">
          <h1 className="text-5xl font-bold mb-4">
            Hello, Its Wekesa, The web dev
          </h1>
          <p className="text-xl">
            This is the home page of my React application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="mt-4 px-6 py-3 bg-transparent border-2 border-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-500 transition">
              Learn More
            </button>
          </div> 
        </div>

        {/* Background Image */}
        <div className="hidden lg:block w-full h-full top-20 right-10 relative opacity-30 z-auto rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="Forest"
            className='w-full md:w-[50%] self-center h-64 md:h-full object-cover rounded-lg md:ml-8'
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 w-[85%] mx-auto mb-10'>
        <div className='bg-amber-100 h-64 shadow-xl shadow-black/30 rounded-lg flex items-center justify-center w-auto hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300'>
          <h1 className='text-white text-center'>What we do</h1>
        </div>
        <div className='bg-amber-100 h-64 shadow-xl shadow-black/30 rounded-lg flex items-center justify-center w-auto hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300'>
          <h1>What We Use</h1>
        </div>
        <div className='bg-amber-100 h-64 shadow-xl shadow-black/30 rounded-lg flex items-center justify-center w-auto hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300'>
          <h1>How We Do It</h1>
        </div>
      </div>
      <div className='h-auto md:h-100 m-4 md:m-20 w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center bg-white/20 rounded-lg shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300'>
  
  <div className='m-5 h-full flex justify-center md:justify-start gap-5 w-full md:w-1/2'>
    <img
      src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
      alt='Forest'
      className='w-full md:w-[50%] self-center h-64 md:h-full object-cover rounded-lg md:ml-8'
    />
  </div>  

  <div className='h-full w-full md:w-1/2 flex items-center text-center justify-center md:right-20 px-4'>
    <h1 className='text-2xl font-bold text-center'>
      What can i do for you?
    </h1>
  </div>

</div>
<Footer/>

    </div>
  )
}

export default Home
