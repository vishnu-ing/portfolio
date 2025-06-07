
import React, { useState } from 'react';
import TerminalWindow from '../components/TerminalWindow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="pixel-font text-3xl text-primary mb-4">CONTACT.SH</h1>
          <p className="mono-font text-muted-foreground">
            // Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <TerminalWindow title="send_message.form">
            <h2 className="pixel-font text-lg text-primary mb-4">SEND MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="pixel-font text-sm text-primary">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mono-font terminal-border"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="pixel-font text-sm text-primary">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mono-font terminal-border"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="pixel-font text-sm text-primary">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mono-font terminal-border"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="pixel-font text-sm text-primary">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mono-font terminal-border min-h-[120px]"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <Button type="submit" className="pixel-font text-sm w-full">
                <Send className="mr-2 h-4 w-4" />
                Execute Send
              </Button>
            </form>
          </TerminalWindow>

          {/* Contact Information */}
          <div className="space-y-6">
            <TerminalWindow title="contact_info.json">
              <h2 className="pixel-font text-lg text-primary mb-4">CONTACT INFO</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary" />
                  <div>
                    <p className="mono-font text-sm text-foreground">vishnu.rsvk@gmail.com</p>
                    <p className="mono-font text-xs text-muted-foreground">Primary email</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary" />
                  <div>
                    <p className="mono-font text-sm text-foreground">+1 (716) 247-3792</p>
                    <p className="mono-font text-xs text-muted-foreground">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  <div>
                    <p className="mono-font text-sm text-foreground">Buffalo, NY</p>
                    <p className="mono-font text-xs text-muted-foreground">United States</p>
                  </div>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="social_links.config">
              <h2 className="pixel-font text-lg text-primary mb-4">CONNECT WITH ME</h2>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/vishnu-kumar-ruppa-sridhar"
                  className="flex items-center gap-3 terminal-border bg-secondary p-3 hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={16} className="text-primary" />
                  <div>
                    <p className="mono-font text-sm text-foreground">LinkedIn</p>
                    <p className="mono-font text-xs text-muted-foreground">Professional network</p>
                  </div>
                </a>

                <a
                  href="https://github.com/vishnukumarsridhar"
                  className="flex items-center gap-3 terminal-border bg-secondary p-3 hover:bg-primary/10 transition-colors"
                >
                  <Github size={16} className="text-primary" />
                  <div>
                    <p className="mono-font text-sm text-foreground">GitHub</p>
                    <p className="mono-font text-xs text-muted-foreground">Code repositories</p>
                  </div>
                </a>
              </div>
            </TerminalWindow>

            <TerminalWindow title="availability.status">
              <h2 className="pixel-font text-lg text-primary mb-4">AVAILABILITY</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <span className="mono-font text-sm">Open to new opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">●</span>
                  <span className="mono-font text-sm">Available for consulting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="mono-font text-sm">Response time: 24-48 hours</span>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
