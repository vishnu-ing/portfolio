
import React, { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`terminal-border bg-card scanlines ${className}`}>
      <div className="bg-secondary p-2 border-b-2 border-current">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 terminal-border"></div>
            <div className="w-3 h-3 bg-yellow-500 terminal-border"></div>
            <div className="w-3 h-3 bg-green-500 terminal-border"></div>
          </div>
          <span className="pixel-font text-xs text-foreground">{title}</span>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
