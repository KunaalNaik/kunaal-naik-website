
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-foreground">
            <span className="gradient-text">Kunaal Naik</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#mission" className="text-foreground/80 hover:text-foreground transition-colors">Mission</a>
          <a href="#vision" className="text-foreground/80 hover:text-foreground transition-colors">Vision</a>
          <a href="#offerings" className="text-foreground/80 hover:text-foreground transition-colors">Offerings</a>
          <a href="#connect" className="text-foreground/80 hover:text-foreground transition-colors">Connect</a>
          <Button variant="default" size="sm" asChild>
            <a href="https://sp.datasciencemasterminds.com/masterclass" target="_blank" rel="noopener noreferrer">Join Masterclass</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div className={cn(
        "md:hidden absolute top-16 left-0 right-0 bg-background border-b py-4 px-4 transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4">
          <a 
            href="#mission" 
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={toggleMobileMenu}
          >
            Mission
          </a>
          <a 
            href="#vision" 
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={toggleMobileMenu}
          >
            Vision
          </a>
          <a 
            href="#offerings" 
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={toggleMobileMenu}
          >
            Offerings
          </a>
          <a 
            href="#connect" 
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={toggleMobileMenu}
          >
            Connect
          </a>
          <Button variant="default" size="sm" asChild className="w-full">
            <a 
              href="https://sp.datasciencemasterminds.com/masterclass" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
            >
              Join Masterclass
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
