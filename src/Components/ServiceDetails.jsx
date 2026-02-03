import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Stacks from './Stacks'

const ServiceDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-green-400 text-white">
        <p className="mb-4">No service selected.</p>
        <button
          onClick={() => navigate('/services')}
          className="px-4 py-2 bg-white/20 rounded"
        >
          Go back to Services
        </button>
      </div>
    )
  }

  return (
    <div className='bg-gradient-to-b from-blue-500 to-green-400 min-h-screen p-10 text-white'>
      
      <div className='align-middle text-center mt-20'>
        <h1 className='text-4xl font-bold mb-4'>
        {state.title}
      </h1>

      <p className='text-lg max-w-xl ml-[25%] mr-[20%]'>
        {state.description}
      </p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white/20 rounded text-blue-500 ml-[45%] mr-[40%]"
      >
        ← Back
      </button>
     <Stacks/>
    </div>
  )
}

export default ServiceDetails
