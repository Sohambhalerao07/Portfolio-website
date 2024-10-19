import React from 'react'; 
const description = "I am a passionate UI/UX student at Boston University, focused on crafting innovative and minimalist user interfaces.";
const skills = ["Web design", "User experience", "Inclusive design", "Focus group testing", "Mobile user interfaces", "Graphic design"];
const Quote = "I strive to creatively solve problems to foster innovation, ensuring technology is accessible for everyone through my UI/UX expertise.";

function About() {
  return (
    <div className='h-auto py-12'>
      <section className="relative" id="about">
        <div className="bg-slate-100 w-11/12 md:w-3/4 lg:w-1/2 py-10 px-6 mx-auto my-12 text-center rounded-lg transition-all duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-white hover:transform hover:-translate-y-2 hover:scale-105 font-playfair">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Myself</h2>
          <p className="text-base md:text-lg mb-4">{description}</p>
          <hr className="my-4" />
          <ul className="list-disc list-inside mx-auto text-left text-base md:text-lg my-8 mx-4 columns-1 sm:columns-2 gap-4">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          <hr className="my-4" />
          <p className="text-base md:text-lg pt-4 px-6 md:px-12">{Quote}</p>
        </div>
      </section>
    </div>
  );
}

export default About;
