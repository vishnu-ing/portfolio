
import React from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  category: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level, category }) => {
  const blocks = Array.from({ length: 10 }, (_, i) => i < level);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="mono-font text-sm text-foreground">{skill}</span>
        <span className="pixel-font text-xs text-muted-foreground">{category}</span>
      </div>
      <div className="flex gap-1">
        {blocks.map((filled, index) => (
          <div
            key={index}
            className={`w-4 h-4 terminal-border ${
              filled ? 'bg-primary' : 'bg-secondary'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
