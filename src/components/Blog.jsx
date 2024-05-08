import { Link } from "react-router-dom";
import "./BlogSection.css";
import blogsData from './blogsData.js';
import BlogCreate from "./BlogCreate.jsx";

const Blog = () => {
  // Convert blogsData object to an array
  const blogsArray = Object.values(blogsData);

  return (
    <>
    <BlogCreate/>
       <div className='blog-section mt'>
      <h2 className='section-title'>Latest Blogs</h2>
      <div className='blog-grid'>
        {blogsArray.map((blog, index) => (
          <div className='blog-card' key={index}>
            <img src={blog.image} alt={blog.title} className="img-fluid" />
            <div className='blog-details'>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className='info mb-2'>
                <span className='date'>{blog.date}</span>
                {/* Add more details if needed */}
              </div>
              {/* Link to the blog details page */}
              <Link to={`/blog/${index}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  );
};

export default Blog;

