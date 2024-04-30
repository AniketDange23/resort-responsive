import Offers from "../components/Accommodation/Offers";
import Facilities from "../components/activities/Facilities";
import Rooms from './../components/Accommodation/Rooms';

const Accommodation = () => {
  return (
    <div>
      <div className='bradcam_area mt breadcam_bg_2 mb-5'>
        <h3>Accommodation</h3>
     </div>
     <Rooms/>
<Facilities/>
    </div>
  );
};

export default Accommodation;
