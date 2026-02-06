const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            {"<Diseñado y construido por Ian />"}
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
