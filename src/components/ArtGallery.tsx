import { useState } from "react";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";

const artworks = [
  {
    id: 1,
    image: art1,
    title: "Corporate Duck Dynasty",
    description: "When rubber ducks take over the boardroom"
  },
  {
    id: 2,
    image: art2,
    title: "Cosmic Llama Express",
    description: "Interdimensional pizza delivery with style"
  },
  {
    id: 3,
    image: art3,
    title: "Symphony of Vegetables",
    description: "The most distinguished orchestra ever assembled"
  },
  {
    id: 4,
    image: art4,
    title: "Hamster Grand Prix",
    description: "High-speed cheese city racing championship"
  }
];

const ArtGallery = () => {
  const [hoveredArt, setHoveredArt] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-light text-foreground">
            Ridiculous <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of AI-generated absurdity that defies logic and embraces chaos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-minimal hover:shadow-elevated transition-all duration-500 ease-smooth"
              onMouseEnter={() => setHoveredArt(artwork.id)}
              onMouseLeave={() => setHoveredArt(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className={`w-full h-96 object-cover transition-all duration-700 ease-smooth ${
                    hoveredArt === artwork.id 
                      ? 'scale-110 brightness-110' 
                      : 'scale-100 brightness-100'
                  }`}
                />
                
                {/* Interactive overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredArt === artwork.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform transition-transform duration-500 ease-bounce">
                    <h3 className={`text-2xl font-light mb-2 transition-all duration-500 ${
                      hoveredArt === artwork.id 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}>
                      {artwork.title}
                    </h3>
                    <p className={`text-lg opacity-90 transition-all duration-500 delay-100 ${
                      hoveredArt === artwork.id 
                        ? 'translate-y-0 opacity-90' 
                        : 'translate-y-4 opacity-0'
                    }`}>
                      {artwork.description}
                    </p>
                  </div>
                </div>

                {/* Floating accent dot */}
                <div 
                  className={`absolute top-4 right-4 w-3 h-3 bg-accent rounded-full transition-all duration-500 ease-bounce ${
                    hoveredArt === artwork.id 
                      ? 'scale-150 shadow-focus' 
                      : 'scale-100'
                  }`}
                />
              </div>
              
              {/* Bottom section for non-hovered state */}
              <div className={`p-6 transition-all duration-500 ${
                hoveredArt === artwork.id ? 'opacity-0' : 'opacity-100'
              }`}>
                <h3 className="text-xl font-light text-foreground mb-2">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground">
                  {artwork.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;