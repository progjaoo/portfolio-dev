import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import projectBlog from "@/assets/project-blog.png";
import projectTcc from "@/assets/project-tcc.png";
import projectSgtcc from "@/assets/project-sgtcc-app.png";
import projectDevfreela from "@/assets/project-devfreela.png";
import projectLanches from "@/assets/project-lanches.png";
import projectConcessionaria from "@/assets/project-concessionaria.png";

const projects = [
  {
    title: "Blog Mais Saúde",
    description: "Blog e chat focado em saúde, desenvolvido em ASP.NET Core.",
    image: projectBlog,
    tags: ["ASP.NET Core", "MVC", "SQL Server"],
  },
  {
    title: "Sistema de Gestão de TCC",
    description: "Front-End em Svelte.js para a API do sistema de gestão de TCC.",
    image: projectTcc,
    tags: ["Svelte.js", "API REST", ".NET Core"],
  },
  {
    title: "App Mobile - SGTCC",
    description: "Aplicativo mobile para o sistema de gestão de TCC.",
    image: projectSgtcc,
    tags: [".NET MAUI", "Mobile", "C#"],
  },
  {
    title: "DevFreela",
    description: "API ASP.NET Core para um sistema de freelancers.",
    image: projectDevfreela,
    tags: ["ASP.NET Core", "Web API", "Clean Architecture"],
  },
  {
    title: "Site de Lanches",
    description: "Site em ASP.NET Core com integrações diversas.",
    image: projectLanches,
    tags: ["ASP.NET Core", "MVC", "Integrations"],
  },
  {
    title: "Sistema de Concessionária",
    description: "Sistema desktop em WinForms com C# .NET Framework.",
    image: projectConcessionaria,
    tags: ["WinForms", "C#", ".NET Framework"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// projetos</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Últimos <span className="text-gradient">Projetos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/40 transition-all"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
