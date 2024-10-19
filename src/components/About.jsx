import React from 'react';
import bgimage from "../images/motion-bg.jpg";
const description =
  "I am a passionate UI/UX student at Boston University, focused on crafting innovative and minimalist user interfaces.";


const imageAltText = "purple and blue abstract background";

const skills = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];


const Quote =
  "I strive to creatively solve problems to foster innovation, ensuring technology is accessible for everyone through my UI/UX expertise.";
function About() {
  return (
    <div className='h-screen'>
      <section
        className="py-16 relative"
        id="about"
      >
        <div
          className="bg-slate-100 w-1/2 py-16 px-8 mx-auto my-12 text-center relative z-10 rounded-lg 
          transition-all duration-300 ease-in-out 
          hover:shadow-lg hover:shadow-white
          hover:shadow-glow hover:transform hover:-translate-y-2 hover:scale-105 font-playfair"
        >
          <h2 className="text-3xl font-bold mb-4">About Myself</h2>
          <p className="text-lg mb-4">{description}</p>
          <hr className="my-4" />
          <ul className=" custom-bullets text-left text-lg my-8 mx-12 columns-2 gap-8">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <hr className="my-4" />
          <p className="text-lg pt-4 px-12">{Quote}</p>
        </div>
      </section>
    </div>
  );
}

export default About;
