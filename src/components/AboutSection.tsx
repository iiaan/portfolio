import { Code2, Laptop, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden scroll-mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="section-heading section-heading-purple text-center mx-auto mb-16">
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-in-left">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ¡Hola! Soy Ian, un desarrollador software apasionado con base en
              Granada. Disfruto creando aplicaciones, juegos y todo lo que se
              encuentra entre ambos.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Mi objetivo es construir productos que ofrezcan experiencias
              precisas y de alto rendimiento. Tengo una sólida base en{" "}
              <span className="text-cyan-400">C#</span>,{" "}
              <span className="text-blue-400">Unity</span>,{" "}
              <span className="text-yellow-400">Javascript</span> y en
              frameworks como <span className="text-purple-400">React</span> y{" "}
              <span className="text-blue-300">Node.js</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Siempre me encontrarás creando prototipos de videojuegos y
              experimentando con nuevas ideas. Incluso comparto algunos procesos
              y mecánicas en videos en{" "}
              <a
                href="https://www.tiktok.com/@ianjowe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                TikTok
              </a>
              .
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-card glass-card-purple flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Code2 className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Código limpio</h3>
                <p className="text-muted-foreground text-sm">
                  Escribir código mantenible y bien documentado que sigue las
                  mejores prácticas.
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <Laptop className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Lógica y arquitectura
                </h3>
                <p className="text-muted-foreground text-sm">
                  Diseño de sistemas sólidos y código mantenible para proyectos
                  de software.
                </p>
              </div>
            </div>

            <div className="glass-card glass-card-warm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-rose-500/20">
                <Sparkles className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Resolución de problemas
                </h3>
                <p className="text-muted-foreground text-sm">
                  Enfoque analítico para transformar ideas complejas en
                  soluciones funcionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
