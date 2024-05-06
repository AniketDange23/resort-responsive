import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./BlogSection.css"; // Import your CSS file for styling
import blogsData from './blogsData.js'

const BlogSection = () => {
  return (
    <div className='blog-section mt'>
      <h2 className='section-title'>Latest Blogs</h2>
      <div className='blog-grid'>
        {blogsData.map((blog, index) => (
          <div className='blog-card' key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className='blog-details'>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <div className='info mb-2'>
                <span className='date'>{blog.date}</span>
                <span className='time'>{blog.time}</span>
                <span className='location'>{blog.location}</span>
              </div>
              {/* Add a button to navigate to the blog details page */}
              <Link to={`/blog/${index}`}>
                {" "}
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
    
  );
};

export default BlogSection;
