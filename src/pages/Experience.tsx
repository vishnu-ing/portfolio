
import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { experiences } from '../data/portfolio';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="pixel-font text-3xl text-primary mb-4">WORK_EXPERIENCE.LOG</h1>
          <p className="mono-font text-muted-foreground">
            // Professional journey and key achievements
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <TerminalWindow key={exp.id} title={`position_${index + 1}.exe`}>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h2 className="pixel-font text-lg text-primary">{exp.title}</h2>
                    <h3 className="mono-font text-base text-foreground">{exp.company}</h3>
                    <p className="mono-font text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="terminal-border bg-secondary px-3 py-1">
                    <span className="pixel-font text-xs text-primary">{exp.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="pixel-font text-sm text-primary">KEY RESPONSIBILITIES:</h4>
                  <ul className="space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="mono-font text-sm text-foreground flex items-start">
                        <span className="text-primary mr-2">{'>'}</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="pixel-font text-sm text-primary">TECHNOLOGIES USED:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="mono-font text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* Skills Highlight */}
        <TerminalWindow title="impact_summary.stats">
          <h2 className="pixel-font text-lg text-primary mb-4">IMPACT & ACHIEVEMENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="terminal-border bg-secondary p-4 text-center">
              <div className="pixel-font text-2xl text-primary">70%</div>
              <div className="mono-font text-xs text-foreground">Maintainability Improvement</div>
            </div>
            <div className="terminal-border bg-secondary p-4 text-center">
              <div className="pixel-font text-2xl text-primary">60%</div>
              <div className="mono-font text-xs text-foreground">Response Time Enhancement</div>
            </div>
            <div className="terminal-border bg-secondary p-4 text-center">
              <div className="pixel-font text-2xl text-primary">15</div>
              <div className="mono-font text-xs text-foreground">Repositories Consolidated</div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default Experience;
