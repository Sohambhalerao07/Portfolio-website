import React from 'react';
import PropTypes from "prop-types";
import profileimage from "../images/homeimg.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name = "" }) => {  
  return (
    <div>
      <section id="home" className="min-h-screen relative">
        
        <div className="absolute top-1/2 right-36 transform -translate-y-1/2 w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-lg 
                        transition-all duration-300 ease-in-out shadow-white shadow-glow shadow-2xl
                        hover:shadow-3xl shadow-3xl hover:shadow-white hover:shadow-glow">
          <img className="w-full h-full object-cover" src={profileimage} alt={imageAltText} />
        </div>

        <div className="ml-10 absolute w-96 top-1/2 left-20 transform -translate-y-1/2">
          <h1 className="text-7xl text-white font-playfair font-bold">{name}</h1>
     
          <br />
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laborum tenetur fugiat autem deleniti. 
            Ad accusantium expedita dolor assumenda pariatur sapiente, accusamus ipsam, beatae dignissimos quos 
            deleniti voluptatum! Officiis, consectetur.
          </p>
          <br></br>
          <button className=' h-10 w-20 rounded-xl absolute bg-white 
  transition-all duration-300 ease-in-out 
  
  hover:shadow-lg hover:shadow-white 
  hover:shadow-glow 
  hover:translate-x-1'>Contact</button>
        </div>

        <div className="absolute font-playfair bottom-12 left-1/2 transform -translate-x-1/2">
        
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
