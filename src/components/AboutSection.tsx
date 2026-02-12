import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Shield } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    period: "Set/2025 – Atualmente",
    title: "Desenvolvedor Fullstack",
    company: "Rádio 88 FM – Volta Redonda, RJ",
    description:
      "Desenvolvimento de sistemas web com React, apps mobile com React Native, aplicações Desktop com Windows Forms, APIs com .NET, suporte a sistemas legados com PHP e apoio em infraestrutura de rede.",
  },
  {
    icon: Shield,
    period: "Mar/2019 – Fev/2025",
    title: "Suporte de TI & Infraestrutura",
    company: "Exército Brasileiro – AMAN, Resende, RJ",
    description:
      "Manutenção de infraestrutura de rede, segurança da informação, gestão de dados sensíveis, suporte a projetos de TI e desenvolvimento de soft skills como liderança e resolução de problemas.",
  },
];

const certifications = [
  "AWS Academy Cloud Foundations",
  "Capacitação em Redes e Nuvem",
  "Desenvolvimento Full Stack",
  "Desenvolvedor de Jogos Digitais",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// sobre mim</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quem sou <span className="text-gradient">eu</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 text-muted-foreground leading-relaxed mb-12 max-w-3xl"
        >
          <p>
            Desenvolvedor <span className="text-foreground font-medium">Fullstack</span> formado em{" "}
            <span className="text-foreground font-medium">Sistemas de Informação</span> pelo Centro
            Universitário Dom Bosco (Conclusão: Jun/2025), com experiência prática em projetos
            robustos utilizando <span className="text-primary">C# e .NET Core</span>, arquitetura
            limpa, SOLID, DDD, CQRS, testes com xUnit, Docker e mensageria com RabbitMQ.
          </p>
          <p>
            Vivência com <span className="text-primary">Microsoft Azure</span> (Functions, deploy),
            CI/CD com GitHub Actions, APIs RESTful com Swagger, front-end com Angular, React e Blazor
            WebAssembly, além de bancos relacionais (SQL Server, MySQL) e não relacionais (MongoDB).
            Soft skills desenvolvidas em ambiente militar: liderança, comunicação, proatividade e
            resolução de problemas.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase size={20} className="text-primary" />
            Experiência Profissional
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <exp.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-primary mb-1">{exp.period}</p>
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Educação
            </h3>
            <p className="font-medium text-foreground">Bacharelado em Sistemas de Informação</p>
            <p className="text-sm text-muted-foreground">Centro Universitário Dom Bosco – Resende</p>
            <p className="text-xs font-mono text-primary mt-1">Conclusão: Junho/2025</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Certificações
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5 text-xs">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
