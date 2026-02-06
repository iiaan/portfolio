import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaSteam, FaLinkedin } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Global Game Jam Granada 2026 – Blend In",
    description:
      "Participé en la Global Game Jam 2026 en Granada como programador. En solo 48 horas desarrollamos ‘Blend In’, una aventura narrativa donde una polilla debe adaptarse a distintos grupos sociales usando máscaras que cambian sus habilidades. Me encargué de la programación de varias mecánicas principales del gameplay, el sistema de animaciones con Blend Trees y el postprocesado visual del juego, trabajando en equipo bajo presión y en un entorno de desarrollo intensivo propio de una game jam.",
    tags: ["Unity", "C#", "Post-procesado", "Blend Trees"],
    linkedin:
      "https://www.linkedin.com/posts/raquelreyes3d_global-game-jam-2026-experience-as-i-mentioned-activity-7424261328338329600-OJG0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC-j2iMBOHGkcwmEKHNkOX3XuhVNZkIvf08",
    live: "",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-500/50",
    image: "https://i.postimg.cc/3N5mkn78/imagen.png",
  },
  {
    title: "Indie Game Marketplace",
    description:
      "Plataforma web para desarrolladores indie y jugadores. Permite subir juegos, registrarse, comprar mediante PayPal y dejar reseñas. Retos principales: integrar pagos de forma segura y mostrar la galería de juegos de forma eficiente. Solución: usé la API de PayPal y Firebase para manejo de datos y autenticación, aprendiendo sobre reglas de seguridad y gestión de usuarios.",
    tags: ["React", "Node.js", "API REST", "Firebase", "PayPal API"],
    github: "https://github.com/Starphy-Store/Starphy-Games",
    live: "",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/50",
    image: "https://i.postimg.cc/3N5mkn78/imagen.png",
  },
  {
    title: "Rush the Towers",
    description:
      "Juego 3D desarrollado en Unity. Enfrenté un desafío con la IA de enemigos: la navegación no funcionaba correctamente, lo que me llevó a refactorizar todo el código de rutas usando NavMesh y optimizar la lógica de comportamiento. Todas las tareas las gestioné con Trello y realicé modelado básico en Blender para algunos assets.",
    tags: ["C#", "Unity", "Blender"],
    live: "",
    gradient: "from-green-500/20 to-teal-500/20",
    iconColor: "text-green-400",
    steam:
      "https://store.steampowered.com/app/3541190/Rush_The_Towers/?l=spanish",
    borderHover: "hover:border-green-500/50",
    image: "https://i.postimg.cc/N0JgzVS2/imagen.png",
  },
  {
    title: "Timer de concentración",
    description:
      "Aplicación de escritorio en C# puro con Windows Forms que bloquea redes sociales mientras estudias. El desafío principal fue bloquear todas las redes en todos los navegadores, ya que usar solo el firewall limitaba la acción a un navegador. Investigando y consultando foros, implementé una solución que hace un backup del archivo hosts y añade las URLs de las redes sociales que se quieren bloquear, logrando un bloqueo efectivo en todo el sistema.",
    tags: ["C#", "Windows Forms", "Productividad"],
    github: "https://github.com/iiaan/Timerr",
    live: "",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-500/50",
    image:
      "https://raw.githubusercontent.com/iiaan/portfolio/refs/heads/main/images/Timer.png",
  },
  {
    title: "Contribuciones a estudio de Granada",
    description:
      "Colaboración en un proyecto 2D de un estudio en Granada. El código inicial estaba desordenado (código espagueti típico de prácticas), con muchas dependencias y poca estructura. Mi desafío fue adaptarme al proyecto, entender la lógica existente y corregir bugs, además de implementar mejoras de iluminación y dar soporte general en el código. Aprendí a trabajar en entornos complejos y a mejorar código legado sin romper la funcionalidad.",
    tags: ["C#", "Unity", "Colaboración"],
    github: "",
    live: "https://x.com/IctionGames/status/1916423716365348882/photo/1",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderHover: "hover:border-purple-500/50",
    video:
      "https://raw.githubusercontent.com/iiaan/portfolio/main/videos/1.mp4",
  },
];

const prototypes = [
  {
    title: "Generador de firmas PDF",
    description:
      "Mini aplicación en Windows Forms usando iText para generar firmas en PDFs. Funcional y directa, sin interfaz compleja.",
    tags: ["C#", "Windows Forms", "iText"],
    github: "https://github.com/iiaan/Certificaciones",
    live: "",
    gradient: "from-orange-500/20 to-rose-500/20",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-500/50",
    image: "https://i.postimg.cc/FzwrrBQf/imagen.png",
  },
  {
    title: "Prototipo multijugador",
    description:
      "Prueba de juego multijugador en Unity, incluyendo sincronización básica y mecánicas experimentales",
    tags: ["C#", "Unity", "Multiplayer"],
    github: "#",
    live: "#",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    borderHover: "hover:border-yellow-500/50",
    video:
      "https://raw.githubusercontent.com/iiaan/portfolio/main/videos/2.mp4",
    image:
      "https://images.unsplash.com/photo-1581091870622-7e9b2d3c981c?w=600&h=400&fit=crop",
  },
];

const ProjectCard = ({ project, index }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(!!project.video);
  const [isPlaying, setIsPlaying] = useState(false); // Nuevo estado

  useEffect(() => {
    if (!project.video) return;

    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      video.currentTime = 1; // Miniatura desde el segundo 1
      setLoading(false);
    };

    const handleMouseEnter = () => {
      video.play();
      setIsPlaying(true); // Video reproduciéndose
    };

    const handleMouseLeave = () => {
      video.pause();
      setIsPlaying(false); // Video detenido
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const card = video.closest(".group");
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [project.video]);

  return (
    <div
      className={`glass-card group animate-fade-in-up ${project.borderHover}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Video o Imagen */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-w-16 aspect-h-9">
        {project.video ? (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 z-10">
                <span className="text-gray-700 text-sm animate-pulse">
                  Cargando...
                </span>
              </div>
            )}
            <video
              ref={videoRef}
              src={project.video}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              muted
              loop={false}
              preload="metadata"
            />
            {/* Icono de play */}
            {!loading && !isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-12 h-12 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle cx="42" cy="42" r="42" fill="black" opacity="0.4" />
                  <polygon points="33,26 33,58 58,42" fill="white" />
                </svg>
              </div>
            )}
          </>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Icono y enlaces */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}>
          <Folder className={`h-8 w-8 ${project.iconColor}`} />
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {project.steam && (
            <a
              href={project.steam}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaSteam className="h-5 w-5" />
            </a>
          )}
          {project.linkedin && (
            <a
              href={project.linkedin}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Título y descripción */}
      <h3
        className={`text-xl font-semibold mb-3 group-hover:${project.iconColor} transition-colors`}
      >
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} ${project.iconColor}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 relative overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Destacados */}
        <h2 className="section-heading text-center mx-auto mb-4">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Prototipos */}
        <h2 className="section-heading text-center mx-auto mt-20 mb-4">
          Prototipos y Mecánicas
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {prototypes.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Botón GitHub */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open("https://github.com/iiaan", "_blank")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
          >
            <Github className="mr-2 h-5 w-5" />
            Ver más en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
