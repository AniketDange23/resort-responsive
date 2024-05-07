import { useParams } from "react-router-dom"; 
import blogsData from "./blogsData.js";

const BlogDetails = () => {
  const { index } = useParams(); 
  const blog = blogsData[parseInt(index)]; 

  if (!blog) {
    return <div className='blog-details'>Blog not found</div>;
  }

  return (
    <div className='blog-details container py-5 mt'>
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} />
      <h4>{blog.content}</h4>
      <div className='info'>
        <p className='date'>{blog.date}</p>
        <p className='time'>{blog.time}</p>
        <p className='location'>{blog.location}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
