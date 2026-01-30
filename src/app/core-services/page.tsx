
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Rocket, Palette, Star, Cpu, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

type Product = typeof PRODUCTS[0];

const CoreServicesPage: React.FC = () => {
  const products = PRODUCTS.slice(0, 6);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const findProductImage = (imageId: string) => {
    return PlaceHolderImages.find(p => p.id === imageId);
  };
  
  const atomicAiProduct = PRODUCTS.find(p => p.id === 'atomicai');
  const beyondQuadrantsProduct = PRODUCTS.find(p => p.id === 'beyondquadrants');
  const thinkQuarkProduct = PRODUCTS.find(p => p.id === 'thinkquark');
  const signaloneProduct = PRODUCTS.find(p => p.id === 'signalone');

  const atomicAiImage = findProductImage('product-atomicai');
  const beyondQuadrantsImage = findProductImage('product-beyondquadrants');
  const thinkQuarkImage = findProductImage('product-thinkquark');
  const signaloneImage = findProductImage('product-signalone');

  useEffect(() => {
    setLoading(false);
    setIsClient(true);
  }, []);

  const researchCapabilities = [
    {
      id: 'vendor',
      title: "Vendor Evaluation & Comparison",
      description: "Rigorous, evidence-based evaluations of technology vendors beyond narrative claims and simplified visual models.",
      className: "bg-accent text-accent-foreground",
      subtext: null
    },
    {
      id: 'landscape',
      title: "Technology Landscape & Usage Analysis",
      description: "Data-driven analysis of technology adoption, usage patterns, and emerging market trends to inform strategy.",
      className: "bg-secondary text-secondary-foreground",
      subtext: null
    },
    {
      id: 'benchmarking',
      title: "Benchmarking",
      description: "Comparative analysis against industry standards to identify opportunities for improvement and competitive advantage.",
      className: "bg-primary text-primary-foreground",
      subtext: "(pricing, user experience, location, operational metrics)"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground/60">Loading solutions...</p>
        </div>
      </div>
    );
  }

  const consultingServices = [
    { 
      text: "Go-to-Market and Market Entry Strategies", 
      imageId: "hero-abstract-1",
      description: "Structured plans that define how a company introduces its offerings to the right customers, channels, and geographies to achieve rapid and sustainable growth."
    },
    { 
      text: "Competitive Positioning and Differentiation", 
      imageId: "hero-abstract-2",
      description: "The process of defining a clear market identity by highlighting unique strengths that set a company apart from competitors."
    },
    { 
      text: "Win Strategy Development", 
      imageId: "hero-abstract-3",
      description: "A focused approach to identifying, pursuing, and securing high-value opportunities through tailored value propositions and competitive tactics."
    },
    { 
      text: "Technology and Software Selection", 
      imageId: "what-we-do-2",
      description: "A systematic evaluation process to choose the right digital tools and platforms that align with business goals, scalability, and operational needs."
    },
    { 
      text: "AI-Enabled Organizational Transformation", 
      imageId: "category-ai",
      description: "The integration of artificial intelligence into business processes, decision-making, and culture to drive efficiency, innovation, and long-term competitive advantage."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative min-h-screen flex items-center justify-start overflow-hidden"
      >
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="/videos/core services.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 2xl:px-32">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="z-10"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline text-primary mb-6 leading-tight max-w-3xl">
                Strategic Intelligence Systems
              </h1>
              <p className="text-lg md:text-xl font-body text-foreground leading-relaxed max-w-3xl">
                Our capabilities are designed to provide clarity and drive growth. Explore the systems we've engineered to address the distinct challenges of modern enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="subtle-divider" />

      <section id="resulting" className="py-20 lg:py-24 bg-white text-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal">Resulting: Where Research Meets Results</h2>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                At Planckpoint, we practice what we call "Resulting" — a consulting approach that combines rigorous research with strategic advisory to deliver tangible outcomes for our clients. We help enterprises navigate disruption and achieve pragmatic transition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <hr className="subtle-divider" />

      <section id="consulting-services" className="py-20 lg:py-24 bg-background text-primary">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-normal">Our Consulting Services</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                        We support clients through critical transformation decisions:
                    </p>
                </div>
                <div className="mt-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">
                            {consultingServices.map((item, index) => {
                                const image = findProductImage(item.imageId);
                                return (
                                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <Card className="h-full overflow-hidden relative group border-0 rounded-lg">
                                            {image && (
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={item.text}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    data-ai-hint={image.imageHint}
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-black/30 backdrop-blur-md group-hover:bg-black/40 transition-colors duration-300" />
                                            <CardContent className="relative z-10 p-8 text-center flex flex-col items-center justify-center min-h-[350px] h-full text-white">
                                                <h3 className="text-lg font-semibold mb-4">{item.text}</h3>
                                                <p className="text-sm text-white/80">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </div>
            </AnimatedSection>
        </div>
      </section>

      <hr className="subtle-divider" />

      <section id="research-capabilities" className="py-20 lg:py-24 bg-white text-primary">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal">Our Research Capabilities</h2>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                We ground every engagement in data-driven analysis:
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-16 max-w-5xl mx-auto flex justify-center">
              <div className="space-y-8 w-full lg:w-1/2">
                {researchCapabilities.map((capability) => (
                  <div key={capability.id} className="group relative">
                    <div className={`${capability.className} p-8 rounded-lg text-center shadow-lg`}>
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                      {capability.subtext && <p className="text-base opacity-90 mt-2">{capability.subtext}</p>}
                    </div>
                    
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-32 w-52 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-apple pointer-events-none z-10 transform group-hover:translate-x-0 translate-x-[-10px]">
                      <svg
                        className="absolute right-full top-1/2 -translate-y-1/2 h-8 w-32 text-gray-400"
                        fill="none"
                        viewBox="0 0 128 32"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M128 16L20 16L0 0" />
                      </svg>
                      <p className="text-base text-left text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <hr className="subtle-divider" />
      
      <section id="resulting-difference" className="py-20 lg:py-24 bg-background text-primary">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-normal">The Resulting Difference</h2>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                We integrate research and consulting in every engagement because serious advisory requires a foundation of facts, data, and evidence. Our "Resulting" approach reflects our commitment to client outcomes rather than billable hours. We focus on the results that matter to your business, bringing coherence to complexity and clarity to transition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {atomicAiProduct && (
        <section id="atomicai" className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-primary/5 flex items-center justify-center p-12 md:p-16 lg:p-24">
                <AnimatedSection className="max-w-lg">
                    <div>
                        <h2 className="text-3xl font-bold text-primary">{atomicAiProduct.name}</h2>
                        <p className="mt-2 text-xl font-semibold text-accent">{atomicAiProduct.tagline}</p>
                        <p className="mt-6 text-lg text-muted-foreground">{atomicAiProduct.detailedDescription}</p>
                        <div className="mt-8">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-accent">
                                Learn More <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="relative min-h-full w-full">
                {atomicAiImage && <Image src={atomicAiImage.imageUrl} alt={atomicAiImage.description} fill className="object-cover" data-ai-hint={atomicAiImage.imageHint} />}
            </div>
        </section>
      )}

      {beyondQuadrantsProduct && (
        <section id="beyondquadrants" className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-background flex items-center justify-center p-12 md:p-16 lg:p-24">
                <AnimatedSection className="max-w-lg">
                    <div>
                        <h2 className="text-3xl font-bold text-primary">{beyondQuadrantsProduct.name}</h2>
                        <p className="mt-2 text-xl font-semibold text-accent">{beyondQuadrantsProduct.tagline}</p>
                        <p className="mt-6 text-lg text-muted-foreground">{beyondQuadrantsProduct.detailedDescription}</p>
                        <div className="mt-8">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-accent">
                                Learn More <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="relative min-h-full w-full">
                {beyondQuadrantsImage && <Image src={beyondQuadrantsImage.imageUrl} alt={beyondQuadrantsImage.description} fill className="object-cover" data-ai-hint={beyondQuadrantsImage.imageHint} />}
            </div>
        </section>
      )}
      
      {thinkQuarkProduct && (
        <section id="thinkquark" className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-primary/5 flex items-center justify-center p-12 md:p-16 lg:p-24">
                <AnimatedSection className="max-w-lg">
                    <div>
                        <h2 className="text-3xl font-bold text-primary">{thinkQuarkProduct.name}</h2>
                        <p className="mt-2 text-xl font-semibold text-accent">{thinkQuarkProduct.tagline}</p>
                        <p className="mt-6 text-lg text-muted-foreground">{thinkQuarkProduct.detailedDescription}</p>
                        <div className="mt-8">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-accent">
                                Learn More <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="relative min-h-full w-full">
                {thinkQuarkImage && <Image src={thinkQuarkImage.imageUrl} alt={thinkQuarkImage.description} fill className="object-cover" data-ai-hint={thinkQuarkImage.imageHint} />}
            </div>
        </section>
      )}

      {signaloneProduct && (
        <section id="signalone" className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-background flex items-center justify-center p-12 md:p-16 lg:p-24">
                <AnimatedSection className="max-w-lg">
                    <div>
                        <h2 className="text-3xl font-bold text-primary">{signaloneProduct.name}</h2>
                        <p className="mt-2 text-xl font-semibold text-accent">{signaloneProduct.tagline}</p>
                        <p className="mt-6 text-lg text-muted-foreground">{signaloneProduct.detailedDescription}</p>
                        <div className="mt-8">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-accent">
                                Learn More <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="relative min-h-full w-full">
                {signaloneImage && <Image src={signaloneImage.imageUrl} alt={signaloneImage.description} fill className="object-cover" data-ai-hint={signaloneImage.imageHint} />}
            </div>
        </section>
      )}
    </div>
  );
};

export default CoreServicesPage;
    

    

    






    


    

    

    

    