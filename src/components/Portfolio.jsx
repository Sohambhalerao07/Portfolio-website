import React from 'react';
import portfoliopage from "../images/portfoliojpg.jpg";
const imageAltText = "desktop with books and laptop";
const projectList = [
   {
    title: "Personal Portfolio Website",
    description: "Showcase your skills, projects, and experience in a visually appealing way.",
    url: "https://www.example.com",
  },
  {
    title: "Recipe Finder Application",
    description: "Build an app that allows users to search for recipes based on ingredients they have at home.",
    url: "https://www.example.com",
  },
  {
    title: "Habit Tracker",
    description: "Create a web or mobile app to help users track and maintain their habits over time.",
    url: "https://www.example.com",
  },
  {
    title: "E-commerce Store",
    description: "Develop a full-fledged online store with features like product listings, shopping cart, and user authentication.",
    url: "https://www.example.com",
  },
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
                            hover:shadow-lg hover:shadow-white hover:transform hover:-translate-y-2 hover:scale-105 mb-6`}
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
