import { GiArcheryTarget, GiFruitTree, GiVillage } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { SiQatarairways } from "react-icons/si";
import { WiSunset } from "react-icons/wi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaTents } from "react-icons/fa6";

const OutDoor = () => {
  // Array containing activity details
  const activities = [
    {
      title: "Traditional Marathi Foods",
      icon: <MdOutlineFoodBank />,
      image: "./activities/1.png",
      description:
        "The secret to our flavorful dishes lies in the freshness of our ingredients. We source vegetables, lentils, and spices directly from our farm, ensuring the highest quality and the truest taste of Maharashtra.",
    },
    {
      icon: <GiFruitTree />,
      title: "Orange Farm Visit",
      image: "./activities/2.png",

      description:
        "Imagine the joy of hand-picking a perfectly ripe orange, its weight a weighty promise of its sun-kissed sweetness. Take a bite, and experience the explosion of flavor – a burst of tangy citrus balanced by a touch of natural sweetness.",
    },
    {
      title: "Sunset View",
      icon: <WiSunset />,

      image: "./activities/3.png",

      description:
        "After a day filled with adventure and exploration, there's nothing quite like settling down and witnessing the magic of a Mahuli sunset. It's the ideal way to end your day, leaving you feeling renewed by the beauty of nature.",
    },
    {
      title: "Bullock Cart Ride",
      icon: <SiQatarairways />,

      image: "./activities/4.png",

      description:
        "Settle comfortably on the wooden cart pulled by gentle bullocks. This peaceful experience offers a delightful escape from the fast pace of modern life and transports you back to a simpler time.",
    },
    {
      title: "Enjoy the Scenic Surroundings of the Village",
      image: "./activities/5.png",
      icon: <GiVillage />,

      description:
        "Mahuli Agro Tourism offers something truly special: the chance to soak in the serene beauty of a traditional Maharashtrian village, immersing you in its rich culture and heritage, creating unforgettable memories.",
    },
    {
      title: "Farm Tours",
      image: "./activities/6.png",
      icon: <GiVillage />,

      description:
        "Our farm tours are a fantastic addition to your Mahuli Agro Tourism experience. We provide a deeper appreciation for the natural world, the importance of sustainable practices, and the delicious food that graces your plate.",
    },
    {
      title: "Archery & Air Rifle Shooting",
      image: "./activities/7.png",
      icon: <GiArcheryTarget />,

      description:
        "Whether you're a seasoned marksman or a complete beginner, archery, and air rifle shooting at Mahuli Agro Tourism are perfect for everyone. It's a fantastic activity for individuals, families, or groups of friends.",
    },
    {
      title: "Swimming and Raindance",
      image: "./activities/8.png",
      icon: <FaSwimmingPool />,

      description:
        "Get ready for a fun-filled experience with our exciting Raindance party. It's the perfect way to cool down and create lasting memories with your family. Make a splash and dance in the rain at our Raindance party – an unforgettable fusion of swimming, splashing, and grooving to the beat.",
    },
    {
      title: "Camping Tent",
      image: "./activities/9.png",
      icon: <FaTents />,

      description:
        "Camping at Mahuli Agro Tourism is perfect for families, friends, or even solo travelers seeking a taste of adventure. We offer a variety of comfortable tent options, ensuring a memorable stay tailored to your needs and preferences.",
    },
  ];

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Activities at Mauli Agro-Tourism</h2>
      <div className='row'>
        {/* Map over the activities array to generate cards dynamically */}
        {activities.map((activity, index) => (
          <div key={index} className='col-md-4 mb-4 '>
            <h4 className='p-2'>{activity.title}</h4>

            <div className='card  '>
              <img
                className='card-img-top'
                src={activity.image}
                alt={activity.title}
                style={{
                  height: "300px",
                  objectFit: "cover",
                  transition: "all 1.5s cubic-bezier(0, 0, 0.2, 1)",
                }}
              />
              <div className='card__content'>
                {" "}
                <b className='icon' style={{ fontSize: "50px" }}>
                  {activity.icon}
                </b>
                <h5 className='card__title'>{activity.title}</h5>
                <p className='card__description'>{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutDoor;
