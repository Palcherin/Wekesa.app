import React, { useState } from 'react';
import { db, auth} from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";


const Addblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("You must be logged in.");
      return;
    }
    if (!title.trim() || !content.trim() || !author.trim()) {
      alert("Fill all fields.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
        uid: auth.currentUser.uid,
     
      });

      alert("Blog added!");
      setTitle(""); setContent(""); setAuthor(""); 
    } catch (error) {
      console.error("Error:", error);
      alert("Failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-400 text-white flex justify-center items-center pt-10">
      <div className="w-full max-w-lg p-8 bg-white/20 rounded-xl shadow-2xl shadow-black/40 backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Blog</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input type="text" placeholder="Blog Title" className="p-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" value={title} onChange={e => setTitle(e.target.value)} required />
          <textarea placeholder="Blog Content" className="p-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[150px]" value={content} onChange={e => setContent(e.target.value)} required />
          <input type="text" placeholder="Author Name" className="p-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" value={author} onChange={e => setAuthor(e.target.value)} required />
          <button type="submit" disabled={loading} className={`py-3 px-6 rounded-lg font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-blue-500"}`}>
            {loading ? "Uploading..." : "Add Blog"}
          </button>
          <a href="/blog" className="text-center text-blue-300 hover:text-blue-400 transition">View All Blogs</a>
        </form>
      </div>
    </div>
  );
};

export default Addblog;