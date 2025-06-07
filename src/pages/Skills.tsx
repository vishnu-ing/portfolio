
import React, { useState } from 'react';
import TerminalWindow from '../components/TerminalWindow';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/portfolio';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="pixel-font text-3xl text-primary mb-4">SKILLS.BAT</h1>
          <p className="mono-font text-muted-foreground">
            // Technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Filter */}
        <TerminalWindow title="skill_filter.js">
          <h2 className="pixel-font text-lg text-primary mb-4">FILTER BY CATEGORY</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="pixel-font text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </TerminalWindow>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TerminalWindow title="technical_skills.exe">
            <h2 className="pixel-font text-lg text-primary mb-4">SKILL LEVELS</h2>
            <div className="space-y-2">
              {filteredSkills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="skill_categories.json">
            <h2 className="pixel-font text-lg text-primary mb-4">EXPERTISE AREAS</h2>
            <div className="space-y-4">
              {categories.filter(cat => cat !== 'All').map((category) => {
                const categorySkills = skills.filter(skill => skill.category === category);
                const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
                
                return (
                  <div key={category} className="terminal-border bg-secondary p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="pixel-font text-sm text-primary">{category}</h3>
                      <span className="mono-font text-xs text-muted-foreground">
                        {categorySkills.length} skills
                      </span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 terminal-border ${
                            i < Math.round(avgLevel) ? 'bg-primary' : 'bg-secondary'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mono-font text-xs text-foreground">
                      {categorySkills.map(skill => skill.skill).join(', ')}
                    </p>
                  </div>
                );
              })}
            </div>
          </TerminalWindow>
        </div>

        {/* Skill Legend */}
        <TerminalWindow title="skill_legend.help">
          <h2 className="pixel-font text-lg text-primary mb-4">PROFICIENCY SCALE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-primary" />
                  ))}
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-secondary" />
                  ))}
                </div>
                <span className="mono-font text-xs">1-3: Beginner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-primary" />
                  ))}
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-secondary" />
                  ))}
                </div>
                <span className="mono-font text-xs">4-6: Intermediate</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-primary" />
                  ))}
                  {Array.from({ length: 2 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-secondary" />
                  ))}
                </div>
                <span className="mono-font text-xs">7-8: Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="w-3 h-3 terminal-border bg-primary" />
                  ))}
                </div>
                <span className="mono-font text-xs">9-10: Expert</span>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default Skills;
