import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SurveySection = () => {
  return (
    <section id="survey" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-12 shadow-elevated hover:shadow-focus transition-all duration-500 ease-smooth hover:scale-105">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-foreground">
                Help Shape Our <span className="text-accent">Absurd</span> Future
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're curious beings who love feedback! Tell us how you discovered our ridiculous corner 
                of the internet and what wild ideas you'd like to see brought to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center space-y-2">
                <div className="text-3xl">🔍</div>
                <p className="text-sm text-muted-foreground">How did you find us?</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">💡</div>
                <p className="text-sm text-muted-foreground">What would you like to see?</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl">🎨</div>
                <p className="text-sm text-muted-foreground">Share your wildest ideas</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-accent hover:scale-110 transition-all duration-300 ease-bounce shadow-elevated hover:shadow-focus text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://forms.google.com/your-survey-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Take the Survey
                <span className="text-xl">→</span>
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              Your feedback helps us create even more delightfully ridiculous experiences
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SurveySection;