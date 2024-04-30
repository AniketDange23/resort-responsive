import { FaSwimmingPool, FaWifi, FaUtensils, FaParking, FaCampground, FaHiking, FaBicycle, FaFire, FaShower } from 'react-icons/fa';

const facilitiesData = [
  { icon: <FaSwimmingPool size={50} />, title: "Swimming Pool" },
  { icon: <FaWifi size={50} />, title: "WiFi" },
  { icon: <FaUtensils size={50} />, title: "Restaurant" },
  { icon: <FaParking size={50} />, title: "Parking" },
  { icon: <FaCampground size={50} />, title: "Camping Area" },
  { icon: <FaHiking size={50} />, title: "Hiking Trails" },
  { icon: <FaBicycle size={50} />, title: "Bicycle Rental" },
  { icon: <FaFire size={50} />, title: "Campfire" },
  { icon: <FaShower size={50} />, title: "Shower Facilities" }
];
const Facility = ({ icon, title }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card text-center">
        <div className="card-body">
          {icon}
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
const Facilities = () => (
  <div className="container mt-5">
    <h1 className="text-center mb-5">Facilities at Mauli Agro-Tourism</h1>
    <div className="row">
      {facilitiesData.map((facility, index) => (
        <Facility key={index} icon={facility.icon} title={facility.title} />
      ))}
    </div>
  </div>
);

export default Facilities;