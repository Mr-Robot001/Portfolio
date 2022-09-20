import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className="uil uil-desktop-cloud-alt about__icon "></i> | <i className="uil uil-java-script about__icon"></i>
        <h3 className="about__title">MERN</h3>
        <span className="about__subtitle">Learning Path in FullStack Web Development.</span>
      </div>

      <div className="about__box">
      <i className="uil uil-graduation-cap about__icon"></i>
        <h3 className="about__title">BA</h3>
        <span className="about__subtitle">Graduation from Panjab University | Chandigarh | 2019-2022</span>
      </div>

      <div className="about__box">
      <i className="uil uil-link-alt about__icon"></i>
        <h3 className="about__title">Links</h3>
        <span className="about__subtitle"> <a className="about__social-icon" href="https://www.linkedin.com/in/ankit-rohilla-4917b11b7/Mr-Robot001" target="_blank" rel="noreferrer">
        <i className="uil uil-linkedin-alt"></i>
        </a>
    
        <a className="about__social-icon" href="https://github.com/Mr-Robot001" target="_blank" rel="noreferrer" >
        <i className="uil uil-github-alt"></i>
        </a>
    
      
        <a className="about__social-icon" href="https://www.instagram.com/ankit_rohilla1010/" target="_blank" rel="noreferrer">
        <i className="uil uil-instagram"></i>
        </a> </span>
      </div>
      <span></span>
    </div>
   
  );
};

export default Info;
