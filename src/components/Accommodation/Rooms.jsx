import { Link } from "react-router-dom";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      image: "/rooms/room1.jpg",
      title: "Cottage",
      description:
        "Our traditional cottages offer a glimpse into the rich cultural heritage of Maharashtra while providing all the amenities for a comfortable stay.",
    },
    {
      id: 2,
      image: "/rooms/room2.jpg",
      title: "Family Rooms",
      description:
        "For guests looking for a more contemporary accommodation option, our well-appointed rooms offer a blend of comfort and convenience.",
    },
    {
      id: 3,
      image: "/rooms/room3.jpg",
      title: "Tents",
      description:
        "Traveling with a group? Our dormitory accommodations provide budget-friendly options for larger groups or backpackers.",
    },
  ];

  return (
    <>
      <div className='container text-center py-5 px-3 '>
        <h1 className='mb-5' data-aos='fade-up'>
          {" "}
          Accommodation at Mauli Agro-Tourism
        </h1>
        <p className='mb-5'>
          Experience the charm of rural living combined with modern comforts in
          our thoughtfully designed accommodations at Mauli Agro-Tourism.
          Whether you're seeking a cozy retreat for two or spacious lodgings for
          the entire family, we have options to suit every need.{" "}
        </p>
        <div className='row'>
          {rooms.map((room) => (
            <div className='col-md-4 room-card mb-5' key={room.id}>
              <div className='card'>
                <img
                  src={room.image}
                  className='card-img-top'
                  alt={`Room ${room.id}`}
                  style={{ height: "240px" }}
                />
                <div className='card-body shadow'>
                  <h3 className='card-title'>{room.title}</h3>
                  <p className='card-text'>{room.description}</p>{" "}
                  <Link to='/contact'>
                    {" "}
                    <button id='form'>More Details </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
