import React from "react";
import "./index.css";
function App() {
  const currentDate = new Date();
  const age = (
    (currentDate.getTime() - new Date("2004-01-09").getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(4);

  return (
    <div className="min-h-screen bg-custom-green text-black font-serif p-8">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl"></span>
          <h1 className="text-5xl font-bold text-center">Varun Palleti</h1>
          <span className="invisible"></span>
        </div>
        <div className="text-center text-sm mb-4">
          <span>SEPTEMBER 25, 2024</span>
          <span className="mx-4">|</span>
          <span>Age: {age}</span>
          {/* <span className="mx-4">|</span> */}
          {/* <span>LLM Hours: 1283</span> */}
        </div>
        <nav className="flex justify-center space-x-6 text-lg">
          <a href="#about" className="hover:underline">
            ABOUT
          </a>
          <a href="#projects" className="hover:underline">
            PROJECTS
          </a>
          <a href="#experience" className="hover:underline">
            EXPERIENCE
          </a>
          <a href="#interests" className="hover:underline">
            INTERESTS
          </a>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Who is Varun?</h2>
          <div className="flex items-start space-x-8">
            <div className="flex-1">
              <p className="mb-4">a person.</p>
              <div className="bg-white bg-opacity-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Currently</h3>
                <p>looking for a job.</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-72 h-72 bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="/profile-picture.jpeg"
                alt="Varun Palleti"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["something1", "something2", "something3"].map(
              (project, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-50 p-4 rounded-lg"
                >
                  <h3 className="font-bold text-xl mb-2">{project}</h3>
                  <p>blob.</p>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
