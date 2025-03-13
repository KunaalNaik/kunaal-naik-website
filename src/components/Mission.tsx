
import React from 'react';
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-10">
            <span className="gradient-text">Mission</span>: Creating a Million World-Class Data-Driven Decision Makers
          </h2>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-lg mb-6">
                As the Founder of Data Science Masterminds, my mission is to bridge the gap between theoretical knowledge and real-world data-driven decision-making. I empower professionals and businesses with cutting-edge data science, AI, and leadership skills, ensuring they achieve tangible career growth and business transformation.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">I am dedicated to:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>Helping professionals secure high-impact data science roles with hands-on training.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>Equipping businesses with data-driven strategies for sustainable success.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>Exploring AI Agents to shape the future of automation and intelligent decision-making.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span>Coaching leaders and executives to make data-backed strategic choices.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div id="vision" className="mt-20">
            <h2 className="text-center mb-10">
              <span className="gradient-text">Vision</span>: Empowering the Future of Data & AI
            </h2>
            
            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-lg mb-6">I envision a future where:</p>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      🚀
                    </div>
                    <div>
                      <p className="font-semibold">Professional Empowerment</p>
                      <p className="text-muted-foreground">Professionals leverage data science, AI, and analytics to drive innovation and success.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <p className="font-semibold">Business Transformation</p>
                      <p className="text-muted-foreground">Businesses optimize operations and scale intelligently with data-driven strategies.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      📈
                    </div>
                    <div>
                      <p className="font-semibold">AI Revolution</p>
                      <p className="text-muted-foreground">AI Agents revolutionize industries, enhancing productivity, decision-making, and automation.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      🌍
                    </div>
                    <div>
                      <p className="font-semibold">Global Impact</p>
                      <p className="text-muted-foreground">A million professionals master data-driven leadership, becoming industry pioneers.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
