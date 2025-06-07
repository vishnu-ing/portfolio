
import React, { useState } from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { projects } from '../data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  
  const allTechs = ['All', ...Array.from(new Set(projects.flatMap(project => project.tech.split(', '))))];
  
  const filteredProjects = selectedTech === 'All' 
    ? projects 
    : projects.filter(project => project.tech.includes(selectedTech));

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="pixel-font text-3xl text-primary mb-4">PROJECTS.EXE</h1>
          <p className="mono-font text-muted-foreground">
            // Showcase of innovative solutions and technical achievements
          </p>
        </div>

        {/* Filter */}
        <TerminalWindow title="project_filter.js">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={16} className="text-primary" />
            <h2 className="pixel-font text-sm text-primary">FILTER BY TECHNOLOGY</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechs.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTech(tech)}
                className="pixel-font text-xs"
              >
                {tech}
              </Button>
            ))}
          </div>
        </TerminalWindow>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <TerminalWindow key={project.id} title={`${project.name.toLowerCase().replace(/\s+/g, '_')}.app`}>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="pixel-font text-lg text-primary">{project.name}</h2>
                  {project.featured && (
                    <Badge className="pixel-font text-xs">FEATURED</Badge>
                  )}
                </div>

                <p className="mono-font text-sm text-foreground">{project.description}</p>

                <div className="space-y-2">
                  <h3 className="pixel-font text-sm text-primary">TECH STACK:</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.split(', ').map((tech, i) => (
                      <Badge key={i} variant="outline" className="mono-font text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  {project.demoUrl && (
                    <Button size="sm" className="pixel-font text-xs">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="pixel-font text-xs">
                      <Github className="mr-2 h-3 w-3" />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* Project Stats */}
        <TerminalWindow title="project_stats.json">
          <h2 className="pixel-font text-lg text-primary mb-4">PROJECT STATISTICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="terminal-border bg-secondary p-4 text-center">
              <div className="pixel-font text-2xl text-primary">{projects.length}</div>
              <div className="mono-font text-xs text-foreground">Total Projects</div>
            </div>
            <div className="terminal-border bg-secondary p-4 text-center">
              <div className="pixel-font text-2xl text-primary">{allTechs.length - 1}</div>
              <div className="mono-font text-xs text-foreground">Technologies Used</div>
            </div>
            <div className="terminal-border bg-secondary p-4 text-center">
              <div className="pixel-font text-2xl text-primary">{projects.filter(p => p.featured).length}</div>
              <div className="mono-font text-xs text-foreground">Featured Projects</div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default Projects;
