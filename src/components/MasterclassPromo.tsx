
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MasterclassPromo: React.FC = () => {
  return (
    <section id="masterclass" className="py-20 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-indigo/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="gradient-text mb-6">
            Data Science Masterclass
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Join my exclusive masterclass and transform your career with cutting-edge data science and AI skills.
          </p>
          
          <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              <div className="bg-secondary rounded-md p-4">
                <p className="font-semibold">Practical Python Skills</p>
                <p className="text-sm text-muted-foreground">Master Python for data analysis and machine learning</p>
              </div>
              <div className="bg-secondary rounded-md p-4">
                <p className="font-semibold">Power BI Mastery</p>
                <p className="text-sm text-muted-foreground">Create impactful visualizations and reports</p>
              </div>
              <div className="bg-secondary rounded-md p-4">
                <p className="font-semibold">Machine Learning Essentials</p>
                <p className="text-sm text-muted-foreground">Build and deploy ML models that solve real problems</p>
              </div>
              <div className="bg-secondary rounded-md p-4">
                <p className="font-semibold">NLP & Generative AI</p>
                <p className="text-sm text-muted-foreground">Harness the power of large language models</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="w-full" asChild>
                <a href="https://sp.datasciencemasterminds.com/masterclass" target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="https://sp.datasciencemasterminds.com/masterclass" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Limited seats available. Next cohort starts soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterclassPromo;
