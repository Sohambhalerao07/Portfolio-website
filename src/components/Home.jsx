import React from 'react';
import PropTypes from "prop-types";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import Animation from "../assets/Animation - 1730100307629.json";

const imageAltText = "Soham Bhalerao";

const Home = ({ name = "" }) => { 
  // Typing animation for roles
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'UI/UX Designer'],
    loop: true,
    delaySpeed: 2000, // Delay between each word in ms
  });

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section id="home" className="min-h-screen relative p-4 flex flex-col lg:flex-row">
        <div className="lg:absolute lg:right-36 lg:top-1/2 transform lg:-translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg 
                        transition-all duration-300 ease-in-out shadow-black shadow-glow
                        hover:shadow-3xl hover:shadow-teal-500 hover:shadow-glow mx-auto lg:mx-0">
          <Lottie animationData={Animation} />
        </div>

        <div className="lg:ml-10 lg:absolute lg:w-96 lg:top-1/2 lg:left-20 transform lg:-translate-y-1/2 mt-6 lg:mt-0 text-center lg:text-left">
          <h1 className="oxanium-font text-white "style={{fontSize:'3rem'}} >{name}</h1>
          <h3 className="oxanium-font text-slate-400 " style={{fontSize:'1.5rem'}}>
           <span>{text}</span> <Cursor />
          </h3>
          <p className="text-white text-sm oxanium-font lg:text-base">
            A student specializing in frontend development. With a strong foundation in technical and logical skills, I have experience building responsive and interactive web applications. I am passionate about creating seamless user experiences and constantly exploring new tools and technologies to enhance my expertise.
          </p>
          <button className="h-10 w-28 md:w-32 lg:w-40 rounded-xl bg-white mt-4 
            transition-all duration-300 ease-in-out oxanium-font
            hover:shadow-lg hover:shadow-teal-500 hover:shadow-glow" onClick={scrollToPortfolio}>Let's Connect</button>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
