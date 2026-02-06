import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa";
import { Phone } from "lucide-react";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden scroll-mt-20"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="section-heading mx-auto mb-4">Contáctame</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Actualmente estoy abierto a nuevas oportunidades. Si tienes una
          pregunta o simplemente quieres saludar, intentaré responder lo antes
          posible.
        </p>

        <div className="glass-card max-w-xl mx-auto mb-12 border-gradient">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <a
                href="ianjosejf@gmail.com"
                className="text-foreground hover:text-cyan-400 transition-colors"
              >
                ianjosejf@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <MapPin className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-muted-foreground"> Granada, España 🇪🇸</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          {/* Botón Email */}
          <Button
            size="lg"
            className="w-52 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white border-0"
            onClick={() =>
              (window.location.href = "mailto:ianjosejf@gmail.com")
            }
          >
            <Mail className="mr-2 h-5 w-5" />
            Enviar mensaje
          </Button>

          {/* Botón WhatsApp */}
          <Button
            size="lg"
            className="w-52 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0"
            onClick={() => window.open("https://wa.me/34622815748", "_blank")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Mensaje por WhatsApp
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/iiaan"
            className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ianjowe/"
            className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10 transition-all"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          <a
            href="https://x.com/IanJowe"
            className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10 transition-all"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.tiktok.com/@ianjowe"
            className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 transition-all"
          >
            <FaTiktok className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
