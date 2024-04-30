const OutDoor = () => {
  // Array containing activity details
  const activities = [
    {
      title: "Nature Walks",
      image: "./activities/walk.jpg",
      description:
        "Explore the lush greenery surrounding Mauli Agro-Tourism with guided nature walks led by experienced naturalists.",
    },
    {
      title: "Bird Watching",
      image: "./activities/bird.jpg",
      description:
        "Maharashtra is home to a diverse range of bird species, making it a paradise for birdwatchers.",
    },
    {
      title: "Lake Activities",
      image: "./activities/water.jpg",
      description:
        "Indulge in a variety of water-based activities at our serene lake, including boating, fishing, and paddleboarding.",
    },
    {
      title: "Shiv Temple Visits",
      image: "./activities/temple.jpg",
      description:
        "Pay homage to the divine at the Shiv temples located within the premises of Mauli Agro-Tourism.",
    },
    {
      title: "Traditional Dance Performances",
      image: "./activities/dance.jpg",
      description:
        "Delight in the vibrant rhythms and colorful performances of traditional Maharashtrian dance forms.",
    },
    {
      title: "Shooting Game",
      image: "./activities/shooting game.jpg",
      description:
        " Perfect for both kids and adults, our shooting game offers a fun-filled activity for visitors of all ages.",
    },
  ];

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Activities at Mauli Agro-Tourism</h2>
      <div className='row'>
        {/* Map over the activities array to generate cards dynamically */}
        {activities.map((activity, index) => (
          <div key={index} className='col-md-4 mb-4'>
            <div className='card shadow'>
              <img
                className='card-img-top'
                src={activity.image}
                alt={activity.title}
                style={{ height: "300px" , objectFit: "cover" }}
              />
              <div className='card-body' >
                {" "}
                {/* Set a fixed height for the card bodies */}
                <h5 className='card-title'>{activity.title}</h5>
                <p className='card-text'>{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutDoor;
