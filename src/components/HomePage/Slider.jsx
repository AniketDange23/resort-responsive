// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import sliderBg1 from "/slider/image1.jpg";
// import sliderBg2 from "/slider/image2.jpg";
// import sliderBg3 from "/slider/image3.jpg";
// import sliderBg4 from "/slider/image4.jpg";

// function Slider() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   // Define arrays of titles and descriptions
//   const titles = [
//     "Flavors of India, Adventures Await",
//     "Savor, Play, Repeat",
//     "Where Food Meets Fun",
//     "Taste, Play, Thrive",
//   ];

//   const descriptions = [
//     "Experience the vibrant tapestry of Indian cuisine and thrilling adventures at Muli Agro-Tourism.",
//     "Dive into a world of taste sensations and endless fun at Muli Agro-Tourism. With delectable dining options and exciting activities, every moment is an opportunity for joy and exploration.",
//     "Join us at Muli Agro-Tourism for a delightful fusion of mouthwatering cuisine and exhilarating games. Whether you're a foodie or a thrill-seeker, there's something here to satisfy every craving.",
//     "Indulge your senses and unleash your adventurous spirit at Muli Agro-Tourism. With tantalizing flavors and exciting activities, immerse yourself in a world of taste and play.",
//   ];


//   return (
//     <div className="container-fluid   g-0">
//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         infiniteLoop={true}
//         autoPlay={true}
//         interval={2000}
//         transitionTime={1000}
//         className="slider_active"
//       >
//         {[sliderBg1, sliderBg2, sliderBg3, sliderBg4].map(
//           (backgroundImage, index) => (
//             <div
//               key={index}
//               className="slider_item"
//               style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center",
//                 textAlign: "center",
//                 background: "#000000830",
//                 height: "700px",
//                 width: "100%",
//                 objectFit: "cover",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               data-aos="zoom-out"
//             >
//             <div className="container slider-wrapper ">
//   <div className="row">
//     <div className="col-xl-12 col-md-12 col-sm-12">
//       <div className="slider_text">
//         <h1 className="text-white mb-3">{titles[index]}</h1>
//         <p className="text-white">{descriptions[index]}</p>
//       </div>
//     </div>
//   </div>
// </div>
//             </div>
//           )
//         )}
//       </Carousel>
//     </div>
//   );
// }

// export default Slider;
