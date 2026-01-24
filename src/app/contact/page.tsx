import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/pages/contact/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <div className="lg:sticky top-24">
              <h1 className="text-4xl md:text-5xl font-normal text-primary">Get in Touch</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                We're here to answer your questions. Reach out and we'll respond as soon as we can. Whether you have a question about our services, want to collaborate, or just want to say hello, we'd love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-3xl font-normal text-primary mb-8">Our Information</h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a href="mailto:hello@planckpoint.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 ease-apple">hello@planckpoint.com</a>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <span className="text-muted-foreground">+1 (555) 123-4567</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Headquarters</h3>
                        <span className="text-muted-foreground">123 Innovation Drive<br/>Tech City, USA 90210</span>
                      </div>
                    </div>
                  </div>
                </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
