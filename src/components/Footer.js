import React from 'react';
import {Link} from 'react-router-dom';
import './_Footer.scss';

export default function Footer () {
  return (
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>mycontentvideo Videographer Platform</h1>
          <ul>

            <p>Contact for new Customers:</p>
            <p>Philipp Meinwelt</p>
            <p>+49 1578 201 8080</p>

          </ul>
        </div>
        <div className="col">
          <h1>Quick Links</h1>
          <ul>
            <li><Link to="/register">Register as a Videographer</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Jobs</li>
            <li>Kontakt</li>

          </ul>
        </div>
        <div className="col">
          <h1>Products</h1>
          <ul>
            <li>Simple Clips</li>
            <li>Productvideo</li>
            <li>Interview-Videos</li>

          </ul>
        </div>

      </div>
      <div className="clearfix"> </div>
      <p>@2021 mycontentvideo Content-Video Plattform</p>

    </div>
  );
}
