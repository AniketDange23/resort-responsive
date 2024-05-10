
const Mission = () => {
  return (
    <div className="container-fluid  text-center  set-bg-choose">
      <div className="container  py-5">
        <h1 className=" mb-5 text-white">Our Mission & Vision</h1>
        <div className="row justify-content-center gap-5" >
          {/* Mission Card */}
          <div className="col-lg-5 col-md-8 col-sm-10 col-12 mb-3">
            <div className="card rounded-2 h-100">
              <div className="card-body py-2 px-3">
                <h3 className="card-title py-3">Mission</h3>
                <p className="card-text p-3">
                  Mahuli Agro-tourism is dedicated to providing visitors with
                  a unique and memorable agro-tourism experience. We offer the
                  opportunity to immerse yourself in the beauty of rural life,
                  learn about sustainable agriculture practices, and connect
                  with nature. Located in Maharashtra, India, our farm offers
                  a variety of activities and comfortable accommodations for a
                  truly unforgettable getaway.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-5 col-md-8 col-sm-10 col-12 mb-3">
            <div className="card rounded-2 h-100">
              <div className="card-body ">
                <h3 className="card-title py-3">Vision</h3>
                <p className="card-text p-3" >
                  Our greatest strength lies in fostering a collaborative
                  environment where diverse ideas and strategies are shared
                  freely. By combining this collective expertise, we strive to
                  deliver the most comprehensive and effective agro-tourism
                  experiences for our guests. We're committed to staying ahead
                  of the curve and are always changing to accommodate new trends
                  and consumer preferences in the agro-tourism sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
