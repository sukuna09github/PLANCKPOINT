
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';

type Product = typeof PRODUCTS[0];

const CoreServicesPage: React.FC = () => {
  const products = PRODUCTS.slice(0, 6);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const findProductImage = (imageId: string) => {
    return PlaceHolderImages.find(p => p.id === imageId);
  };
  
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-abstract-1');

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with 2-Column Layout */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden fixed-bg-section"
        style={{ backgroundImage: heroBgImage ? `url(${heroBgImage.imageUrl})` : 'none' }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-dotted-pattern"></div>
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 2xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="z-10 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline text-white mb-6 leading-tight">
                Strategic Intelligence Systems
              </h1>
              <p className="text-lg md:text-xl font-body text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                Our capabilities are designed to provide clarity and drive growth. Explore the systems we've engineered to address the distinct challenges of modern enterprises.
              </p>
            </motion.div>

            {/* Right Column - Spatial Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative h-[24rem] sm:h-[30rem] md:h-[32rem] lg:h-[40rem] z-10 perspective-1000"
            >
              {isClient && (
                <>
                  <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    {products.map((product, index) => {
                      const position = index - currentSlide;
                      const isActive = index === currentSlide;
                      const productImage = findProductImage(product.imageId);

                      return (
                        <motion.div
                          key={product.id}
                          className="spatial-carousel-panel"
                          animate={{
                            rotateY: position * -30,
                            x: `${position * 20}%`,
                            z: isActive ? 0 : -200,
                            opacity: isActive ? 1 : 0.4,
                            scale: isActive ? 1 : 0.8,
                          }}
                          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                          style={{ zIndex: products.length - Math.abs(position) }}
                        >
                          <motion.div 
                            className="spatial-carousel-card w-full h-full group"
                            whileHover={isActive ? { scale: 1.05, z: 50 } : {}}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          >
                            {productImage && (
                              <Image
                                src={productImage.imageUrl}
                                alt={product.name || 'Product'}
                                fill
                                className="object-cover opacity-100 transition-opacity duration-300"
                                data-ai-hint={productImage.imageHint}
                              />
                            )}

                            <div className="spatial-carousel-content">
                              <motion.h3 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl font-bold text-white mb-2"
                              >
                                {product.name}
                              </motion.h3>
                              <AnimatePresence>
                                {isActive && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
                                    exit={{ opacity: 0, y: -10 }}
                                  >
                                    <p className="text-white/80 text-sm line-clamp-3">
                                      {product.description}
                                    </p>
                                    <Button variant="link" asChild className="text-white p-0 mt-4 font-semibold">
                                      <Link href={`#${product.id}`} onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(product.id)?.scrollIntoView({ behavior: 'smooth' });
                                      }}>
                                        View Details <ArrowRight className="ml-2 w-4 h-4"/>
                                      </Link>
                                    </Button>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Navigation */}
                  <Button variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 -left-16 text-white/70 hover:text-white hover:bg-white/10" onClick={() => setCurrentSlide(s => (s - 1 + products.length) % products.length)}>
                    <ChevronLeft className="w-8 h-8"/>
                  </Button>
                  <Button variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 -right-16 text-white/70 hover:text-white hover:bg-white/10" onClick={() => setCurrentSlide(s => (s + 1) % products.length)}>
                    <ChevronRight className="w-8 h-8"/>
                  </Button>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
                    {products.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to capability ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {atomicAiProduct && (
        <section id="atomicai" className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-background flex items-center justify-center p-12 md:p-16 lg:p-24">
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
            <div className="bg-primary/5 flex items-center justify-center p-12 md:p-16 lg:p-24">
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
            <div className="bg-background flex items-center justify-center p-12 md:p-16 lg:p-24">
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
            <div className="bg-primary/5 flex items-center justify-center p-12 md:p-16 lg:p-24">
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
    

    

    
