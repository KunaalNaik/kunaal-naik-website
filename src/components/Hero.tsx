
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="gradient-text mb-6 animate-fade-in-up">
            Kunaal Naik
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Founder | Sr. Data Scientist | Corporate Trainer | AI Agents Explorer | Leaders' Coach
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-primary/10 py-2 px-4 rounded-full">
              <span className="font-semibold text-primary">25K+</span> LinkedIn Followers
            </div>
            <div className="bg-primary/10 py-2 px-4 rounded-full">
              <span className="font-semibold text-primary">10K+</span> YouTube Subscribers
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button size="lg" asChild>
              <a href="#masterclass">
                Join My Masterclass <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#connect">
                Connect With Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
