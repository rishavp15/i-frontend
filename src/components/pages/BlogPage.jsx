import React, { useState, useEffect } from 'react';
import API_URL from '../../config/api';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/api/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="blog-section" className="blog-page">
      <div className="page-shell">
        <div className="blog-header">
          <h1>Indrapeeth Blog</h1>
          <p>Insights, tips, and stories from our learning community</p>
        </div>

        {loading ? (
          <div className="loading">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="no-blogs">
            <div className="no-blogs-icon">📝</div>
            <h2>No blogs yet</h2>
            <p>We're working on creating amazing content for you. Check back soon!</p>
            <p className="coming-soon-note">More blog posts coming soon...</p>
          </div>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                {blog.thumbnail && <img src={blog.thumbnail} alt={blog.title} />}
                <div className="blog-content">
                  <span className="blog-category">{blog.category}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-author">By {blog.author}</span>
                    <span className="blog-views">{blog.views} views</span>
                  </div>
                  <button className="blog-read-more">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
