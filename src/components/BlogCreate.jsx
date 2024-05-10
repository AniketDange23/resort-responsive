// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const NewBlogForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     dateTime: '',
//     description: '',
//     subTitle1: '',
//     content1: '',
//     content2: '',
//     content3: '',
//     userImage: '',
//     postImage: ''
//   });

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetchBlogs();
//   }, []); // Fetch blogs on component mount

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/blogs');
//       setBlogs(response.data);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Form data before submission:', formData); // Debug
//       await axios.post('http://localhost:5000/blogs', formData);
//       console.log('Form submitted successfully'); // Debug
//       // Clear form fields after successful submission
//       setFormData({
//         title: '',
//         dateTime: '',
//         description: '',
//         subTitle1: '',
//         content1: '',
//         content2: '',
//         content3: '',
//         userImage: '',
//         postImage: ''
//       });
//       // Fetch updated blogs
//       fetchBlogs();
//     } catch (error) {
//       console.error('Error creating blog:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/blogs/${id}`);
//       console.log('Blog deleted successfully'); // Debug
//       // Fetch updated blogs
//       fetchBlogs();
//     } catch (error) {
//       console.error('Error deleting blog:', error);
//     }
//   };

//   return (
//     <div className='mt text-center py-3'>
//       <h2>Create New Blog</h2>
//       <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
//         <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" style={{ width: '100%', marginBottom: '10px' }} />
//         <input type="text" name="dateTime" value={formData.dateTime} onChange={handleChange} placeholder="Date & Time" style={{ width: '100%', marginBottom: '10px' }} />
//         <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" style={{ width: '100%', marginBottom: '10px' }} />
//         <input type="text" name="subTitle1" value={formData.subTitle1} onChange={handleChange} placeholder="Subtitle" style={{ width: '100%', marginBottom: '10px' }} />
//         <textarea name="content1" value={formData.content1} onChange={handleChange} placeholder="Content 1" style={{ width: '100%', marginBottom: '10px' }} />
//         <textarea name="content2" value={formData.content2} onChange={handleChange} placeholder="Content 2" style={{ width: '100%', marginBottom: '10px' }} />
//         <textarea name="content3" value={formData.content3} onChange={handleChange} placeholder="Content 3" style={{ width: '100%', marginBottom: '10px' }} />
//         <input type="text" name="userImage" value={formData.userImage} onChange={handleChange} placeholder="User Image URL" style={{ width: '100%', marginBottom: '10px' }} />
//         <input type="text" name="postImage" value={formData.postImage} onChange={handleChange} placeholder="Post Image URL" style={{ width: '100%', marginBottom: '10px' }} />
//         <button type="submit" style={{ width: '100%' }}>Submit</button>
//       </form>

//       <h2>All Blogs</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         {blogs.map(blog => (
//           <div key={blog._id} style={{ width: '80%', maxWidth: '600px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
//             <h3>{blog.title}</h3>
//             <b>{blog.dateTime}</b>
//             <p>{blog.description}</p>
//             <p>{blog.subTitle1}</p>
//             <p>{blog.content1}</p>
//             <p>{blog.content2}</p>
//             <p>{blog.content3}</p>
//             <img src={blog.userImage} alt="" style={{ width: "100%", height: "auto", marginBottom: '10px' }} />
//             <img src={blog.postImage} alt="" style={{ width: "75%", height: "auto" }} />
//             <button onClick={() => handleDelete(blog._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewBlogForm;
