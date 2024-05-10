import { Link } from "react-router-dom";

const packages = [
  {
    image:"/package/package2-min.jpg",
    category: "Child (5 to 9 years)",
    price: "Rs. 600/- Per person",
    timing: "9.00am to 5.00pm",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks"
    ]
  },
  {
    image:"/package/package-min.jpg",

    category: "Olders (No Age Limit)",
    price: "Rs. 800/- Per person",
    timing: "9.00am to 5.00pm",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks"
    ]
  },
  {
        image:"/package/package1-min.jpg",

    category: "School Students (No Age Limit)",
    price: "Rs. 600/- Per person",
    timing: "9.00am to 5.00pm",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks"
    ]
  },
  {
        image:"/package/package3-min.jpg",

    category: "Family (1 Day 1 Night)",
    price: "Rs. 800/- Per person",
    timing: "Check in Timing : 10.00am",
    includes: [
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks"
    ]
  },
  {
        image:"/package/package5-min.jpg",

    category: "Activities",
    timing: [
      "9.00am to 10.00am - Tea & Breakfast",
      "10.00am to 12.00am - Outdoor Games",
      "12.00pm to 1.00pm - Rain Dance",
      "1.00pm to 1.30pm - Lunch",
      "2.00pm to 4.00pm - Bullock Cart Ride & Indoor Games",
      "4.00pm to 5.00pm - Sunset View, River Visit, Evening Tea"
    ]
  }
];

const Package = () => {
  return (
    <>
      <div className="bradcam_area breadcam_bg">
        <h1>Packages</h1>
      </div>
      <div>
        <marquee>
          <h3>Note: It is necessary to book 2,3 days before coming.</h3>
        </marquee>
        <h1 className="text-center py-3">Our Packages</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {packages.map((pack, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card h-100">
                  <img
                  src={pack.image}
                  className="card-img-top card-hover"
                  style={{ height: "300px", objectFit:"cover" }}
                  alt={pack.category}
                /><div className="card-body">
              
                  <h5 className="card-title">{pack.category}</h5>
                  <h2 className="card-title pricing-card-title">
                    {pack.price}
                  </h2>
                  <p className="card-text">Timing: {pack.timing}</p>
                  {pack.includes && (
                    <ul className="list-unstyled">
                      {pack.includes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <Link to="/contact">
                    <button type="button" >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Package;
