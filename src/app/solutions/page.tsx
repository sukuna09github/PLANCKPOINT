
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PRODUCTS, INDUSTRY_SOLUTIONS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DecipherText } from '@/components/decipher-text';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Product = typeof PRODUCTS[0];

const SolutionsPage: React.FC = () => {
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

  useEffect(() => {
    setLoading(false);
    setIsClient(true);
  }, []);

  // Handle hash-based scrolling when the page loads or hash changes
  useEffect(() => {
    if (loading) return;

    const hash = window.location.hash.slice(1); // Remove the '#' character
    if (hash) {
        const product = PRODUCTS.find(p => p.id === hash);
        if (product) {
            setSelectedProduct(product);
        }
      const element = document.getElementById('solutions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 2xl:px-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="z-10"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline text-primary mb-6 leading-tight">
                Strategic Intelligence Systems
              </h1>
              <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our capabilities are designed to provide clarity and drive growth. Explore the systems we've engineered to address the distinct challenges of modern enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section 
        id="solutions" 
        className="py-16 md:py-24 overflow-hidden bg-background text-primary"
      >
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative">
          <LayoutGroup>
             <div className={cn("grid grid-cols-1 gap-8", selectedProduct && "md:grid-cols-2")}>
                <motion.div layout="position">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl font-headline font-normal text-primary mb-6">Solutions by Industry</h2>
                        <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
                            Our product suite is engineered to address the distinct challenges of various business domains, from high-level strategy to on-the-ground operations.
                        </p>
                    </AnimatedSection>
        
                    <Tabs defaultValue={INDUSTRY_SOLUTIONS[0].id} className="w-full">
                        <AnimatedSection>
                            <TabsList className="flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-transparent p-0 h-auto">
                                {INDUSTRY_SOLUTIONS.map(category => (
                                    <TabsTrigger key={category.id} value={category.id} className="text-lg font-medium text-muted-foreground data-[state=active]:text-primary p-2 bg-transparent shadow-none border-0 focus:ring-0 focus:outline-none data-[state=active]:shadow-[inset_0_-2px_0_0_hsl(var(--primary))] rounded-none">
                                        {category.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </AnimatedSection>
        
                        {INDUSTRY_SOLUTIONS.map(category => {
                            const categoryImage = findProductImage(category.imageId);
                            return (
                                <TabsContent key={category.id} value={category.id} className="mt-8">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="p-8 md:p-12 flex flex-col justify-center min-h-[350px] text-center bg-primary/5 rounded-lg">
                                            <h3 className="text-2xl font-bold text-primary mb-3">{category.name}</h3>
                                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{category.description}</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                                                {category.products.map(productId => {
                                                    const product = PRODUCTS.find(p => p.id === productId);
                                                    if (!product) return null;
                                                    return (
                                                        <motion.div key={product.id} layoutId={product.id}>
                                                          <button onClick={() => setSelectedProduct(product)} className="block group text-left w-full h-full">
                                                              <div className="bg-background/50 p-4 hover:bg-background transition-colors h-full rounded-md border">
                                                                  <h4 className="font-semibold text-primary group-hover:text-accent">{product.name}</h4>
                                                                  <p className="text-sm text-muted-foreground">{product.description}</p>
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
                    <AnimatePresence mode="wait">
                        {selectedProduct && (
                            <motion.div
                                key={selectedProduct.id}
                                layoutId={selectedProduct.id}
                                className="bg-card border shadow-lg sticky top-24 rounded-lg p-8"
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            >
                                <motion.div
                                    className="relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.2 } }}
                                >
                                    <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors z-20">
                                        <X className="w-5 h-5" />
                                    </button>
                                    <h3 className="text-2xl font-bold mb-2 text-primary">{selectedProduct.name}</h3>
                                    <p className="text-base font-semibold text-accent mb-4">{selectedProduct.tagline}</p>
                                    <div className="text-sm text-muted-foreground space-y-4">
                                        <p>{selectedProduct.detailedDescription}</p>
                                        <div>
                                            <h4 className="font-semibold text-primary mb-2">Key Benefits:</h4>
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

export default SolutionsPage;
