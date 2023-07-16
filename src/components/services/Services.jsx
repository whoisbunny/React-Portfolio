import React from 'react'
import './services.css'
import {BsCheck } from 'react-icons/bs'
const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        
        
    

    
        <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knolage of HTML , CSS , JS.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knolage of React.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knolage of CSS frameworks.</p>
            </li>
          </ul>
        </article>
        {/* END OF SERVICE */}

        <article className="service">
          <div className="service__head">
            <h3>App Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>New to React Native.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>New to React Flutter.</p>
            </li>
          </ul>
        </article>

        {/* END OF SERVICE */}
      </div>
    </section>
  );
}

export default Services
