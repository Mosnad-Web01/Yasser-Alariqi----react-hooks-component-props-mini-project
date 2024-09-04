import React from 'react';
import logo from '../assets/logo';

function About({ logo: logoProp = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img
        src={logoProp} // Use the logo prop if provided, otherwise default to the placeholder
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;
