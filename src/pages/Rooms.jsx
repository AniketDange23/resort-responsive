import React from "react";
import FeaturedRooms from "./../components/Rooms/FeaturedRooms";
import Offers from "../components/Rooms/Offers";

const Rooms = () => {
  return (
    <div>
    <div className="bradcam_area mt breadcam_bg_2">
      <h3>Luxurious Rooms</h3>
    </div>
      <Offers />
      <FeaturedRooms />
    </div>
  );
};

export default Rooms;
