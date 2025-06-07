
import React from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { certifications } from '../data/portfolio';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="pixel-font text-3xl text-primary mb-4">CERTIFICATIONS.DAT</h1>
          <p className="mono-font text-muted-foreground">
            // Professional certifications and achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <TerminalWindow key={cert.id} title={`cert_${cert.id}.badge`}>
              <div className="space-y-4 text-center">
                <div className="terminal-border bg-secondary p-4">
                  <Award size={32} className="mx-auto text-primary mb-2" />
                  <h2 className="pixel-font text-lg text-primary">{cert.name}</h2>
                </div>

                <div className="space-y-2">
                  <p className="mono-font text-sm text-foreground font-bold">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="mono-font text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                </div>

                {cert.badge && (
                  <Button variant="outline" size="sm" className="pixel-font text-xs w-full">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Credential
                  </Button>
                )}
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* Achievement Summary */}
        <TerminalWindow title="achievement_summary.log">
          <h2 className="pixel-font text-lg text-primary mb-4">CERTIFICATION SUMMARY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="pixel-font text-sm text-primary">BY CATEGORY</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="mono-font text-xs">Cloud & Infrastructure</span>
                  <Badge variant="outline" className="mono-font text-xs">
                    {certifications.filter(c => c.name.toLowerCase().includes('aws') || c.name.toLowerCase().includes('cloud')).length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="mono-font text-xs">Development & Programming</span>
                  <Badge variant="outline" className="mono-font text-xs">
                    {certifications.filter(c => !c.name.toLowerCase().includes('aws') && !c.name.toLowerCase().includes('cloud')).length}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="pixel-font text-sm text-primary">VERIFICATION STATUS</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span className="mono-font text-xs">All certifications verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">●</span>
                  <span className="mono-font text-xs">Digital badges available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="mono-font text-xs">Continuing education active</span>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default Certifications;
