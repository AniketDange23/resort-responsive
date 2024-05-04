import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const AboutMainInfo = () => {
  return (
    <div className='container mb-3'>
      <div className='text-center '>
        <h1 className=' text-center py-2'>
          Experience Authentic Indian Flavors Thalis
        </h1>
        <RiDoubleQuotesL style={{ fontSize: "40px" }} />

        <h4 className='quote_text  px-3 py-3' style={{textAlign:"justify"}}>
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
            <h3>We Serve Fresh and Delicious Food</h3>
            <p>
              Suscipit libero pretium nullam potenti. Interdum, blandit
              phasellus consectetuer dolor ornare dapibus enim ut tincidunt
              rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
              sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et.
              Rhoncus.
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

          <h3>We Serve Fresh and Delicious Food</h3>
          <p>
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
      </div>
      <div className="marquee-container  ">
      <h3 className="text-center   py-2">
        Experience the Magic of Indian Cuisine with Mauli Agro Tourism's Indian Thalis. Book your culinary adventure today and embark on a gastronomic journey like no other!
      </h3>
    </div>
 
    </div>
  );
};

export default AboutMainInfo;
