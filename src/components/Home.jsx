import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import profileimage from "../images/profile.png";

const imageAltText = "Soham Bhalerao";
const roles = ["Frontend Developer", "Backend Developer"];

const Home = ({ name = "" }) => { 
  const [currentRole, setCurrentRole] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(""); // Remove the animation class to re-trigger
      setTimeout(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        setFadeClass("fade-in"); // Re-add the class after role updates
      }, 0);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="home" className="min-h-screen relative p-4 flex flex-col lg:flex-row">
        <div className="lg:absolute lg:right-36 lg:top-1/2 transform lg:-translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg 
                        transition-all duration-300 ease-in-out shadow-black shadow-glow
                        hover:shadow-3xl hover:shadow-teal-500 hover:shadow-glow mx-auto lg:mx-0">
          <img className="w-full h-full object-cover" src={profileimage} alt={imageAltText} />
        </div>

        <div className="lg:ml-10 lg:absolute lg:w-96 lg:top-1/2 lg:left-20 transform lg:-translate-y-1/2 mt-6 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl text-white font-playfair font-bold">{name}</h1>
          <h2 className={`text-2xl text-slate-300 font-semibold ${fadeClass}`}>{roles[currentRole]}</h2>
          <br />
          <p className='text-white text-sm lg:text-base'>
          A student that, specializing in frontend development. With a strong foundation in technical and logical skills, I have experience building responsive and interactive web applications. I am passionate about creating seamless user experiences and constantly exploring new tools and technologies to enhance my expertise.
          </p>
          <br />
          <button className='h-10 w-28 md:w-32 lg:w-40 rounded-xl bg-white mt-4 
            transition-all duration-300 ease-in-out 
            hover:shadow-lg hover:shadow-teal-500 hover:shadow-glow' onClick={scrollToPortfolio}>Let's Connect</button>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
