import { Link } from "react-router-dom";
import "./BlogSection.css";
import blogsData from './blogsData.js';

const Blog = () => {
  // Convert blogsData object to an array
  const blogsArray = Object.values(blogsData);

  return (
    <>
      <div className='bradcam_area breadcam_bg text-center'>
        <h1>Blogs</h1>
      </div>
       
      <h2 className=' text-center mt-4 mb-4'>Latest Blogs</h2>
      <div className='blog-grid container'>
        {blogsArray.map((blog, index) => (
          <div className='blog-card col-lg-4 col-md-4 col-sm-12' key={index}>
            <div className='position-absolute bg-body m-2 p-1 rounded-2 rounded'>
              <span className='date'>{blog.date}</span>
            </div>
            <img src={blog.image} alt={blog.title}  style={{maxHeight:"300px" }}/>
            <div className='blog-details'>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <Link to={`/blog/${index}`}>
                <button >Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
