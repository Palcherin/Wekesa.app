import React from 'react'
import Stacks from './Stacks'
import About from './About'

const Home = () => {
  return (
     <div className='bg-gradient-to-b from-blue-500 to-green-400 min-h-screen left-[10%] right-[10%] min-w-full overflow-x-hidden px-2.5'>
    <div className='flex flex-col md:flex-row min-h-[70vh] w-full pt-20 md:pt-[5%] px-4 md:px-10 gap-10 self-center'>

  {/* Text section */}
  <div className='w-full md:w-1/2 min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center items-center text-center'>
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-10 md:pt-40">
      Hi, Nice To Meet You
    </h1>   

    <h2 className="text-white pt-4 text-lg sm:text-xl md:text-2xl">
      I'm Paul Wekesa, a Full Stack Developer
    </h2>

    <p className="text-white pt-4 max-w-md">
      I build responsive and interactive web applications using modern technologies.
    </p>

    <div className='flex flex-col sm:flex-row gap-4 mt-8'>
      <button className='bg-white/20 px-6 py-2 rounded-full font-semibold hover:bg-white/30 text-blue-500'>
        Get In Touch
      </button>
      <button className='bg-white/20 px-6 py-2 rounded-full font-semibold hover:bg-white/30 text-blue-500'>
        My Portfolio
      </button>
    </div>
  </div>

  {/* Image section */}
  <div className='w-full md:w-1/2 h-[40vh] md:h-[70vh] rounded-2xl shadow-xl p-4 md:p-6'>
    <img 
      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
      alt="Developer at work" 
      className="w-full h-full rounded-2xl object-cover"
    />
  </div>

</div>

    <div className='mt-20'>
      <About/>
    </div>
<div className='mt-[-5]'>
  <Stacks/>
</div>
    </div>
  )
}

export default Home
