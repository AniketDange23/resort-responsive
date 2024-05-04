import AboutSection from "../components/AboutPage/AboutSection";
import Food from "./../components/HomePage/Food";
import SliderComponent from "../components/HomePage/Slider";
import BackToTopButton from "../components/BackToTopButton";
import Testimonials from "../components/HomePage/Testimoinals";
import Rooms from './../components/Accommodation/Rooms';
import OurCollection from "../components/HomePage/OurCollection";
import Mission from "./Mission";

const Home = () => {
  return (
    <div>
      <BackToTopButton />
      <SliderComponent />
      <AboutSection />
      <Mission/>
      <Rooms/>
      {/* <Offers /> */}

      <Testimonials />
      <Food />
      <OurCollection />{/* <Video/> */}
      
    </div>
  );
};

export default Home;
