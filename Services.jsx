import React from 'react'
import { useNavigate } from 'react-router-dom'
import Stacks from './Stacks'

const Services = () => {
  const navigate = useNavigate()

  const handleClick = (service) => {
    navigate('/service-details', {
      state: service
    })
  }

  return (
    <div className='bg-gradient-to-b from-blue-500 to-green-400 min-h-screen w-full'>
      <h1 className='text-center text-white text-4xl font-bold pt-32'>
        Our Services
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-10'>
        
        <div
  onClick={() =>
    handleClick({
      title: 'Web Development',
       description: 'We design and develop modern, high-performance websites and web applications tailored to your business needs. Our focus is on clean architecture, scalability, security, and responsive design to ensure your product performs reliably across all devices and platforms.'
    })
  }
  className="
    cursor-pointer 
    bg-white/20 
    h-64 
    rounded-lg 
    shadow-xl 
    shadow-black/30
    flex 
    items-center 
    justify-center
    hover:-translate-y-3 
    hover:shadow-2xl
    transition-all 
    duration-300
  "
>
  <h1 className="text-white text-center">
    Web Development
  </h1>
</div>

          <div
          onClick={() => handleClick({
            title: 'Web Development',
            description: 'We build cross-platform and native mobile applications that deliver smooth performance and intuitive user experiences. From concept to deployment, we focus on speed, usability, and maintainability to help your app succeed in competitive app markets.'
          })}
          className='cursor-pointer bg-white/20 h-64 rounded-lg shadow-xl shadow-black/30
                     flex items-center justify-center hover:-translate-y-3 hover:shadow-2xl
                     transition-all duration-300'
        >
          <h1 className='text-white text-center'>Mobile App Development</h1>
        </div>
          <div
          onClick={() => handleClick({
            title: 'UI/UX Design',
           description: 'We create visually appealing and user-centered interfaces that prioritize clarity and ease of use. Our design process involves research, wireframing, prototyping, and testing to ensure every interaction feels natural and engaging for users.'
          })}
          className='cursor-pointer bg-white/20 h-64 rounded-lg shadow-xl shadow-black/30
                     flex items-center justify-center hover:-translate-y-3 hover:shadow-2xl
                     transition-all duration-300'
        >
          <h1 className='text-white text-center'>UI/UX Design</h1>
        </div>
          <div
          onClick={() => handleClick({
            title: 'SEO Services',
            description: 'We improve your website’s visibility on search engines by optimizing technical performance, content structure, and on-page elements. Our SEO strategies are designed to drive long-term organic traffic and attract users who are actively searching for your services.'
          })}
          className='cursor-pointer bg-white/20 h-64 rounded-lg shadow-xl shadow-black/30
                     flex items-center justify-center hover:-translate-y-3 hover:shadow-2xl
                     transition-all duration-300'
        >
          <h1 className='text-white text-center'>SEO Services</h1>
        </div>

        <div
        
          onClick={() => handleClick({
            title: 'Digital Marketing',
            description: 'We help businesses grow their online presence through data-driven digital marketing strategies. From social media campaigns to content creation and paid advertising, we focus on increasing engagement, conversions, and brand awareness.'
          })}
          className='cursor-pointer bg-white/20 h-64 rounded-lg shadow-xl shadow-black/30
                     flex items-center justify-center hover:-translate-y-3 hover:shadow-2xl
                     transition-all duration-300'
        >
          <h1 className='text-white text-center'>Digital Marketing</h1>
        </div>
          <div
          onClick={() => handleClick({
            title: 'E-commerce Solutions',
             description: 'We build secure and scalable e-commerce platforms that provide seamless shopping experiences. Our solutions include product management, payment integration, and performance optimization to help you convert visitors into loyal customers.'
          })}
          className='cursor-pointer bg-white/20 h-64 rounded-lg shadow-xl shadow-black/30
                     flex items-center justify-center hover:-translate-y-3 hover:shadow-2xl
                     transition-all duration-300'
        >
          <h1 className='text-white text-center'>E-commerce Solutions</h1>
        </div>

      </div>
      <Stacks/>
    </div>
  )
}

export default Services
