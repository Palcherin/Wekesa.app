import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-blue-500 to-green-400 min-h-screen w-full r-0 l-0 md:flex-col md:justify-center md:items-start px-4 md:px-10 py-10 gap-10 self-center'>

      {/* Header */}
      <div className='text-white text-center pt-40 md:pt-32 '>
        <h1 className='text-4xl font-bold md:text-2xl'>Contact Us</h1>
        <p className='mt-4 md:text-xl'>
          Get in touch with us for any inquiries or support.
        </p>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row w-[95%] md:w-[90%] mx-auto min-h-[60vh] justify-around items-center mt-12 gap-10'>

        {/* Contact Info */}
        <div className='p-6 rounded-lg text-center md:text-left'>
          <h2 className='text-white mt-2 flex flex-row gap-1 items-center text-2xl font-bold justify-center md:justify-start'>
            <FaHome className="text-white text-3xl hover:text-green-300 transition" />
            Contact Information
          </h2>
            <p className='text-white mt-2 flex flex-row gap-1 items-center justify-center md:justify-start'>
            <FaMapMarkerAlt className="text-white text-3xl hover:text-green-300 transition" />
            Address: 123 React St, JavaScript City, Web
          </p>
            <p className='text-white mt-2 flex flex-row gap-1 items-center justify-center md:justify-start'>
             <FaEnvelope className="text-white text-3xl hover:text-green-300 transition " />
            Email: wekesadev@gmail.com
          </p>
          <p className='text-white mt-2 flex flex-row gap-1 items-center justify-center md:justify-start'>
           <FaPhone className="text-white text-3xl hover:text-green-300 transition" />
            Phone: +254 743666719
          </p>
        </div>

        {/* Form */}
        <div className='bg-white/20 p-6 rounded-lg shadow-lg shadow-black/30 w-1/2 md:w-[100%]'>
          <h2 className='text-xl font-semibold text-white'>
            Send a Message
          </h2>

          <form className='mt-4 md:w-full flex flex-col gap-4'>

            <section className='flex flex-col md:flex-row gap-4 '>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </section>

            <section className='flex flex-col md:flex-row gap-4 mt-4'>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </section>

            <textarea
              placeholder="Your Message"
              className="w-full h-48 md:h-60 mt-4 p-2 rounded bg-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
               className="bg-gradient-to-r from-blue-500 to-green-400 py-2 rounded-full font-semibold text-center text-white hover:from-blue-600 hover:to-green-500"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
