import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} João Marcos Valente. Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/progjaoo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-marcos-valente-62a0b81b8/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://www.instagram.com/joaomarcos_valente/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
