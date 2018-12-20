import React from 'react';
import './Content.css';

const Content = props => (
  <div className="col-md-6">
    <h3>{props.title}
      <small>{props.subititle}</small>
    </h3>
    <hr />
    {props.children}
  </div>
);

export default Content;