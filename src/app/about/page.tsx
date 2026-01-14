
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LEADERSHIP_TEAM, BOARD_OF_ADVISORS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/animated-section";
import { GlobalPresence } from "@/components/pages/home/global-presence";
import { StackedCardDeck } from "@/components/stacked-card-deck";

export default function AboutPage() {
  const teamImages = PlaceHolderImages.filter(img => LEADERSHIP_TEAM.some(i => i.imageId === img.id));
  const findImage = (imageId: string) => teamImages.find(img => img.id === imageId);

  const heroImage = {
    description: "Hand holding a jar of stars",
    imageUrl: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg",
    imageHint: "hand stars"
  };

  const values = [
    { title: "Inspiration", description: "Inspiration at PlanckPoint comes from intellectual honesty and first-principles thinking. By operating at the deepest level of strategic decision-making, we empower leaders to question inherited assumptions, rethink conventional approaches, and design strategies that are both ambitious and executable. Our work encourages confidence rooted in understanding, not optimism." },
    { title: "Integrity", description: "Integrity is enforced through evidence-based analysis and methodological rigor. Our insights are derived from AI-assisted signal evaluation combined with structured expert judgment, ensuring conclusions are grounded in observable realities rather than assumptions or consensus narratives. We prioritise accuracy and transparency, exposing risk and uncertainty so leaders can make fully informed decisions." },
    { title: "Clarity", description: "Clarity at PlanckPoint is achieved by reducing complex strategic technology decisions to their fundamental execution variables. We move beyond abstract frameworks and surface-level metrics to analyse delivery risk, organisational capability, and real-world constraints. This approach enables leaders to evaluate feasibility, failure modes, and long-term impact before decisions become irreversible." },
  ];
  
  const heroImageUrl = "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg";

  return (
    <main>
      <section className="relative w-full h-screen overflow-hidden">
        {heroImage && (
            <Image
                src={heroImageUrl}
                alt={heroImage.description}
                fill
                className="object-cover object-center"
                data-ai-hint={heroImage.imageHint}
                priority
            />
        )}
        <div className="absolute inset-0 bg-accent/20"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="font-bold uppercase tracking-widest text-white">
                <h1 className="text-[calc(2.25rem+5px)] md:text-[calc(3.75rem+5px)] lg:text-[calc(6rem+5px)] font-normal bg-cover bg-center text-transparent bg-clip-text" style={{ backgroundImage: `url(${heroImageUrl})`, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                    Quantum
                </h1>
                <h2 className="text-2xl md:text-3xl font-normal">
                    Origins
                </h2>
                
                <div className="mt-4">
                    <h1 className="text-[calc(2.25rem+5px)] md:text-[calc(3.75rem+5px)] lg:text-[calc(6rem+5px)] font-normal bg-cover bg-center text-transparent bg-clip-text" style={{ backgroundImage: `url(${heroImageUrl})`, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                        Infinite
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-normal">
                        DESTINIES
                    </h2>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white text-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Our Guiding Philosophy</h2>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
                At Planckpoint, we believe in a pragmatic approach to innovation. Our strategy is simple yet powerful: dedicate 20% of our efforts to pioneering research that pushes boundaries, and channel a focused 80% into robust production that delivers real-world value to our clients today. This balance ensures we remain at the cutting edge while delivering reliable, impactful solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="who-we-are" className="py-20 lg:py-24 bg-background relative">
        <div className="absolute inset-0 moving-gradient -z-0"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="mt-4 text-white/90 text-lg">PlanckPoint is where technology decisions are examined at their most fundamental, critical level. We provide decision intelligence for technology and strategy choices, helping enterprises make high-stakes technology decisions using data most models ignore.</p>
                <p className="mt-4 text-white/90 text-lg">We go beyond analyst narratives and visual shortcuts, integrating execution signals, delivery risk, and organisational realities into evidence-based decision frameworks. Using AI-assisted analysis combined with structured expert judgment, we show leaders what is likely to work, what is likely to fail, and why, even before commitments become irreversible.</p>
                <p className="mt-4 text-white/90 text-lg">PlanckPoint is decision intelligence for strategy and technology choices that carry real consequences.</p>
              </div>
            </AnimatedSection>
            <div className="min-h-[450px] lg:min-h-[500px]">
              <AnimatedSection>
                <StackedCardDeck items={values} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 bg-background text-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Our Inspiration</h2>
              <div className="mt-6 text-lg md:text-xl max-w-3xl mx-auto space-y-4 text-center">
                <p>The Planck point represents the smallest meaningful unit of measurement; the point beyond which systems can no longer be described by approximation or surface observation. At that scale, assumptions break down and fundamentals matter. We see decisions the same way.</p>
                <p>Most enterprise choices are made using high-level abstractions: quadrants, scores, narratives, and averages. Those views are convenient, but they hide the forces that determine outcomes.</p>
                <p>PlanckPoint was created to operate at the equivalent of the Planck scale in strategic decisions, where execution capability, delivery constraints, talent realities, and risk signals become visible. This is the level at which success or failure is determined, long before it appears in dashboards or post-mortems.</p>
                <p>Our name reflects a simple belief: If a decision is material, it must be examined at its most fundamental level. That is where clarity begins. That is where PlanckPoint operates.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="leadership" className="py-20 lg:py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Leadership</h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">The minds behind our mission, guiding our strategy and innovation.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP_TEAM.map((member, index) => {
              const image = findImage(member.imageId);
              return (
                <AnimatedSection key={member.name} delay={index * 0.1}>
                  <Card className="text-center h-full bg-white/10 border-white/20 text-background backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="relative h-32 w-32 mx-auto overflow-hidden">
                        {image && <Image src={image.imageUrl} alt={member.name} fill className="object-cover" data-ai-hint={image.imageHint} />}
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-accent-foreground font-medium">{member.role}</p>
                      <p className="mt-2 text-sm text-primary-foreground/80">{member.bio}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      
      <section id="advisors" className="py-20 lg:py-24 bg-background text-primary">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Board of Advisors</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Industry luminaries who provide strategic counsel and invaluable perspective.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOARD_OF_ADVISORS.map((advisor, index) => (
              <AnimatedSection key={advisor.name} delay={index * 0.1}>
                <Card className="text-center bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary">{advisor.name}</h3>
                    <p className="text-muted-foreground">{advisor.role}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GlobalPresence />

    </main>
  );
}

    

    
