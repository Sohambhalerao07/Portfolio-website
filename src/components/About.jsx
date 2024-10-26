import React from 'react'; 
const description = "I am a student at Sinhgad Institute, specializing in frontend development. With a strong foundation in technical and logical skills, I have experience building responsive and interactive web applications. I am passionate about creating seamless user experiences and constantly exploring new tools and technologies to enhance my expertise.";
const skills = [" JavaScript",
  "ReactJs",
  "Java",
  "JavaFX",
  "Web Design",
  "UI/UX Design"
];
const Quote = "I am passionate about designing solutions that drive innovation and make technology approachable for all users. With a strong foundation in UI/UX, I aim to create intuitive and engaging experiences that enhance accessibility and empower every individual to navigate technology effortlessly.";

function About() {
  return (
    <div className='h-auto py-12'>
      <section className="relative" id="about">
        <div className="bg-slate-100 w-11/12 md:w-3/4 lg:w-1/2 py-10 px-6 mx-auto my-12 text-center rounded-lg transition-all duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-teal-500 hover:transform hover:-translate-y-2 hover:scale-105 font-playfair">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Myself</h2>
          <p className="text-base md:text-lg mb-4">{description}</p>
          <hr className="my-4" />
          <div className='hover:shadow-lg hover:shadow-gray-800 transition-shadow duration-300 mt-2 mb-2 rounded-xl'><ul className="list-disc list-inside mx-auto text-left text-base md:text-lg my-8 mx-4 columns-1 sm:columns-2 gap-4">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          </div>
         
          <hr className="my-4" />
          <p className="text-base md:text-lg pt-4 px-6 md:px-12">{Quote}</p>
        </div>
      </section>
    </div>
  );
}

export default About;
