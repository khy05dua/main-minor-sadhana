import React, { useState } from 'react';
import './CSS/Blogs.css';
import banner from '../components/Assets/banner_blog.png';
import all_blocks from '../blog'; // Import your data

const Blogs = () => {
  const [blogData, setBlogData] = useState(all_blocks);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    // Toggle the selected post
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  return (
    <div>
      <div className='bannerdisplay'>
        <img src={banner} alt="Banner for Blog" />
      </div>
      <div className='blog-content'>
        {blogData.map(blog => (
          <div
            key={blog.id}
            className={`blog-post ${selectedPost === blog.id ? 'selected' : ''}`}
            onClick={() => handlePostClick(blog.id)}
          >
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
