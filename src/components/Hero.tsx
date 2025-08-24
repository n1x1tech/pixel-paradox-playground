import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 animate-in fade-in duration-1000">
          <h1 className="text-6xl md:text-8xl font-light tracking-wide text-foreground">
            Human<span className="text-accent font-normal">Person</span>Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            Where AI meets absurdity in perfect harmony
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-1000 delay-300">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-accent hover:scale-105 transition-all duration-300 ease-smooth shadow-elevated"
            asChild
          >
            <a href="#gallery">Explore Art</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hover:scale-105 transition-all duration-300 ease-smooth hover:shadow-elevated"
            asChild
          >
            <a href="#survey">Take Survey</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;