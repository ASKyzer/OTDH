import React from 'react';

const BookNowBtn = props => (
  <div className="text-right pr-3 mt-3">
     <a href={props.href} className="text-white btn btn-primary mt-3">Book Now</a>
  </div>
);

export default BookNowBtn;