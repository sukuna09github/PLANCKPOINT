
"use client";

import Image from "next/image";
import { LEADERSHIP_TEAM, BOARD_OF_ADVISORS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "@/components/animated-section";
import { GlobalPresence } from "@/components/pages/home/global-presence";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function AboutPage() {
  const peopleImages = PlaceHolderImages.filter(img => 
    LEADERSHIP_TEAM.some(i => i.imageId === img.id) ||
    BOARD_OF_ADVISORS.some(i => i.imageId === img.id)
  );
  const findImage = (imageId: string) => peopleImages.find(img => img.id === imageId);

  const leadershipFirstRow = LEADERSHIP_TEAM.slice(0, 4);
  const leadershipSecondRow = LEADERSHIP_TEAM.slice(4);

  return (
    <main>
      <section id="our-inspiration" className="relative min-h-screen flex items-center pt-32 justify-start overflow-hidden text-primary">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
          >
              <source src="/videos/core services.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16">
              <AnimatedSection>
                  <div className="text-left">
                      <h1 className="text-4xl md:text-5xl font-normal text-primary">Our Inspiration</h1>
                      <div className="mt-6 text-lg md:text-xl space-y-4 text-left max-w-4xl">
                          <p className="text-foreground/90">PlanckPoint draws inspiration from Max Planck’s groundbreaking theory that identified the smallest measurable unit in the universe, a boundary where classical physics gives way to quantum insight. In the same spirit, we believe that powerful decisions begin with the smallest, most precise signals.</p>
                          <p className="text-foreground/90">The rise of AI has accelerated markets beyond the limits of traditional research, and PlanckPoint exists to close the gap with intelligence built for faster, higher-stakes decisions.</p>
                          <p className="mt-4 text-primary font-semibold">At PlanckPoint, we distil complexity into clarity, delivering insight at the scale where transformation begins.</p>
                      </div>
                  </div>
              </AnimatedSection>
          </div>
      </section>

      <section id="our-philosophy" className="py-20 lg:py-24 bg-white text-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal">Our Guiding Philosophy</h2>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                At Planckpoint, we believe in a pragmatic approach to innovation. Our strategy is simple yet powerful: dedicate 20% of our efforts to pioneering research that pushes boundaries, and channel a focused 80% into robust production that delivers real-world value to our clients today. This balance ensures we remain at the cutting edge while delivering reliable, impactful solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section 
        id="who-we-are" 
        className="py-20 lg:py-24 bg-background text-primary"
      >
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-normal">Who We Are</h2>
              <p className="mt-4 text-muted-foreground text-lg">PlanckPoint is a foresight and intelligence firm built for decision-makers navigating complex markets, technologies, and vendor ecosystems. Using AI-assisted analysis combined with structured expert judgment, we show leaders what is likely to work, what is expected to fail, and why.</p>
              <p className="mt-4 text-muted-foreground text-lg">We go beyond analyst narratives and visual shortcuts, integrating execution signals, delivery risk, and organisational realities into evidence-based decision frameworks.</p>
              <p className="mt-4 text-muted-foreground text-lg">We blend AI-powered analysis with deep strategic thinking to uncover the smallest credible signals that spark the biggest shifts. At our core, we are researchers, analysts, and advisors committed to delivering clarity, credibility, and confidence in every insight we produce.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section 
        id="leadership" 
        className="py-20 lg:py-24 bg-background text-primary"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16 max-w-none">
              <h2 className="text-3xl md:text-4xl font-normal">Our People</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">PlanckPoint is led by experienced researchers, strategists, and practitioners who have worked at the intersection of technology, transformation, and risk. Our team combines deep industry experience with analytical discipline. We understand how decisions are made in boardrooms, how programs fail in delivery, and where execution risk hides long before it becomes visible in outcomes. We work across strategy, technology, procurement, and transformation leadership, bringing perspectives shaped by real accountability and not theoretical models. This allows us to challenge assumptions, test claims, and apply judgment where data alone is insufficient.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipFirstRow.map((member, index) => {
              const image = findImage(member.imageId);
              return (
                <AnimatedSection key={member.name} delay={index * 0.1} className="h-full">
                  <div className="flex flex-col items-center h-full text-center">
                      {image && <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden shrink-0"><Image src={image.imageUrl} alt={member.name} fill className="object-cover" data-ai-hint={image.imageHint} /></div>}
                      <div className="w-full max-w-sm flex flex-col flex-grow">
                          <div className="flex-grow">
                            <h3 className="mt-4 text-xl font-bold text-primary">{member.name}</h3>
                            <p className="text-secondary font-medium">{member.role}</p>
                          </div>
                          <Collapsible className="w-full mt-auto">
                              <CollapsibleTrigger asChild>
                                  <Button variant="link" className="mt-2 p-0">Learn More</Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                  <p className="pt-2 text-muted-foreground text-sm text-left">
                                      {member.bio}
                                  </p>
                              </CollapsibleContent>
                          </Collapsible>
                      </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          {leadershipSecondRow.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4 mx-auto">
              {leadershipSecondRow.map((member, index) => {
                const image = findImage(member.imageId);
                return (
                  <AnimatedSection key={member.name} delay={(index + leadershipFirstRow.length) * 0.1} className="h-full">
                     <div className="flex flex-col items-center h-full text-center">
                        {image && <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden shrink-0"><Image src={image.imageUrl} alt={member.name} fill className="object-cover" data-ai-hint={image.imageHint} /></div>}
                        <div className="w-full max-w-sm flex flex-col flex-grow">
                            <div className="flex-grow">
                              <h3 className="mt-4 text-xl font-bold text-primary">{member.name}</h3>
                              <p className="text-secondary font-medium">{member.role}</p>
                            </div>
                            <Collapsible className="w-full mt-auto">
                                <CollapsibleTrigger asChild>
                                    <Button variant="link" className="mt-2 p-0">Learn More</Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <p className="pt-2 text-muted-foreground text-sm text-left">
                                        {member.bio}
                                    </p>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
          
          <div id="board-mentors" className="mt-24">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-normal text-primary">Our Elite Board Mentors</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Guiding our strategic direction with unparalleled expertise and industry foresight.
                </p>
              </div>
            </AnimatedSection>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4 mx-auto">
              {BOARD_OF_ADVISORS.map((mentor, index) => {
                const image = findImage(mentor.imageId);
                return (
                  <AnimatedSection key={mentor.name} delay={index * 0.1} className="h-full">
                    <div className="flex flex-col items-center h-full text-center">
                        {image && <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden shrink-0"><Image src={image.imageUrl} alt={mentor.name} fill className="object-cover" data-ai-hint={image.imageHint} /></div>}
                        <div className="w-full max-w-sm flex flex-col flex-grow">
                            <div className="flex-grow">
                              <h3 className="mt-4 text-xl font-bold text-primary">{mentor.name}</h3>
                              <p className="text-secondary font-medium">{mentor.role}</p>
                            </div>
                            <Collapsible className="w-full mt-auto">
                                <CollapsibleTrigger asChild>
                                    <Button variant="link" className="mt-2 p-0">Learn More</Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <p className="pt-2 text-muted-foreground text-sm text-left">
                                        {mentor.bio}
                                    </p>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <GlobalPresence />

    </main>
  );
}
