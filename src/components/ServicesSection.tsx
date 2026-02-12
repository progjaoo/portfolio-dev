import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Globe, Smartphone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão, responsivas e otimizadas para SEO. Ideal para captar leads e apresentar seu negócio de forma profissional.",
    highlights: ["Design moderno", "SEO otimizado", "Alta performance"],
  },
  {
    icon: Smartphone,
    title: "Aplicações Web & Mobile",
    description:
      "Desenvolvimento de aplicações completas, do back-end ao front-end, com React, .NET, Angular e React Native para iOS e Android.",
    highlights: ["Fullstack", "React & .NET", "iOS & Android"],
  },
  {
    icon: MessageCircle,
    title: "Bots de WhatsApp",
    description:
      "Automatize o atendimento do seu negócio com bots inteligentes de WhatsApp. Respostas rápidas, fluxos personalizados e integração com APIs.",
    highlights: ["Atendimento 24/7", "Fluxos customizados", "Integração com APIs"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + services.length) % services.length);
  };
  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % services.length);
  };

  return (
    <section id="servicos" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">// serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Desenvolva seu negócio com{" "}
            <span className="text-gradient">nossas aplicações</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções sob medida para transformar sua ideia em realidade digital.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mx-auto max-w-2xl text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="https://wa.me/5524981894825?text=Ol%C3%A1%20Jo%C3%A3o%2C%20tenho%20interesse%20em%20um%20servi%C3%A7o!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              Solicitar orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
