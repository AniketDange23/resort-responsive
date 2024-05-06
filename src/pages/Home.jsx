import Food from "./../components/HomePage/Food";
import Testimonials from "../components/HomePage/Testimoinals";
import Rooms from "./../components/Accommodation/Rooms";
import OurCollection from "../components/HomePage/OurCollection";
import Mission from "./Mission";
import HomeSection from "../components/HomePage/HomeSection";
import VideoComponent from "./../components/HomePage/VideoComponent";

const Home = () => {
  return (
    <div>
      <VideoComponent />
      <HomeSection />
      <Mission />
      <Rooms />

      <Testimonials />
      <Food />
      <OurCollection />
    </div>
  );
};

export default Home;
