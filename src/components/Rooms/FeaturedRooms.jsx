import React from "react";
import { Link } from "react-router-dom";

function FeaturedRooms() {
  return (
    <div className='features_room'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='section_title text-center mb-100'>
              <span>Featured Rooms</span>
              <h3>Choose a Better Room</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='rooms_here'>
        <div className='single_rooms'>
          <div className='room_thumb'>
            <img src='/rooms/1.png' alt='' />
            <div className='room_heading d-flex justify-content-between align-items-center'>
              <div className='room_heading_inner'>
                <span>From $250/night</span>
                <h3>Superior Room</h3>
              </div>
              <Link href='#' className='btn'>
                book now
              </Link>
            </div>
          </div>
        </div>
        <div className='single_rooms'>
          <div className='room_thumb'>
            <img src='/rooms/2.png' alt='' />
            <div className='room_heading d-flex justify-content-between align-items-center'>
              <div className='room_heading_inner'>
                <span>From $250/night</span>
                <h3>Deluxe Room</h3>
              </div>
              <a href='#'>book now</a>
            </div>
          </div>
        </div>
        <div className='single_rooms'>
          <div className='room_thumb'>
            <img src='/rooms/3.png' alt='' />
            <div className='room_heading d-flex justify-content-between align-items-center'>
              <div className='room_heading_inner'>
                <span>From $250/night</span>
                <h3>Signature Room</h3>
              </div>
              <a href='#' className='line-button'>
                book now
              </a>
            </div>
          </div>
        </div>
        <div className='single_rooms'>
          <div className='room_thumb'>
            <img src='/rooms/4.png' alt='' />
            <div className='room_heading d-flex justify-content-between align-items-center'>
              <div className='room_heading_inner'>
                <span>From $250/night</span>
                <h3>Couple Room</h3>
              </div>
              <a href='#'>book now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRooms;
