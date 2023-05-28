import React from 'react';
import {BiCheck} from "react-icons/bi";
import "./services.css";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analyses of code</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and Develop Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Hosting of Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing of web pages and their endpoints</p>
            </li>
          </ul>
        </article>
        {/* END of Web Devlopment */}

        <article className="service">
          <div className="service__head">
            <h3>Cloud Engineering</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Educating teams on the implementation of new cloud technologies and initiatives.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing, developing and deploying modular cloud-based systems.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing and maintaining cloud solutions in accordance with best practices.</p>
            </li>

            <li>
              <BiCheck className='servie__list-icon' />
              <p>Interacting with clients, providing cloud support, and making recommendations based on client needs.</p>
            </li>
          </ul>
        </article>

        {/* End of Cloud Engineering */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development of mobile applications using Flutter with proper and scalable code structure</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Using a suitable State management for App functionality.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating mobile app with backend REST Api</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Deployment of new updates to playstore and AppStore </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;