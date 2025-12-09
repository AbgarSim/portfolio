import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@abgarsimonean.com",
      href: "mailto:hello@abgarsimonean.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abgarsimonean",
      href: "https://linkedin.com/in/abgarsimonean",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/abgarsimonean",
      href: "https://github.com/abgarsimonean",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Abgar Simonean</title>
        <meta
          name="description"
          content="Get in touch with Abgar Simonean for collaborations, consulting, or just to say hello."
        />
      </Helmet>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-primary font-medium mb-4 block">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Let's <span className="text-gradient">connect</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have a project in mind, want to discuss data engineering 
                challenges, or just want to say hello, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary">
                      <link.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {link.label}
                      </div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
