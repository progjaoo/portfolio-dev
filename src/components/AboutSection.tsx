import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Graduado em <span className="text-foreground font-medium">Sistemas de Informação</span> pelo Centro Universitário Dom Bosco (AEDB) — Rio de Janeiro.
            </p>
            <p>
              Desenvolvedor Fullstack com experiência prática em projetos robustos utilizando{" "}
              <span className="text-primary">C# e .NET Core</span>, arquitetura limpa, SOLID, DDD, CQRS, testes com xUnit, Docker e mensageria com RabbitMQ.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Vivência com <span className="text-primary">Microsoft Azure</span> (Functions, deploy), CI/CD com GitHub Actions, e desenvolvimento de APIs RESTful documentadas com Swagger.
            </p>
            <p>
              Experiência no front-end com Angular, React e Blazor WebAssembly, além de conhecimento sólido em bancos de dados relacionais e não relacionais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
