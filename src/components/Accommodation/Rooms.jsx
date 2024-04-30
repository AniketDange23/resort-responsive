import React from "react";

const Rooms = () => {
  // Define an array of room objects
  const rooms = [
    {
      id: 1,
      image: "/rooms/room1.jpg",
      title: "Cottages",
      description:
        "Our traditional cottages offer a glimpse into the rich cultural heritage of Maharashtra while providing all the amenities for a comfortable stay.",
    },
    {
      id: 2,
      image: "/rooms/room2.jpg",
      title: "Rooms",
      description:
        "For guests looking for a more contemporary accommodation option, our well-appointed rooms offer a blend of comfort and convenience.",
    },
    {
      id: 3,
      image: "/rooms/room3.jpg",
      title: "Dormitories",
      description:
        "Traveling with a group? Our dormitory accommodations provide budget-friendly options for larger groups or backpackers.",
    },
  ];

  return (
    <div className='container text-center '>
      <h1>        Accommodation at Mauli Agro-Tourism</h1>
      <p>
 Experience the charm of rural living
        combined with modern comforts in our thoughtfully designed
        accommodations at Mauli Agro-Tourism. Whether you're seeking a cozy
        retreat for two or spacious lodgings for the entire family, we have
        options to suit every need.{" "}
      </p>
      <div className='row'>
        {rooms.map((room) => (
          <div className='col-md-4' key={room.id}>
            <div className='card'>
              <img
                src={room.image}
                className='card-img-top'
                alt={`Room ${room.id}`}
                style={{ height: "200px" }}
              />
              <div className='card-body'>
                <h3 className='card-title'>{room.title}</h3>
                <p className='card-text'>{room.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
