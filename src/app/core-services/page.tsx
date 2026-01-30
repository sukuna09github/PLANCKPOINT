
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Rocket, Palette, Star, Cpu, BrainCircuit } from 'lucide-react';
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
    { text: "Go-to-Market and Market Entry Strategies", icon: Rocket },
    { text: "Competitive Positioning and Differentiation", icon: Palette },
    { text: "Win Strategy Development", icon: Star },
    { text: "Technology and Software Selection", icon: Cpu },
    { text: "AI-Enabled Organizational Transformation", icon: BrainCircuit }
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
                                const Icon = item.icon;
                                return (
                                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <Card className="h-full bg-primary/5 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors duration-300">
                                            <CardContent className="p-8 text-center flex flex-col items-center justify-center min-h-[220px]">
                                                <Icon className="h-10 w-10 text-primary mb-6" />
                                                <p className="text-base font-medium text-foreground flex-grow">{item.text}</p>
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
    

    

    








