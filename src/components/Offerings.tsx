
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Globe, Lightbulb, Rocket, Users } from "lucide-react";

const Offerings: React.FC = () => {
  const offerings = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Corporate Training",
      description: "Training Fortune 500 companies & growing businesses on Data Science, AI, and Analytics."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "AI & Data Science Courses",
      description: "Hands-on mentorship in Python, Power BI, Machine Learning, NLP, and Generative AI."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "LinkedIn & YouTube Influence",
      description: "Sharing industry insights with 25K+ professionals on LinkedIn & 10K+ YouTube subscribers."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Leadership Coaching",
      description: "Helping executives and entrepreneurs become strategic, high-impact decision-makers."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Exploring AI Agents",
      description: "Researching and building next-gen AI-driven solutions to revolutionize industries."
    }
  ];

  return (
    <section id="offerings" className="py-20">
      <div className="container">
        <h2 className="text-center mb-12">
          <span className="gradient-text">What I Offer</span>
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pt-6 pb-2">
                <div className="mb-4">{offering.icon}</div>
                <CardTitle className="text-xl">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl">
            Join me in shaping the future of AI, Data Science, and Leadership. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
