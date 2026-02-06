const webSkills = [
  { name: "React", level: 90, gradient: "from-cyan-400 to-blue-500" }, // Azul cian típico de React
  { name: "Node.js", level: 80, gradient: "from-green-400 to-green-600" }, // Verde de Node
  { name: "REST APIs", level: 85, gradient: "from-purple-500 to-pink-500" }, // Morado/rosa por “API”
  { name: "Firebase", level: 70, gradient: "from-yellow-400 to-orange-500" }, // Naranja típico de Firebase
];

const gameDevSkills = [
  { name: "C#", level: 95, gradient: "from-blue-500 to-indigo-500" },
  { name: "Unity", level: 95, gradient: "from-green-400 to-green-600" }, // Verde Unity      // Azul C#
  {
    name: "Desarrollo de videojuegos",
    level: 85,
    gradient: "from-orange-500 to-red-500",
  }, // Genérico naranja/rojo
  { name: "Blender", level: 55, gradient: "from-orange-600 to-orange-800" }, // Naranja Blender
];

const systemSkills = [
  { name: "Windows Forms", level: 92, gradient: "from-blue-400 to-blue-600" }, // Azul Windows
  { name: "Linux", level: 80, gradient: "from-red-500 to-red-700" }, // Rojo Linux / Tux
  { name: "Git", level: 88, gradient: "from-orange-500 to-red-500" }, // Naranja-rojo Git
  {
    name: "Bases de datos",
    level: 65,
    gradient: "from-green-500 to-green-700",
  }, // Verde genérico BD
  { name: "iText", level: 55, gradient: "from-gray-500 to-gray-700" }, // Gris para librerías PDF
];

const SkillCard = ({ skill, index }) => (
  <div
    className="glass-card animate-fade-in-up group hover:border-orange-500/30"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex justify-between items-center mb-3">
      <span className="font-medium">{skill.name}</span>
      <span
        className={`font-mono text-sm bg-clip-text text-transparent bg-gradient-to-r ${skill.gradient}`}
      >
        {skill.level}%
      </span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 relative overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="section-heading section-heading-warm text-center mx-auto mb-4">
          Habilidades y tecnologías
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tecnologías con las que he trabajado recientemente
        </p>

        {/* Contenedor de las 3 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Web */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Web</h3>
            <div className="flex flex-col gap-4">
              {webSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Columna Game */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Desarrollo de Juegos
            </h3>
            <div className="flex flex-col gap-4">
              {gameDevSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Columna Systems */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Sistemas y Aplicaciones{" "}
            </h3>
            <div className="flex flex-col gap-4">
              {systemSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
