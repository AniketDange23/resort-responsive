import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className='container py-5'>
      <div className='text-center '>
        <h1 className=' text-center '>
          Experience Authentic Indian Flavors Thalis
        </h1>
        <RiDoubleQuotesL style={{ fontSize: "40px" ,  }} />

        <h5 className='quote_text  px-3' style={{textAlign:"justify"}}>
          We believe in offering our guests not just a meal but a culinary
          journey through the vibrant flavors of India. Our Indian Thalis are
          carefully curated to showcase the diverse and rich tapestry of Indian
          cuisine, bringing together a symphony of tastes, aromas, and textures
          on a single platter.
        </h5>
        <RiDoubleQuotesR style={{ fontSize: "40px" }} />
      </div>
      <div className='row align-items-center'>
        <div className='col-lg-6 text-center'>
          <div className='about_thumb2'>
            <div className='img_2 py-2'>
              <img
                data-aos='zoom-in-up'
                src='/food/non-veg 1.png'
                alt='Delicious Food'
                className='img-fluid  w-75'
              />
            </div>
          </div>
          <div>
            <div>
              <h3>Non-Veg Thali</h3>
              <h5 className='line'> Price- 1800 ₹ </h5>
            </div>
            <p>
              mutton thali—a true embodiment of Indian flavors. Succulent mutton
              takes center stage, embraced by diverse cooking
              techniques—curried, grilled, or slow-cooked to perfection.
              Complemented by fragrant rice, fluffy roti, hearty dal, and
              vibrant veggies, each bite narrates a tale of tradition and
              expertise. Whether relished at a bustling eatery or homemade with
              love, a mutton thali transcends mere dining—it's an invitation to
              cherish India's culinary legacy in every delectable bite.
            </p>
            <Link to='/contact'>
              <button>Know More</button>
            </Link>
          </div>
        </div>
        <div className='col-lg-6 text-center px-4 '>
          <div className='img_1 p-2'>
            <img
              data-aos='fade-down'
              src='/food/lunch 1.png'
              alt='Cooking Food'
              className='img-fluid  w-75'
            />
          </div>
          <div>
            <div className=' py-3 '>
              <h3>Veg Thali</h3>
              <h5 className='line text-center'> Price- 1600 ₹ </h5>
            </div>
            <p>
              Savor the colorful array of vegetarian delights with a veg thali—a
              symphony of flavors and textures on a single platter.
              Nutrient-rich vegetables shine in fragrant curries, crispy bhajis,
              and comforting dals. Paired with fluffy rice, buttery rotis,
              cooling raita, tangy pickles, and fresh salads, each bite
              celebrates tradition, innovation, and sustainability. Whether at
              home or a local eatery, a veg thali promises a culinary journey
              that nourishes both body and soul.
            </p>
            <Link to='/contact'>
              <button>Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
