import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <>
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
  <RevealOnScroll>
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      {/* One grid for all projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project 1 - PawRaksha */}
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          <h3 className="text-xl font-bold mb-2">PawRaksha</h3>
          <p className="text-gray-400 mb-4">
            A Full-stack IoT-enabled web application to monitor pet health, vaccinations, and feeding schedules.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Node.js", "NodeMCU", "Arduino"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/saicodes64/PawRaksha"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Project 2 - Stocker */}
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          <h3 className="text-xl font-bold mb-2">Stocker</h3>
          <p className="text-gray-400 mb-4">
            A Full-Stack Stock Trading Tool designed for efficient trading workflows with accurate tracking of holdings and positions.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Express.js", "Node.js", "MongoDB Atlas", "RESTful APIs"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/saicodes64/Stocker"
              className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            >
              View Project →
            </a>
          </div>
        </div>

      </div>
    </div>
  </RevealOnScroll>
</section>
    </>
    )
}