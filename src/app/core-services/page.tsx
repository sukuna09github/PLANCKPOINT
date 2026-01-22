
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const findProductImage = (imageId: string) => {
    return PlaceHolderImages.find(p => p.id === imageId);
  };
  
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-abstract-1');
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
    setIsClient(true);
  }, []);

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden fixed-bg-section"
        style={{ backgroundImage: heroBgImage ? `url(${heroBgImage.imageUrl})` : 'none' }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-dotted-pattern" />
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
                                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                data-ai-hint={productImage.imageHint}
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent"></div>

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

      {singleOneProduct && (
        <section id="singleone" className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-primary/5 flex items-center justify-center p-12 md:p-16 lg:p-24">
                <AnimatedSection className="max-w-lg">
                    <div>
                        <h2 className="text-3xl font-bold text-primary">{singleOneProduct.name}</h2>
                        <p className="mt-2 text-xl font-semibold text-accent">{singleOneProduct.tagline}</p>
                        <p className="mt-6 text-lg text-muted-foreground">{singleOneProduct.detailedDescription}</p>
                        <div className="mt-8">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-accent">
                                Learn More <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <div className="relative min-h-full w-full">
                {singleOneImage && <Image src={singleOneImage.imageUrl} alt={singleOneImage.description} fill className="object-cover" data-ai-hint={singleOneImage.imageHint} />}
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
