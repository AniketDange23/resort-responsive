import AboutSection from "../components/AboutPage/AboutSection";
import Food from "./../components/HomePage/Food";
import SliderComponent from "../components/HomePage/Slider";
import BackToTopButton from "../components/BackToTopButton";
import Testimonials from "../components/HomePage/Testimoinals";
import Offers from './../components/Accommodation/Offers';
import Rooms from './../components/Accommodation/Rooms';

const Home = () => {
  return (
    <div>
      <BackToTopButton />
      <SliderComponent />
      <AboutSection />
      <Rooms/>
      <Offers />

      <Testimonials />
      <Food />
    </div>
  );
};

export default Home;
