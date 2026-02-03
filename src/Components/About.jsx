import React from 'react'

const About = () => {
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-6 pt-10 mb-20'>

  {/* Card 1 – About */}
  <div className='w-50 h-50 bg-white rounded-2xl p-6 text-center
                  hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 shadow-xl'>
    <h3 className='text-xl font-bold text-blue-600 mb-2'>Who I Am</h3>
    <p className='text-gray-600 text-sm'>
      A passionate full-stack developer focused on building clean,
      performant, and scalable web applications.
    </p>
  </div>

  {/* Card 2 – Tech Stack */}
  <div className='w-50 h-50 bg-white rounded-2xl p-6 text-center
                  hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 shadow-xl'>
    <h3 className='text-xl font-bold text-blue-600 mb-2'>Tech Stack</h3>
    <p className='text-gray-600 text-sm'>
      React, Tailwind CSS, Node.js, Express, MongoDB, Git, REST APIs.
    </p>
  </div>

  {/* Card 3 – What I Build */}
  <div className='w-50 h-50 bg-white rounded-2xl p-6 text-center
                  hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 shadow-xl'>
    <h3 className='text-xl font-bold text-blue-600 mb-2'>What I Build</h3>
    <p className='text-gray-600 text-sm'>
      Responsive websites, dashboards, portfolios, business systems,
      and modern web apps.
    </p>
  </div>

  {/* Card 4 – How I Work */}
  <div className='w-50 h-50 bg-white rounded-2xl p-6 text-center
                  hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 shadow-xl'>
    <h3 className='text-xl font-bold text-blue-600 mb-2'>My Approach</h3>
    <p className='text-gray-600 text-sm'>
      Clean code, reusable components, performance-first design,
      and user-focused solutions.
    </p>
  </div>

  {/* Card 5 – CTA */}
  <div className='w-50 h-50 bg-white rounded-2xl p-6 text-center
                  hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 shadow-xl'>
    <h3 className='text-xl font-bold text-blue-600 mb-2'>Let’s Work</h3>
    <p className='text-gray-600 text-sm'>
      Available for freelance work, collaborations,
      and full-time opportunities.
    </p>
  </div>

</div>

    </div>
  )
}

export default About
