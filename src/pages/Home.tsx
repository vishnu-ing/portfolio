
import React from 'react';
import { Link } from 'react-router-dom';
import TerminalWindow from '../components/TerminalWindow';
import TypingText from '../components/TypingText';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <TerminalWindow title="welcome.sh" className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="pixel-font text-3xl md:text-4xl text-primary">
                  <TypingText text="$ whoami" speed={100} />
                </h1>
                <div className="mono-font text-lg text-foreground mt-4">
                  <TypingText text="VISHNU KUMAR RUPPA SRIDHAR" speed={50} />
                </div>
              </div>
              
              <div className="space-y-2 mono-font text-sm">
                <p className="text-muted-foreground">Senior Software Engineer | Full-Stack Developer | AWS Certified</p>
                <p className="text-xs text-muted-foreground">United States • +1 (716) 247-3792 • vishnu.rsvk@gmail.com</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="terminal-border bg-secondary p-4">
                  <h3 className="pixel-font text-sm text-primary mb-2">Experience</h3>
                  <p className="mono-font text-xs">5+ years in full-stack development</p>
                </div>
                <div className="terminal-border bg-secondary p-4">
                  <h3 className="pixel-font text-sm text-primary mb-2">Focus</h3>
                  <p className="mono-font text-xs">React, Java, Cloud Architecture</p>
                </div>
                <div className="terminal-border bg-secondary p-4">
                  <h3 className="pixel-font text-sm text-primary mb-2">Location</h3>
                  <p className="mono-font text-xs">United States</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button asChild className="pixel-font text-xs">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
                <Button variant="outline" className="pixel-font text-xs">
                  <Download className="mr-2 h-3 w-3" />
                  Download Resume
                </Button>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <a href="mailto:vishnu.rsvk@gmail.com" className="terminal-border p-2 hover:bg-secondary transition-colors">
                  <Mail size={16} />
                </a>
                <a href="#" className="terminal-border p-2 hover:bg-secondary transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="terminal-border p-2 hover:bg-secondary transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </TerminalWindow>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalWindow title="recent_projects.log">
            <h2 className="pixel-font text-lg text-primary mb-4">RECENT PROJECTS</h2>
            <div className="space-y-3">
              <div className="terminal-border bg-secondary p-3">
                <h3 className="mono-font font-bold text-sm">Multi-brand PWA</h3>
                <p className="mono-font text-xs text-muted-foreground mt-1">
                  Consolidated 15 repositories into unified Progressive Web App
                </p>
              </div>
              <div className="terminal-border bg-secondary p-3">
                <h3 className="mono-font font-bold text-sm">AI Feedback Analysis</h3>
                <p className="mono-font text-xs text-muted-foreground mt-1">
                  ChatGPT-powered sentiment analysis system
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" asChild className="pixel-font text-xs">
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </TerminalWindow>

          <TerminalWindow title="system_status.exe">
            <h2 className="pixel-font text-lg text-primary mb-4">CURRENT STATUS</h2>
            <div className="space-y-2 mono-font text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">●</span>
                <span>Pursuing MS in Management Information Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">●</span>
                <span>Currently learning: Advanced Cloud Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span>Location: Buffalo, NY</span>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" asChild className="pixel-font text-xs">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </div>
  );
};

export default Home;
