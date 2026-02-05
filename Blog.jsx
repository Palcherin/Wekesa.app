import React from 'react'
import Display from '../Admin/Display'

const Blog = () => {
  return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-green-400 text-white pt-30">
        <div>
          <h1 className="mb-4 text-4xl font-bold">Blog Posts</h1>
        </div>
        <div className="w-full max-w-4xl p-6 bg-white/20 rounded-lg shadow-lg shadow-black/30">
          <Display/>
        </div>
        
    </div>
  )
}

export default Blog
