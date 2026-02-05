// src/components/Display.jsx (or wherever you place it)
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseconfig';

const Display = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState(null);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    // Blogs listener
    const blogsQuery = query(
      collection(db, "blogs"),
      orderBy("createdAt", "desc")
    );

    const unsubscribeBlogs = onSnapshot(
      blogsQuery,
      (snapshot) => {
        const blogsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
        setBlogsLoading(false);
      },
      (error) => {
        console.error("Blogs snapshot error:", error);
        setBlogsError("Failed to load blogs.");
        setBlogsLoading(false);
      }
    );

    // Projects listener
    const projectsQuery = query(
      collection(db, "projects"),
      orderBy("createdAt", "desc")
    );

    const unsubscribeProjects = onSnapshot(
      projectsQuery,
      (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
        setProjectsLoading(false);
      },
      (error) => {
        console.error("Projects snapshot error:", error);
        setProjectsError("Failed to load projects.");
        setProjectsLoading(false);
      }
    );

    // Cleanup both listeners
    return () => {
      unsubscribeBlogs();
      unsubscribeProjects();
    };
  }, []); // Empty dependency array → runs once on mount

  const isLoading = blogsLoading || projectsLoading;

  if (isLoading) {
    return <div className="text-center p-12 text-xl text-gray-300">Loading content...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Blogs Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Blogs (Live Updates)
        </h2>

        {blogsError ? (
          <p className="text-center text-red-400 text-lg">{blogsError}</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No blogs added yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/30 border border-white/20 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">{blog.title}</h3>
                <p className="text-gray-200 mb-4 line-clamp-4">{blog.content}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {blog.author || 'Anonymous'} •{' '}
                  {blog.createdAt ? new Date(blog.createdAt).toLocaleString() : 'No date'}
                </p>
                {blog.attachmentUrl && (
                  <img
                    src={blog.attachmentUrl}
                    alt={blog.title || "Attachment"}
                    className="w-full h-48 object-cover rounded-lg mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Projects (Live Updates)
        </h2>

        {projectsError ? (
          <p className="text-center text-red-400 text-lg">{projectsError}</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No projects added yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/30 border border-white/20 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">{project.name || project.title}</h3>
                <p className="text-gray-200 mb-4 line-clamp-4">{project.description}</p>
                <a
  href="https://github.com/Palcherin"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center
    px-2 py-1 rounded-full
    bg-blue-600 text-white font-semibold
    hover:bg-blue-700 transition
  "
>
  Visit Website
</a>

                <p className="text-sm text-gray-400 mb-4">
                  {project.author || 'devNest'} •{' '}
                   {project.createdAt ? new Date(project.createdAt).toLocaleString() : 'No date'}
                </p>
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.name || "Project"}
                    className="w-full h-48 object-cover rounded-lg mt-4"
                  />
                )}

                {/* Optional: links if your projects have them */}
                <div className="flex gap-4 mt-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Display;