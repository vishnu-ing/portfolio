
import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  location?: string;
  description: string[];
  type: 'education' | 'work' | 'certification';
}

const CareerTimeline = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2019",
      title: "Bachelor of Engineering",
      company: "Electronics and Communication Engineering",
      location: "Anna University, Chennai",
      description: ["Graduated with comprehensive knowledge in ECE"],
      type: "education"
    },
    {
      year: "2019-2022",
      title: "Software Engineer",
      company: "Ideas2IT Technology Services",
      location: "Chennai, Tamil Nadu",
      description: [
        "Designed and implemented Java-based REST API with multiple endpoints",
        "Improved client-side response times by up to 60%",
        "Developed microservices and automated deployments"
      ],
      type: "work"
    },
    {
      year: "2022-2024",
      title: "Senior Software Engineer",
      company: "Ideas2IT Technology Services",
      location: "Chennai, Tamil Nadu",
      description: [
        "Consolidated 15 repositories into one multi-brand themed Progressive Web App",
        "Implemented scalable state management using React Context API",
        "Developed Glassdoor feedback analysis system using ChatGPT"
      ],
      type: "work"
    },
    {
      year: "2025",
      title: "Master of Science (STEM)",
      company: "Management Information Systems",
      location: "University at Buffalo, SUNY",
      description: ["Currently pursuing advanced degree in STEM"],
      type: "education"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return '🎓';
      case 'work': return '💼';
      case 'certification': return '🏆';
      default: return '📍';
    }
  };

  return (
    <div className="space-y-6">
      {timelineData.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 terminal-border bg-primary flex items-center justify-center pixel-font text-xs">
              {getIcon(item.type)}
            </div>
            {index < timelineData.length - 1 && (
              <div className="w-0.5 h-16 bg-border mt-2"></div>
            )}
          </div>
          <div className="flex-1 pb-8">
            <div className="terminal-border bg-card p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="pixel-font text-sm text-primary">{item.title}</h3>
                <span className="mono-font text-xs text-muted-foreground">{item.year}</span>
              </div>
              {item.company && (
                <p className="mono-font text-sm text-foreground mb-1">{item.company}</p>
              )}
              {item.location && (
                <p className="mono-font text-xs text-muted-foreground mb-3">{item.location}</p>
              )}
              <ul className="space-y-1">
                {item.description.map((desc, i) => (
                  <li key={i} className="mono-font text-xs text-foreground flex items-start">
                    <span className="text-primary mr-2">{'>'}</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;
