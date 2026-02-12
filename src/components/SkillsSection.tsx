import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Monitor, Database, Cloud, Terminal, Network } from "lucide-react";

const skills = [
  {
    title: "Back-End",
    icon: Server,
    items: [
      "C# / .NET Core (6, 7, 8, 9)",
      "ASP.NET Core MVC & Web API",
      "Arquitetura Limpa / Hexagonal / DDD",
      "CQRS / SOLID / Design Patterns",
      "xUnit / NUnit Testing",
      "Docker & RabbitMQ",
    ],
  },
  {
    title: "Front-End & Mobile",
    icon: Monitor,
    items: [
      "React / React Native",
      "Angular / TypeScript",
      "Blazor / Blazor WebAssembly",
      "HTML / CSS / JavaScript",
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "Microsoft Azure (Functions, DevOps)",
      "AWS (Cloud Foundations)",
      "GitHub Actions CI/CD",
      "Docker",
      "Git & GitHub",
    ],
  },
  {
    title: "Linguagens",
    icon: Terminal,
    items: ["C#", "TypeScript", "JavaScript", "Python", "PHP"],
  },
  {
    title: "Infra & Outros",
    icon: Network,
    items: [
      "Infraestrutura de Redes",
      "Linux",
      "APIs RESTful / Swagger",
      "Metodologias Ágeis (Scrum, Kanban)",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="especialidades" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// especialidades</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Minhas <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
            >
              <skill.icon className="text-primary mb-4" size={28} />
              <h3 className="font-semibold text-lg mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
