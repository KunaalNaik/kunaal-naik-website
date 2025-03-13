
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, Mail, Link } from "lucide-react";

const ContactLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kunaal-naik/",
      icon: <Linkedin className="h-5 w-5" />,
      followers: "25K+ Followers",
      color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/KunaalNaik",
      icon: <Youtube className="h-5 w-5" />,
      followers: "10K+ Subscribers",
      color: "bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000]/20"
    },
    {
      name: "Email",
      url: "mailto:info@placeholder.com",
      icon: <Mail className="h-5 w-5" />,
      followers: "Direct Contact",
      color: "bg-primary/10 text-primary hover:bg-primary/20"
    },
    {
      name: "Website",
      url: "https://sp.datasciencemasterminds.com/masterclass",
      icon: <Link className="h-5 w-5" />,
      followers: "Data Science Masterminds",
      color: "bg-secondary hover:bg-secondary/80"
    }
  ];

  return (
    <section id="connect" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="gradient-text mb-10">
            Connect With Me
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${link.color} rounded-lg p-6 transition-colors flex flex-col items-center justify-center text-center`}
              >
                <div className="mb-2">{link.icon}</div>
                <h3 className="text-xl font-bold">{link.name}</h3>
                <p className="text-sm">{link.followers}</p>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <p className="text-muted-foreground">
              For business inquiries, collaborations, or speaking opportunities, please reach out via email or LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLinks;
