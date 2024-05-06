import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const AboutMainInfo = () => {
  return (
    <div className='container'>
      <div className='text-center mb-3'>
        <h1 className=' text-center mb-5 '>
          Experience Authentic Indian Flavors Thalis
        </h1>
        <RiDoubleQuotesL style={{ fontSize: "40px" }} />

        <h4 className='quote_text  px-3 py-3' style={{ textAlign: "justify" }}>
          We believe in offering our guests not just a meal but a culinary
          journey through the vibrant flavors of India. Our Indian Thalis are
          carefully curated to showcase the diverse and rich tapestry of Indian
          cuisine, bringing together a symphony of tastes, aromas, and textures
          on a single platter.
        </h4>
        <RiDoubleQuotesR style={{ fontSize: "40px" }} />
      </div>

      <div className='row'>
        <div className='col-xl-6 col-md-6'>
          <div className='single_about_info'>
            <img
              src='./food/food6.jpg'
              alt='image 1'
              className='mb-3 img-fluid shadow rounded-3'
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
            <h4>
              Experience Fresh Delights at Mahuli Agro Tourism: A Culinary
              Journey Awaits!
            </h4>
            <p>
              Welcome to Mahuli Agro Tourism, where every meal is a celebration
              of freshness and flavor! Nestled in the heart of nature, our
              culinary team is dedicated to bringing you the very best in
              farm-to-table dining experiences.
            </p>
          </div>
        </div>
        <div className='col-xl-6 col-md-6'>
          <img
            src='./food/food7.jpg'
            alt=' image 2'
            className='mb-3 img-fluid shadow rounded-3'
            style={{ height: "300px", objectFit: "cover", width: "100%" }}
          />

          <h4 className='mb-3'>
            Taste the Difference: Fresh, Flavorful, and Farm-to-Table Dining at
            Mahuli Agro Tourism!
          </h4>
          <p>
            Mahuli Agro Tourism, where every dish is a testament to our
            commitment to freshness and quality. Situated amidst serene natural
            surroundings, our farm-to-table dining experience offers a
            tantalizing array of flavors that will leave you craving for more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMainInfo;
