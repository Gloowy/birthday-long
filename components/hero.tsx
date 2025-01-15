import { MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  const handleScrollToCalculator = () => {
    const calculatorSection = document.querySelector('#calculator-section');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Start Your Journey Today!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Count the Days, Make them Count
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Every day is a new chapter in your life story. Our Life Journey Timer helps you appreciate the magnitude of your journey, celebrating each moment from your beginning until today.
              </p>
            </div>
            <div>
              <Button size="lg" className="gap-2" onClick={handleScrollToCalculator}>
                Calculate it now <MoveDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <img 
              src="/hero-image.png" 
              alt="Life Journey Visualization" 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 