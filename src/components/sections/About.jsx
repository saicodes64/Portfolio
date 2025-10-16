import { RevealOnScroll } from "../RevealOnScroll";
import { Hobbies } from "./Hobbies";

export const About = () => {
  const programmingLanguages = ["C++", "JavaScript"];
  const coreTechnologies = ["Web Development", "Data Structures & Algorithms (DSA)"];
  const frontendSkills = ["React", "TailwindCSS"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB Atlas", "Redis", "REST APIs"];
  const toolsAndPlatforms = ["Git", "GitHub", "Postman", "Jira"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* About Description */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1.5 transition-all">
            <p className="text-zinc-300 mb-6">
              I’m passionate about problem solving, web app development, and automations. I’m productivity-focused and constantly improving how I work, learn, and build real-world solutions. 
              I’m also curious about the core understanding of any technical concept, believing strong fundamentals lead to smarter innovation.
            </p>
          </div>

          {/* Skills Section */}
          <h3 className="text-2xl font-bold mt-10 mb-6 text-cyan-400">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Programming Languages */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Technologies */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {coreTechnologies.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {toolsAndPlatforms.map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Hobbies/>
      </RevealOnScroll>
    </section>
  );
};