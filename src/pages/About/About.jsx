import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      {/* section 1 */}
      {/* 
        About us with an image  
        background color #EE9DAB 
        */}
      <div className="about__main">
        <h1>About us</h1>
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="team-image"
        />
      </div>
      <div className="about__section">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error labore
          quo eaque, pariatur, eum quia ea possimus totam deserunt soluta
          doloremque inventore similique hic consequuntur fuga temporibus veniam
          provident molestias?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error labore
          quo eaque, pariatur, eum quia ea possimus totam deserunt soluta
          doloremque inventore similique hic consequuntur fuga temporibus veniam
          provident molestias?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error labore
          quo eaque, pariatur, eum quia ea possimus totam deserunt soluta
          doloremque inventore similique hic consequuntur fuga temporibus veniam
          provident molestias?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error labore
          quo eaque, pariatur, eum quia ea possimus totam deserunt soluta
          doloremque inventore similique hic consequuntur fuga temporibus veniam
          provident molestias?
        </p>
      </div>
      <div className="about__stats">
        <div className="stat-element">
          <div className="stat-number green">12</div>
          <div className="stat-desc">teammates</div>
        </div>
        <div className="stat-element">
          <div className="stat-number yellow">23</div>
          <div className="stat-desc">brands</div>
        </div>
        <div className="stat-element">
          <div className="stat-number pink">345+</div>
          <div className="stat-desc">users</div>
        </div>
      </div>
    </div>
  );
};

export default About;
