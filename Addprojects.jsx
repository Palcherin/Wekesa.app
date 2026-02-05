import React, { useState } from 'react'
import { db, auth} from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
const Addprojects = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
     const [loading, setLoading] = useState(false);
    

     const handleSubmit = async (e) => {
        e.preventDefault();
        if(!auth.currentUser){
            alert("You must be logged in.");
            return;
        }
        if(!title.trim() || !description.trim() || !url.trim()){
            alert("Fill all fields.");
            return;
        }
        setLoading(true);

        try {
            await addDoc(collection(db, "projects"), {
                title,
                description,
                url,
                createdAt: new Date()
            });
            alert("Project added successfully!");
            setTitle("");
            setDescription("");
            setUrl("");
        } catch (error) {
            console.error("Error adding project:", error);
            alert("Error adding project.");
        } finally {
            setLoading(false);
        }
    }

  return (
<div className="min-h-screen align-middle bg-gradient-to-b from-blue-500 to-green-400 text-white flex justify-center items-center pt-10 left-[30%]">
        <div className="w-full max-w-7xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 align-middle text-center">
            <div>
                <h2 className="text-2xl font-bold mb-4">
                    Add New Project
                </h2>
                <form className="bg-white/20 rounded-lg shadow-lg shadow-black/30 p-6 flex flex-col gap-4 " onSubmit={handleSubmit}>
                    <input  type="text" placeholder="Project Title" className="p-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" value={title} onChange={e => setTitle(e.target.value)} required />
                    <textarea placeholder="Project Description" className="p-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[150px]" value={description} onChange={e => setDescription(e.target.value)} required />
                    <input type="text" placeholder="Project/github URL" className="p-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" value={url} onChange={e => setUrl(e.target.value)} required />
                     <button type="submit" disabled={loading} className={`py-3 px-6 rounded-lg font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-blue-500"}`}>
            {loading ? "Uploading..." : "Add Project"}
          </button>
                </form>
            </div>
            <div className="md:col-span-2">
            </div>
        </div>
    </div>
  )
}

export default Addprojects
