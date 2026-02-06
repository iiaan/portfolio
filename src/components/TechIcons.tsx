
import { SiUnity } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact,FaNodeJs, FaGit,FaLinux } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

const techStack = [
  { name: "HTML", color: "bg-orange-500/20 text-orange-400 border-orange-500/30", icon: "C#" },
  { name: "C#", color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: <SiUnity /> },
  { name: "JS", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", icon: <IoLogoFirebase /> },
  { name: "React", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", icon: <FaReact /> },
  { name: "Node", color: "bg-green-500/20 text-green-400 border-green-500/30", icon: <FaNodeJs /> },
  { name: "Git", color: "bg-orange-600/20 text-orange-500 border-orange-600/30", icon: <FaGit /> },
  { name: "TS", color: "bg-gray-200/20 text-black border-gray-300/30", icon: <FaLinux /> },
  { name: "VS", color: "bg-blue-500/20 text-blue-300 border-blue-500/30", icon: <BiLogoVisualStudio /> },
];

const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className={`tech-icon border ${tech.color} floating-animation`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <span className="text-1xl font-mono font-semibold">{tech.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
