import AboutSection from "../components/AboutPage/AboutSection";
import Food from "./../components/HomePage/Food";
import Offers from "../components/Rooms/Offers";
import FeaturedRooms from "./../components/Rooms/FeaturedRooms";
import SliderComponent from "../components/HomePage/Slider";
import BackToTopButton from "../components/BackToTopButton";
import Testimonials from "../components/HomePage/Testimoinals";

const Home = () => {
  return (
    <div>
      <BackToTopButton />
      <SliderComponent />
      <AboutSection />
      <Offers />
      <FeaturedRooms />
      <Testimonials />
      <Food />
    </div>
  );
};

export default Home;
