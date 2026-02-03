import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-b from-blue-500 to-green-400 min-h-screen w-full flex items-center justify-center overflow-x-hidden px-6">
      
      <div className="text-center text-white max-w-lg">
        
        {/* Big 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-2xl font-semibold">
          Oops! Page not found
        </p>

        {/* Description */}
        <p className="mt-4 text-white/90">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — let’s get you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white/20 text-blue-500 font-semibold rounded-full border border-white/40 hover:bg-white/30 transition"
          >
            Go Back
          </button>
        </div>

        {/* Decorative element */}
        <div className="mt-10 text-white/60 text-sm">
          Lost in the code? Happens to the best of us 👨‍💻
        </div>

      </div>
    </div>
  )
}

export default Blog
