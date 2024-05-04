import React from "react";
const packages = [
  {
    imageUrl: "/trip1.jpg",
    category: "Child (5 to 9 years)",
    price: "Rs. 600/- Per person",
    timing: "10.00am to 6.00pm",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride",
    ],
  },
  {
    imageUrl: "/package.jpg",
    category: "Olders (No Age Limit)",
    price: "Rs. 800/- Per person",
    timing: "10.00am to 6.00pm",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride",
    ],
  },
  {
    imageUrl: "",
    category: "School Students (No Age Limit)",
    price: "Rs. 600/- Per person",
    timing: "10.00am to 6.00pm",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride",
    ],
  },
];

const Package = () => {
  return (
    <>
      <div className='bradcam_area breadcam_bg '>
        <h1>Packages</h1>
      </div>
      <div className='container py-5'>
        <div className=' text-center'>
          <h1 className='mb-4 mt-5 text-center'>
            {" "}
            <img
              src='/organic.gif'
              style={{ width: "50px", mixBlendMode: "inherit" }}
              alt=''
            />{" "}
            Our Packages{" "}
            <img
              src='/organic.gif'
              style={{ width: "50px", mixBlendMode: "inherit" }}
              alt=''
            />{" "}
          </h1>
          <h4 className='text-center '>
            Experience Mahuli Agro Tourism Your Gateway to Nature's Paradise
          </h4>
        </div>

        {packages.map((data, index) => (
          <div
            className={`row justify-content-center align-content-center py-3 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className='col-md-5'>
              <img
                src={data.imageUrl}
                alt={data.title}
                className='img-fluid rounded-2 shadow'
              />
            </div>
            <div className='col-md-5 align-content-center'>
              <h3 className='mx-4 mb-3'>{data.category}</h3>
              <h6 className='mx-4 mb-3'>{data.timing}</h6>
              <ul>
                {data.includes.map((includes, i) => (
                  <li key={i}>✦ {includes}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Package;
