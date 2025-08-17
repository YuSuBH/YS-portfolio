import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border hover:scale-102 hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 ease-out">
              <h3 className="text-xl font-bold mb-2">Social media</h3>
              <p className="text-muted-foreground mb-4">
                Social media project Social media projec Social media projec
                Social media projec
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["react", "nextjs", "nodejs", "sql"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors my-4"
                >
                  View project ➡
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border hover:scale-102 hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 ease-out">
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-muted-foreground mb-4">
                Social media project Social media projec Social media projec
                Social media projec
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["react", "nextjs", "nodejs", "sql"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors my-4"
                >
                  View project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
