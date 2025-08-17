import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["react", "html", "css", "javascript"];
  const backendSkills = ["nodejs", "expressjs", "sql", "mongodb"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>

          <div className="rounded-xl p-8 border-border border hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
            <p className="text-muted-foreground mb-6">
              passionate developer passionate develope passionate develope
              passionate develope passionate develope passionate develope
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translatr-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translatr-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-border border hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong> BE in Computer Science </strong> - IIT Bombay
                  (2023-2027)
                </li>
                <li>
                  <strong> BE in Computer Science </strong> - IIT Bombay
                  (2023-2027)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-border border hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Experiance</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-bold text-foreground">
                    Software Engineer at Google
                  </h4>
                  <p className="text-muted-foreground">
                    Product manager and supervisor
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground">
                    Software Engineer intern at openai
                  </h4>
                  <p className="text-muted-foreground">
                    LLM trainer with wikipeda data and reddit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
