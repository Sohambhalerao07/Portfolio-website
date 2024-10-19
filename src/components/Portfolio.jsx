import React from 'react'
import portfoliopage from "../images/portfoliojpg.jpg"
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
    <section className="py-12" id="portfolio" >
        <h2 className="text-center text-3xl font-bold text-white">Portfolio</h2>
        <div className="flex flex-row pt-12 relative">
            <div className="max-w-2xl self-center">
                <img
                    src={portfoliopage}
                    className="h-90 w-full object-cover rounded-lg ml-2"
                    alt={imageAltText}
                />
            </div>
            <div className="relative flex-grow ml-8 mr-8 flex flex-col justify-between rounded-xl">
                {projectList.map((project, index) => (
                    <div
                        key={project.title}
                        className={`p-6 bg-white shadow-md border rounded-lg transition-all duration-300 ease-in-out font-playfair
                            hover:shadow-lg hover:shadow-white
                            hover:transform hover:-translate-y-2 hover:scale-105 h-auto w-auto
                            ${index === 0 ? "mt-4 mb-2" : ""}  /* Top project */
                            ${index === projectList.length - 1 ? "mt-2 mb-5" : ""}  /* Bottom project */
                            ${index !== 0 && index !== projectList.length - 1 ? "mt-2 mb-2" : ""}  /* Middle projects */
                        `}
                        style={{
                            marginTop: index === 0 ? "5px" : index === projectList.length - 1 ? "2px" : "2px",
                            marginBottom: index === projectList.length - 1 ? "5px" : index === 0 ? "5px" : "2px"
                        }}
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



  )
}

export default Portfolio
