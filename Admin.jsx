import React from "react";
import { useNavigate } from 'react-router-dom';
import Display from "./Display";

const Admin = () => {
     const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 pt-17.5 to-green-400 text-white flex justify-center">

      <div className="w-full max-w-7xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
             {/* Admin Dashboard */}
        <div className="bg-white/20 rounded-lg shadow-lg shadow-black/30 p-6 max-h-[20rem]">
          <h2 className="text-2xl font-bold mb-4">
            Admin Dashboard
          </h2>
          <p className="text-sm opacity-90">
            Overview of system status and quick actions.
          </p>
          <section>
            <ul className="mt-4 space-y-2">
                <li className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer" onClick={()=>navigate('/addblogs')}>
                    Manage Blogs
                </li>
                <li className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer" onClick={()=>navigate('/manageprojects')}>
                    Manage Projects
                </li>
                <li className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer" onClick={()=>navigate('/managemessages')}>
                   Manage Messages
                </li>
                <li className="bg-white/10 p-2 rounded hover:bg-white/20 cursor-pointer" onClick={()=>navigate('/manageannouncements')}>
                    Manage Announcements
                </li>
            </ul>
          </section>
        </div>
         {/* Analytics */}
        <div className="bg-white/20 rounded-lg shadow-lg shadow-black/30 p-6 max-h-[20rem]">
          <h2 className="text-2xl font-bold mb-4">
            Analytics
          </h2>
          <p className="text-sm opacity-90">
            Track visitors, engagement, and performance.
          </p>
        </div>
        </div>

        {/* Projects & Blogs (BIGGER) */}
        <div className="bg-white rounded-lg shadow-lg shadow-black/30 p-6 min-h-[20rem] text-gray-800 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            Projects & Blogs
          </h2>
         
          <Display/>
          
        </div>

       

      </div>
    </div>
  );
};

export default Admin;
