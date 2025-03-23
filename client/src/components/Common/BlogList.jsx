import React from "react";
import "./css/BlogList.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h2>Latest Blogs</h2>
      <div className="blog-list-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-date">Published on: {blog.date}</p>
              <p className="blog-description">{blog.description}</p>
              <a href={blog.link} className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
