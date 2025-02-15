import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knowledge of HTML , CSS , JS.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knowledge of React.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Bootstrap and Tailwind.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knowledge of Angular JS.</p>
            </li>
          </ul>
        </article>
        {/* END OF SERVICE */}

        <article className="service">
          <div className="service__head">
            <h3>Application Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knowledge of React Native.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Knowledge of Expo.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Knowledge of Firebase.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Restful API using Node JS and Express JS.</p>
            </li>

            <li>
              <BsCheck className="service_list-icon" />
              <p>Restful API using .Net and SQL.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Well knowledge of Mongo DB.</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Build Restful API using MySql.</p>
            </li>
          </ul>
        </article>

        {/* END OF SERVICE */}
      </div>
    </section>
  );
};

export default Services;
