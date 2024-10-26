import React from 'react';
import portfoliopage from "../images/portfoliojpg.jpg";
const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "The Quiz App",
    description:
      "Developed a user friendly and interactive quiz application with effective response to answers and scoring system to make it fun.",
    url: "https://sohambhalerao07.github.io/Quiz-React/",
  },
  {
    title: "Video Call Application",
    description:
      "This video call and messaging application leverages the power of WebRTC to provide seamless real-time communication.",
    url: "https://github.com/Sohambhalerao07/Video-Call-app.git",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Overleaf using Latex and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://sohambhalerao07.github.io/Resume-website/",
  },
  {
    title: "Video Resume",
    description: "A brief introduction to my skills and projects as a frontend developer, showcasing my experience with React, JavaScript, and web technologies.",
    url: "https://youtu.be/owkxpZRoCpo?feature=shared"
  },
  {
    title: "Personal Blog Application",
    description: "This personal blog application is designed to provide users with a platform to share their thoughts, experiences, and creative ideas.",
    url: "https://github.com/Sohambhalerao07/React-projects/tree/personalblog"
  },
  {
    title: "Github",
    description:"Showcase of my other works that I like and enhance my knowledge experience",
    url: "https://github.com/Sohambhalerao07"
  }

];

function Portfolio() {
  return (
    <div>
      <section className="py-12" id="portfolio">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Portfolio</h2>
        <div className="flex flex-col lg:flex-row pt-12 relative">
          <div className="max-w-full lg:max-w-2xl self-center px-4 lg:px-0">
            <img
              src={portfoliopage}
              className="h-64 lg:h-96 w-full object-cover rounded-lg"
              alt={imageAltText}
            />
          </div>
          <div className="relative flex-grow mt-8 lg:mt-0 ml-0 lg:ml-8 flex flex-col justify-between rounded-xl px-4 lg:px-0">
            {projectList.map((project, index) => (
              <div
                key={project.title}
                className={`p-4 bg-white shadow-md border rounded-lg transition-all duration-300 ease-in-out font-playfair
                            hover:shadow-lg hover:shadow-teal-400 hover:transform hover:-translate-y-2 hover:scale-105 mb-6`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold"
                >
                  {project.title}
                </a>
                <p className="text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
