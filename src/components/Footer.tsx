const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-light">
            Human<span className="text-accent">Person</span>Design
          </h3>
          <p className="text-primary-foreground/80">
            Where creativity meets absurdity
          </p>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-sm text-primary-foreground/60">
            © 2024 HumanPersonDesign.com • Proudly ridiculous since today
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;