const Portfolio = () => {
    const projects = [
      {
        title: "Project 1",
        description: "A web development project using ext.js, React and Tailwind CSS.",
        link: "https://vercel.com/shasmeen-zahras-projects/next-js-assiment-02-fr7d",
      },
      {
        title: "Project 2",
        description: "A web development project using Typescript , Html and  CSS.",
        link: "https://vercel.com/shasmeen-zahras-projects/new-milestone-05-by-shasmeen-hr5c",
      },
      {
        title: "Project 3",
        description: "A personal portfolio built with HTML, CSS, and TypeScript.",
        link: "https://vercel.com/shasmeen-zahras-projects/milestone-3-by-shasmeen-zahra-fq95",
      },
    ];
  
    return (
      <section id="portfolio" className="bg-pink-200 py-12">
        <div className="container mx-auto">
          <h2 className=" text-5xl font-bold text-center text-pink-600 mb-6">My Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-pink-600">
            {projects.map((project, index) => (
              <div key={index} className="bg-pink-100 shadow-lg rounded-lg overflow-hidden">
               
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-pink-500 mb-4">{project.description}</p>
                  <a href={project.link} className="text-pink-600 hover:underline">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
