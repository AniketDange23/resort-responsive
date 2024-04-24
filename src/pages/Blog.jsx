import React from 'react';

const Blog = () => {
  // Define an array of blog items
  const blogItems = [
    {
      imageUrl: "/blog/1.jpg",
      tag: "Travel Trip",
      title: "Tremblant In Canada",
      subtitle: "Exploring the beauty of Mont Tremblant",
      date: "24th April, 2024",
      location: "Mont Tremblant, Quebec, Canada"
    },
    {
      imageUrl: "/blog/2.jpg",
      tag: "Camping",
      title: "Choosing A Static Caravan",
      subtitle: "Tips for selecting the perfect camping spot",
      date: "24th April, 2024",
      location: "Various Camping Sites"
    },
    {
      imageUrl: "/blog/3.jpg",
      tag: "Event",
      title: "Copper Canyon",
      subtitle: "A breathtaking adventure in Chihuahua",
      date: "24th April, 2024",
      location: "Chihuahua, Mexico"
    },
    {
      imageUrl: "/blog/4.jpg",
      tag: "Event",
      title: "Trip To Iqaluit In Nunavut A Canadian Arctic City",
      subtitle: "Exploring the wonders of Iqaluit",
      date: "24th April, 2024",
      location: "Iqaluit, Nunavut, Canada",
      isWide: true // Flag for wide blog item
    },
    {
      imageUrl: "/image1.jpg",
      tag: "Travel",
      title: "Traveling To Barcelona",
      subtitle: "Experiencing the vibrant culture of Barcelona",
      date: "24th April, 2024",
      location: "Barcelona, Spain"
    },
    // Add more blog items here
    {
      imageUrl: "/blog/5.jpg",
      tag: "Adventure",
      title: "Hiking in the Alps",
      subtitle: "Scaling the peaks of the Swiss Alps",
      date: "24th April, 2024",
      location: "Swiss Alps, Switzerland"
    },
    {
        imageUrl: "/blog/10.jpg",
        tag: "Adventure",
        title: "Hiking in the Alps",
        subtitle: "Scaling the peaks of the Swiss Alps",
        date: "24th April, 2024",
        location: "Swiss Alps, Switzerland"
      },{
        imageUrl: "/blog/9.jpg",
        tag: "Adventure",
        title: "Hiking in the Alps",
        subtitle: "Scaling the peaks of the Swiss Alps",
        date: "24th April, 2024",
        location: "Swiss Alps, Switzerland"
      },
    {
      imageUrl: "/blog/6.jpg",
      tag: "Food",
      title: "Exploring Japanese Cuisine",
      subtitle: "Sampling sushi and ramen in Tokyo",
      date: "24th April, 2024",
      location: "Tokyo, Japan"
    },
    // Add more items as needed
  ];
  

  return (
    <section className="blog-section spad">
    <div className='bradcam_area mt breadcam_bg_3 text-center'>
  
  <h3>Blogs</h3>


  </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Our Blog &amp; Event</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Map over the array of blog items */}
          {blogItems.map((item, index) => (
            <BlogItem
              key={index}
              imageUrl={item.imageUrl}
              tag={item.tag}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              link={item.link}
              isWide={item.isWide}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogItem = ({ imageUrl, tag, title, date, link, subtitle }) => {
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    width: '400px',
    height: '500px',
    backgroundSize: 'cover',
    position: 'relative',
    transition: 'filter 0.3s ease', // Add transition for smooth effect
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height:"160px",
    backdropFilter: 'blur(3px)',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: '#fff',
    transition: 'background-color 0.3s ease', // Add transition for smooth effect
  };

  // Define hover styles
  const hoverOverlayStyle = {
    ...overlayStyle,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darken the overlay on hover
  };

  // Handle hover effect
  const handleHover = (event) => {
    event.currentTarget.style.filter = 'brightness(70%)'; // Darken the image on hover
    event.currentTarget.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Darken the overlay on hover
  };

  // Handle mouse leave
  const handleMouseLeave = (event) => {
    event.currentTarget.style.filter = 'brightness(100%)'; // Reset image brightness on mouse leave
    event.currentTarget.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Reset overlay color on mouse leave
  };

  return (
    <>
     
          <div 
      className="col-lg-4 py-4 rounded-3" 
      style={{ overflow: 'hidden' }} 
      onMouseEnter={handleHover} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="blog-item" style={imageStyle}>
        <div className="overlay" style={overlayStyle}>
          <span className="b-tag bg-danger p-2 rounded-3">{tag}</span>
          <h3 className='mt-3'><a href={link} style={{ color: '#fff' }}>{title}</a></h3>
          <h6 className='text-gray'>{subtitle}</h6>
          <div className="b-time"><i className="icon_clock_alt"></i> {date}</div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Blog;
