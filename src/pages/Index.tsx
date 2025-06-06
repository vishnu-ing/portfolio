
import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import TerminalWindow from '../components/TerminalWindow';
import TypingText from '../components/TypingText';
import SkillBar from '../components/SkillBar';
import CareerTimeline from '../components/CareerTimeline';

const Index = () => {
  const skills = [
    { skill: 'React', level: 9, category: 'Frontend' },
    { skill: 'TypeScript', level: 8, category: 'Language' },
    { skill: 'Java', level: 9, category: 'Backend' },
    { skill: 'Python', level: 8, category: 'Language' },
    { skill: 'Node.js', level: 8, category: 'Backend' },
    { skill: 'AWS', level: 7, category: 'Cloud' },
    { skill: 'Docker', level: 7, category: 'DevOps' },
    { skill: 'MySQL', level: 8, category: 'Database' },
    { skill: 'Git', level: 9, category: 'Tools' },
    { skill: 'Agile', level: 8, category: 'Methodology' }
  ];

  const certifications = [
    'AWS Certified Solutions Architect - Associate',
    'AWS Certified Data Engineer - Associate',
    'Snowflake - Data Warehousing Workshop',
    'Tableau Digital Badge - Connect and Transform Data',
    'Tableau Digital Badge - Create Views and Dashboards'
  ];

  const projects = [
    {
      name: 'Multi-brand Progressive Web App',
      tech: 'React, Ionic, TypeScript',
      description: 'Consolidated 15 repositories into unified PWA improving maintainability'
    },
    {
      name: 'Glassdoor Feedback Analysis System',
      tech: 'ChatGPT, Selenium, React',
      description: 'AI-powered sentiment analysis increasing user experience by 65%'
    },
    {
      name: 'Retail Business Data Warehouse',
      tech: 'Oracle, Apache Hop, SQL, Power BI',
      description: 'End-to-end ETL pipeline for sales tracking and business insights'
    },
    {
      name: 'Stock Prediction Dashboard',
      tech: 'Python, Streamlit, Machine Learning',
      description: 'Interactive dashboard for tracking stock performance over six months'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 scanlines">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="terminal-border bg-card p-6 flex-1 mr-4">
            <div className="mb-4">
              <h1 className="pixel-font text-2xl text-primary mb-2">
                <TypingText text="VISHNU KUMAR RUPPA SRIDHAR" speed={100} />
              </h1>
              <p className="mono-font text-foreground">
                Senior Software Engineer | Full-Stack Developer | AWS Certified
              </p>
              <p className="mono-font text-sm text-muted-foreground mt-2">
                United States • +1 (716) 247-3792 • vishnu.rsvk@gmail.com
              </p>
            </div>
            
            <div className="space-y-2 mono-font text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">{'>'}</span>
                <span>Location: United States</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">{'>'}</span>
                <span>Experience: 5+ years in full-stack development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">{'>'}</span>
                <span>Focus: React, Java, Cloud Architecture, PWAs</span>
              </div>
            </div>
          </div>
          
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Professional Experience */}
          <TerminalWindow title="experience.exe">
            <h2 className="pixel-font text-lg text-primary mb-4">PROFESSIONAL EXPERIENCE</h2>
            
            <div className="space-y-4">
              <div className="terminal-border bg-secondary p-3">
                <h3 className="mono-font font-bold text-foreground">Senior Software Engineer</h3>
                <p className="mono-font text-sm text-muted-foreground">Ideas2IT Technology Services (2022-2024)</p>
                <ul className="mt-2 space-y-1 mono-font text-xs">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Consolidated 15 repositories into multi-brand PWA</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Implemented scalable React Context API state management</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Developed ChatGPT-powered feedback analysis system</li>
                </ul>
              </div>

              <div className="terminal-border bg-secondary p-3">
                <h3 className="mono-font font-bold text-foreground">Software Engineer</h3>
                <p className="mono-font text-sm text-muted-foreground">Ideas2IT Technology Services (2019-2022)</p>
                <ul className="mt-2 space-y-1 mono-font text-xs">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Designed Java-based REST API with multiple endpoints</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Improved client-side response times by 60%</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Developed microservices with automated deployments</li>
                </ul>
              </div>
            </div>
          </TerminalWindow>

          {/* Skills */}
          <TerminalWindow title="skills.bat">
            <h2 className="pixel-font text-lg text-primary mb-4">TECHNICAL SKILLS</h2>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </TerminalWindow>
        </div>

        {/* Projects */}
        <TerminalWindow title="projects.sh">
          <h2 className="pixel-font text-lg text-primary mb-4">KEY PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="terminal-border bg-secondary p-4">
                <h3 className="pixel-font text-sm text-primary mb-2">{project.name}</h3>
                <p className="mono-font text-xs text-muted-foreground mb-2">{project.tech}</p>
                <p className="mono-font text-xs text-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </TerminalWindow>

        {/* Career Timeline */}
        <TerminalWindow title="timeline.py">
          <h2 className="pixel-font text-lg text-primary mb-4">CAREER TIMELINE</h2>
          <CareerTimeline />
        </TerminalWindow>

        {/* Certifications */}
        <TerminalWindow title="certs.json">
          <h2 className="pixel-font text-lg text-primary mb-4">CERTIFICATIONS & BADGES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 terminal-border bg-secondary p-2">
                <span className="pixel-font text-xs text-primary">🏆</span>
                <span className="mono-font text-xs text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </TerminalWindow>

        {/* Footer */}
        <div className="terminal-border bg-card p-4 text-center">
          <p className="pixel-font text-xs text-muted-foreground">
            © 2024 VISHNU KUMAR RUPPA SRIDHAR • BUILT WITH REACT & LOVE FOR PIXELS
          </p>
          <p className="mono-font text-xs text-muted-foreground mt-2">
            Ready for new opportunities • Always learning • Always coding
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
