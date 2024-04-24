import React from 'react';

const AboutMainInfo = () => {
  return (
    <div className="about_main_info">
      <div className="container">
      <h3>Delicious Food
</h3>
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="single_about_info">
            <img src="./food2.jpg" alt="image 1" className='mb-3 img-fluid shadow rounded-3' />
              <h3>We Serve Fresh and Delicious Food</h3>
              <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="single_about_info">
            <img src="./food1.jpg" alt=" image 2" className='mb-3 img-fluid rounded-3' />

              <h3>We Serve Fresh and Delicious Food</h3>
              <p >Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMainInfo;
