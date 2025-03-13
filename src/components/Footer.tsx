
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold gradient-text">Kunaal Naik</h3>
              <p className="text-muted-foreground">Creating Data-Driven Decision Makers</p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
                Mission
              </a>
              <a href="#vision" className="text-muted-foreground hover:text-foreground transition-colors">
                Vision
              </a>
              <a href="#offerings" className="text-muted-foreground hover:text-foreground transition-colors">
                Offerings
              </a>
              <a href="#masterclass" className="text-muted-foreground hover:text-foreground transition-colors">
                Masterclass
              </a>
              <a href="#connect" className="text-muted-foreground hover:text-foreground transition-colors">
                Connect
              </a>
            </div>
          </div>
          
          <Separator />
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Kunaal Naik. All rights reserved.</p>
            <p className="mt-2">
              Founder of Data Science Masterminds | Sr. Data Scientist | Corporate Trainer | AI Agents Explorer | Leaders' Coach
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
