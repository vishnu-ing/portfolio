
import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import CareerTimeline from '../components/CareerTimeline';

const About = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="pixel-font text-3xl text-primary mb-4">ABOUT_ME.MD</h1>
          <p className="mono-font text-muted-foreground">
            // A passionate software engineer with a love for clean code and innovative solutions
          </p>
        </div>

        {/* Personal Story */}
        <TerminalWindow title="personal_story.txt">
          <h2 className="pixel-font text-lg text-primary mb-4">MY JOURNEY</h2>
          <div className="mono-font text-sm space-y-4 text-foreground">
            <p>
              Hello! I'm Vishnu Kumar Ruppa Sridhar, a passionate software engineer with over 5 years of experience 
              in full-stack development. My journey began with a fascination for how technology can solve real-world 
              problems and create meaningful impact.
            </p>
            <p>
              Starting my career as a Software Engineer at Ideas2IT Technology Services, I quickly discovered my 
              passion for building scalable applications and optimizing system performance. Over the years, I've 
              had the opportunity to work on diverse projects ranging from enterprise-level Progressive Web Apps 
              to AI-powered analysis systems.
            </p>
            <p>
              Recently graduated from my Master's in Management Information Systems from the University at Buffalo on June 2025, 
              I'm expanding my knowledge in strategic technology management while staying hands-on with the latest 
              development trends.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and the power of 
              collaboration to drive innovation.
            </p>
          </div>
        </TerminalWindow>

        {/* Education */}
        <TerminalWindow title="education.json">
          <h2 className="pixel-font text-lg text-primary mb-4">EDUCATION</h2>
          <div className="space-y-4">
            <div className="terminal-border bg-secondary p-4">
              <h3 className="mono-font font-bold text-foreground">Master of Science (STEM)</h3>
              <p className="mono-font text-sm text-primary">Management Information Systems</p>
              <p className="mono-font text-xs text-muted-foreground">University at Buffalo, SUNY • 2025 (Expected)</p>
              <p className="mono-font text-xs mt-2">
                Recently graduated from my Master's in Management Information Systems from the University at Buffalo on June 2025, 
                data analytics, and enterprise systems architecture.
              </p>
            </div>
            <div className="terminal-border bg-secondary p-4">
              <h3 className="mono-font font-bold text-foreground">Bachelor of Engineering</h3>
              <p className="mono-font text-sm text-primary">Electronics and Communication Engineering</p>
              <p className="mono-font text-xs text-muted-foreground">Anna University, Chennai • 2019</p>
              <p className="mono-font text-xs mt-2">
                Graduated with comprehensive knowledge in electronics, communication systems, 
                and foundational computer science principles.
              </p>
            </div>
          </div>
        </TerminalWindow>

        {/* Career Timeline */}
        <TerminalWindow title="career_timeline.py">
          <h2 className="pixel-font text-lg text-primary mb-4">CAREER TIMELINE</h2>
          <CareerTimeline />
        </TerminalWindow>

        {/* Values & Principles */}
        <TerminalWindow title="core_values.config">
          <h2 className="pixel-font text-lg text-primary mb-4">CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="terminal-border bg-secondary p-3">
                <h3 className="pixel-font text-sm text-primary">Code Quality</h3>
                <p className="mono-font text-xs text-foreground mt-1">
                  Writing clean, maintainable, and well-documented code that stands the test of time.
                </p>
              </div>
              <div className="terminal-border bg-secondary p-3">
                <h3 className="pixel-font text-sm text-primary">Continuous Learning</h3>
                <p className="mono-font text-xs text-foreground mt-1">
                  Staying curious and adapting to new technologies and methodologies in latest technology and trends.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="terminal-border bg-secondary p-3">
                <h3 className="pixel-font text-sm text-primary">Collaboration</h3>
                <p className="mono-font text-xs text-foreground mt-1">
                  Believing in the power of teamwork and knowledge sharing to achieve excellence.
                </p>
              </div>
              <div className="terminal-border bg-secondary p-3">
                <h3 className="pixel-font text-sm text-primary">Innovation</h3>
                <p className="mono-font text-xs text-foreground mt-1">
                  Finding creative solutions to complex problems and pushing technological boundaries.
                </p>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default About;
