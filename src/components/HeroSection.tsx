import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const socials = [
  { icon: Github, href: "https://github.com/progjaoo", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joao-marcos-valente/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/valente.joaomarcos/", label: "Instagram" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-3">Olá, eu sou</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            João Marcos{" "}
            <span className="text-gradient">Valente</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
            Desenvolvedor Fullstack focado no ecossistema{" "}
            <span className="text-primary font-medium">.NET</span>, sempre em constante evolução.
          </p>

          <div className="flex items-center gap-4 mb-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1QwhC1lIWyshQEvf-M4Jvc8lo9gipAgBh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Baixar CV
          </a>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 glow">
              <img
                src={profilePhoto}
                alt="João Marcos Valente"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg px-4 py-2 font-mono text-sm text-primary">
              .NET Developer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
