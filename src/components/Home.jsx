import React from 'react';
import PropTypes from "prop-types";
import profileimage from "../images/homeimg.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name = "" }) => {  
  return (
    <div>
      <section id="home" className="min-h-screen relative p-4 flex flex-col lg:flex-row">
        
        <div className="lg:absolute lg:right-36 lg:top-1/2 transform lg:-translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg 
                        transition-all duration-300 ease-in-out shadow-white shadow-glow
                        hover:shadow-3xl hover:shadow-white hover:shadow-glow mx-auto lg:mx-0">
          <img className="w-full h-full object-cover" src={profileimage} alt={imageAltText} />
        </div>

        <div className="lg:ml-10 lg:absolute lg:w-96 lg:top-1/2 lg:left-20 transform lg:-translate-y-1/2 mt-6 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl text-white font-playfair font-bold">{name}</h1>
          <br />
          <p className='text-white text-sm lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laborum tenetur fugiat autem deleniti. 
            Ad accusantium expedita dolor assumenda pariatur sapiente, accusamus ipsam, beatae dignissimos quos 
            deleniti voluptatum! Officiis, consectetur.
          </p>
          <br />
          <button className=' h-10 w-28 md:w-32 lg:w-40 rounded-xl bg-white mt-4 
            transition-all duration-300 ease-in-out 
            hover:shadow-lg hover:shadow-white hover:shadow-glow'>Contact</button>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
