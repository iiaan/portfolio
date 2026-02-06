import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechIcons from "./TechIcons";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-6"
    >
      {/* Floating Tech Icons */}
      <div className="absolute top-24 left-0 right-0 opacity-80">
        <TechIcons />
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <p className="text-primary font-mono text-lg mb-4 animate-fade-in-up">
          Hola, soy
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          Ian<span className="text-primary">,</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 ">
            Desarrollador Software
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-400">
          Desarrollador Software
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-600">
          Transformo ideas en software funcional y atractivo, creando soluciones
          digitales que marcan la diferencia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
            asChild
          >
            <a
              href="/portfolio/cv/IanCV.pdf" // Pon aquí la ruta correcta a tu CV
              download="IanCV.pdf" // Nombre del archivo al descargar
            >
              <FileText className="mr-2 h-5 w-5" />
              CV
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary"
            >
              Ver mis proyectos
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Background Glow Effects */}
      {/* Glow Circles Container */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none animate-rotate-slow">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
