import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className='container py-5'>
      <div className='text-center '>
        <h1 className=' text-center '>
          Experience Authentic Indian Flavors Thalis
        </h1>
        <RiDoubleQuotesL style={{ fontSize: "40px" }} />

        <h3 className='quote_text text-center px-3'>
          We believe in offering our guests not just a meal but a culinary
          journey through the vibrant flavors of India. Our Indian Thalis are
          carefully curated to showcase the diverse and rich tapestry of Indian
          cuisine, bringing together a symphony of tastes, aromas, and textures
          on a single platter.
        </h3>
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
                className='img-fluid w-75'
              />
            </div>
          </div>
          <div className='card-hover'>
            <div className='section_title mb-2 py-3'>
              <h3>Non-Veg Thali</h3>
            </div>
            <p>
              A mutton thali is a culinary masterpiece that encapsulates the
              essence of Indian cuisine. Bursting with flavors and textures, it
              offers a tantalizing journey for the taste buds. At its heart lies
              succulent mutton, cooked to perfection in a myriad of ways—be it
              in a luscious curry, grilled to smoky perfection, or slow-cooked
              to melt-in-your-mouth tenderness. Accompanied by an array of sides
              like fragrant rice, fluffy roti, hearty dal, and vibrant
              vegetables, each bite tells a story of tradition and
              craftsmanship. Whether enjoyed at a bustling eatery or lovingly
              prepared at home, a mutton thali is more than a meal—it's a
              cultural experience, inviting you to savor the richness of India's
              culinary heritage in every mouthful.
            </p>
            <Link to='/contact'>
              <button>Learn More</button>
            </Link>
          </div>
        </div>
        <div className='col-lg-6 text-center px-4 '>
          <div className='img_1 p-2'>
            <img
              data-aos='zoom-in-down'
              src='/food/lunch 1.png'
              alt='Cooking Food'
              className='img-fluid w-75'
            />
          </div>
          <div className='card-hover'>
            <div className='section_title mb-20px'>
              <h3>Veg Thali</h3>
            </div>
            <p>
              A veg thali is a vibrant and wholesome culinary experience that
              showcases the rich tapestry of vegetarian cuisine. Comprising a
              diverse array of dishes served together on a single platter, it
              offers a symphony of flavors, textures, and colors. At its heart
              lies the star of the show—nutrient-packed vegetables prepared in
              myriad ways, from fragrant curries to crispy bhajis and hearty
              dals. Accompanied by fluffy rice, buttery rotis, cooling raita,
              tangy pickles, and refreshing salads, each bite tells a story of
              tradition, innovation, and sustainability. Whether enjoyed at home
              or savored at a local eatery, a veg thali promises a gastronomic
              journey that nourishes both body and soul.
            </p>
            <Link to='/contact'>
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
