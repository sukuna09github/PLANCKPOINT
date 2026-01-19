
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PRODUCTS, SERVICE_CATEGORIES } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DecipherText } from '@/components/decipher-text';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type Product = typeof PRODUCTS[0];

const CoreServicesPage: React.FC = () => {
  const products = PRODUCTS.slice(0, 6);
  const [loading, setLoading] = useState(true);
  const [animatingHeaders, setAnimatingHeaders] = useState<Set<string>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const findProductImage = (imageId: string) => {
    return PlaceHolderImages.find(p => p.id === imageId);
  };
  
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'solutions-hero-background');
  const introArtImage = PlaceHolderImages.find(p => p.id === 'page-intro-art');
  const servicesBgImage = PlaceHolderImages.find(p => p.id === 'hero-abstract-1');

  const atomicAiProduct = PRODUCTS.find(p => p.id === 'atomicai');
  const beyondQuadrantsProduct = PRODUCTS.find(p => p.id === 'beyondquadrants');
  const thinkQuarkProduct = PRODUCTS.find(p => p.id === 'thinkquark');
  const singleOneProduct = PRODUCTS.find(p => p.id === 'singleone');

  const atomicAiImage = findProductImage('product-atomicai');
  const beyondQuadrantsImage = findProductImage('product-beyondquadrants');
  const thinkQuarkImage = findProductImage('product-thinkquark');
  const singleOneImage = findProductImage('product-singleone');

  useEffect(() => {
    setLoading(false);
  }, []);

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplay || products.length === 0) return;

    autoplayTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 6000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isAutoplay, products.length]);

  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = dragStartX.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
      }
    }
  };

  // Handle hash-based scrolling when the page loads or hash changes
  useEffect(() => {
    if (loading) return;

    const hash = window.location.hash.slice(1); // Remove the '#' character
    if (hash) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const product = PRODUCTS.find(p => p.id === hash);
        if (product) {
            setSelectedProduct(product);
        }
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  // Trigger header animations when cards fade in
  const handleCardFadeIn = (productId: string) => {
    setAnimatingHeaders((prev) => new Set(prev).add(productId));
  };

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 moving-gradient" />
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
                Strategic Capabilities for Modern Enterprises
              </h1>
              <p className="text-lg md:text-xl font-body text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                Innovative solutions designed to bridge the gap between human potential and technological advancement. Explore our suite of solutions crafted for modern enterprises.
              </p>
            </motion.div>

            {/* Right Column - Product Slider */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative h-[24rem] sm:h-[30rem] md:h-[32rem] lg:h-[36rem] z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <AnimatePresence mode="sync">
                {products.map((product, index) => {
                  const position = (index - currentSlide + products.length) % products.length;
                  const isActive = position === 0;
                  const isNext = position === 1;
                  const isPrev = position === products.length - 1;
                  const productImage = findProductImage(product.imageId);

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.8, x: 100 }}
                      animate={{
                        opacity: isActive ? 1 : isNext ? 0.4 : isPrev ? 0.2 : 0,
                        scale: isActive ? 1 : isNext ? 0.92 : isPrev ? 0.85 : 0.8,
                        x: isActive ? 0 : isNext ? 100 : isPrev ? -100 : 100,
                        zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 10 : 0,
                      }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="absolute inset-0 w-full h-full"
                    >
                       <div
                        className={cn(`group w-full h-full overflow-hidden shadow-2xl relative`, isActive ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing')}
                      >
                        {productImage && (
                           <div className="w-full h-full relative overflow-hidden flex-shrink-0">
                            <Image
                              src={productImage.imageUrl}
                              alt={product.name || 'Product'}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={productImage.imageHint}
                            />
                          </div>
                        )}
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                           <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                              {product.name}
                            </h3>
                        </div>

                        <div className="absolute inset-0 bg-black/20 backdrop-blur-md p-6 md:p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                              {product.name}
                            </h3>
                            <p className="text-white/80 text-sm line-clamp-3">
                              {product.description}
                            </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Slide Indicator Dots - Subtle */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
                {products.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoplay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {atomicAiProduct && (
        <section id="atomicai" className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <AnimatedSection>
                        <div>
                            <Badge variant="secondary" className="mb-2">Flagship Product</Badge>
                            <h2 className="text-3xl font-bold text-primary">{atomicAiProduct.name}</h2>
                            <p className="mt-2 text-xl font-semibold text-accent">{atomicAiProduct.tagline}</p>
                            <p className="mt-6 text-lg text-muted-foreground">{atomicAiProduct.detailedDescription}</p>
                            <div className="mt-8">
                                <Button asChild size="lg">
                                    <Link href="/contact">Learn More <ArrowRight className="ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="relative h-full min-h-[450px] overflow-hidden shadow-xl rounded-lg">
                            {atomicAiImage && <Image src={atomicAiImage.imageUrl} alt={atomicAiImage.description} fill className="object-cover" data-ai-hint={atomicAiImage.imageHint} />}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
      )}

      {beyondQuadrantsProduct && (
        <section id="beyondquadrants" className="py-20 lg:py-24 bg-primary/5">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <AnimatedSection delay={0.2} className="md:order-2">
                        <div>
                            <Badge variant="secondary" className="mb-2">Evaluation Framework</Badge>
                            <h2 className="text-3xl font-bold text-primary">{beyondQuadrantsProduct.name}</h2>
                            <p className="mt-2 text-xl font-semibold text-accent">{beyondQuadrantsProduct.tagline}</p>
                            <p className="mt-6 text-lg text-muted-foreground">{beyondQuadrantsProduct.detailedDescription}</p>
                            <div className="mt-8">
                                <Button asChild size="lg">
                                    <Link href="/contact">Learn More <ArrowRight className="ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="md:order-1">
                        <div className="relative h-full min-h-[450px] overflow-hidden shadow-xl rounded-lg">
                            {beyondQuadrantsImage && <Image src={beyondQuadrantsImage.imageUrl} alt={beyondQuadrantsImage.description} fill className="object-cover" data-ai-hint={beyondQuadrantsImage.imageHint} />}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
      )}
      
      {thinkQuarkProduct && (
        <section id="thinkquark" className="py-20 lg:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <AnimatedSection>
                        <div>
                            <Badge variant="secondary" className="mb-2">Quantum-Inspired Computing</Badge>
                            <h2 className="text-3xl font-bold text-primary">{thinkQuarkProduct.name}</h2>
                            <p className="mt-2 text-xl font-semibold text-accent">{thinkQuarkProduct.tagline}</p>
                            <p className="mt-6 text-lg text-muted-foreground">{thinkQuarkProduct.detailedDescription}</p>
                            <div className="mt-8">
                                <Button asChild size="lg">
                                    <Link href="/contact">Learn More <ArrowRight className="ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="relative h-full min-h-[450px] overflow-hidden shadow-xl rounded-lg">
                            {thinkQuarkImage && <Image src={thinkQuarkImage.imageUrl} alt={thinkQuarkImage.description} fill className="object-cover" data-ai-hint={thinkQuarkImage.imageHint} />}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
      )}

      {singleOneProduct && (
        <section id="singleone" className="py-20 lg:py-24 bg-primary/5">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <AnimatedSection delay={0.2} className="md:order-2">
                        <div>
                            <Badge variant="secondary" className="mb-2">Unified Intelligence</Badge>
                            <h2 className="text-3xl font-bold text-primary">{singleOneProduct.name}</h2>
                            <p className="mt-2 text-xl font-semibold text-accent">{singleOneProduct.tagline}</p>
                            <p className="mt-6 text-lg text-muted-foreground">{singleOneProduct.detailedDescription}</p>
                            <div className="mt-8">
                                <Button asChild size="lg">
                                    <Link href="/contact">Learn More <ArrowRight className="ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="md:order-1">
                        <div className="relative h-full min-h-[450px] overflow-hidden shadow-xl rounded-lg">
                            {singleOneImage && <Image src={singleOneImage.imageUrl} alt={singleOneImage.description} fill className="object-cover" data-ai-hint={singleOneImage.imageHint} />}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
      )}
      
      <section 
        id="services" 
        className="py-16 md:py-24 overflow-hidden fixed-bg-section"
        style={{ backgroundImage: `url(${servicesBgImage?.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative">
          <LayoutGroup>
            <div className={cn("grid grid-cols-1 gap-8 transition-all duration-500", selectedProduct && "md:grid-cols-2")}>
                
                <motion.div layout="position">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl font-headline font-normal text-primary-foreground mb-6">Our Services</h2>
                        <p className="text-lg font-body text-primary-foreground/80 max-w-3xl mx-auto">
                            We offer a range of services designed to provide strategic clarity and drive impactful results for your organization.
                        </p>
                    </AnimatedSection>
    
                    <Tabs defaultValue={SERVICE_CATEGORIES[0].id} className="w-full">
                        <AnimatedSection>
                            <TabsList className="flex items-center justify-center gap-8 bg-transparent p-0 h-auto">
                                {SERVICE_CATEGORIES.map(category => (
                                    <TabsTrigger key={category.id} value={category.id} className="text-lg font-medium text-white/70 data-[state=active]:text-white p-2 bg-transparent shadow-none border-0 focus:ring-0 focus:outline-none data-[state=active]:shadow-[inset_0_-2px_0_0_white] rounded-none">
                                        {category.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </AnimatedSection>
    
                        {SERVICE_CATEGORIES.map(category => {
                            return (
                                <TabsContent key={category.id} value={category.id} className="mt-8">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="p-8 md:p-12 flex flex-col justify-center min-h-[350px] text-center bg-black/20 rounded-lg">
                                            <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                                            <p className="text-white/70 mb-6 max-w-2xl mx-auto">{category.description}</p>
                                            <p className="font-semibold text-white mb-2">Relevant Products:</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                                                {category.products.map(productId => {
                                                    const product = PRODUCTS.find(p => p.id === productId);
                                                    if (!product) return null;
                                                    return (
                                                        <motion.div key={product.id} layoutId={product.id}>
                                                          <button onClick={() => setSelectedProduct(product)} className="block group text-left w-full h-full">
                                                              <div className="bg-white/5 p-4 hover:bg-white/10 transition-colors h-full rounded-md">
                                                                  <h4 className="font-semibold text-white group-hover:text-accent">{product.name}</h4>
                                                                  <p className="text-sm text-white/70">{product.description}</p>
                                                              </div>
                                                          </button>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            )
                        })}
                    </Tabs>
                </motion.div>

                <div className="relative">
                    <AnimatePresence>
                        {selectedProduct && (
                            <motion.div
                                className="sticky top-24"
                            >
                                <motion.div
                                    layoutId={selectedProduct.id}
                                    className="premium-glass-card"
                                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
                                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                        className="relative z-10"
                                    >
                                        <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20">
                                            <X className="w-6 h-6" />
                                        </button>
                                        <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                                        <p className="text-base font-semibold text-accent mb-4">{selectedProduct.tagline}</p>
                                        <div className="text-sm text-white/80 space-y-4">
                                            <p>{selectedProduct.detailedDescription}</p>
                                            <div>
                                                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                                                <ul className="list-disc list-inside space-y-1">
                                                    {selectedProduct.keyBenefits.split('\n').map((benefit, i) => (
                                                        <li key={i}>{benefit}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4">
                                                <Link href="/contact" className="font-semibold text-accent hover:underline">
                                                    Contact us to learn more &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
          </LayoutGroup>
        </div>
      </section>
    </div>
  );
};

export default CoreServicesPage;
