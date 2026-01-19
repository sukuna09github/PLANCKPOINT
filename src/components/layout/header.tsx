
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

import { NAV_LINKS, PRODUCTS, mockResearchData } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const latestInsight = mockResearchData[0];
  const insightLinks = [
    { title: "Thoughts", href: "/insights#thoughts", description: "Forward-looking perspectives and speculative analyses." },
    { title: "Concepts", href: "/insights#concepts", description: "Exploring foundational technologies and frameworks." },
    { title: "Ideas", href: "/insights#ideas", description: "Innovative strategies for the evolving business landscape." },
    { title: "All Insight Articles", href: "/insights#insight-articles", description: "Browse our full collection of articles." },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-[120rem] items-center justify-between px-6 sm:px-8 lg:px-16">
        <Logo />
        
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(navigationMenuTriggerStyle(), pathname === "/" ? "text-primary" : "text-muted-foreground", "bg-transparent text-lg")}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(pathname.startsWith("/core-services") && "text-primary", "bg-transparent text-lg")}>
                  Core Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid md:grid-cols-[1fr_300px] gap-8 p-6 w-[800px] lg:w-[900px]">
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-4">
                        <Link href="/core-services" className="flex items-center hover:underline">
                          Core Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {PRODUCTS.map((product) => (
                          <ListItem
                            key={product.name}
                            href={`/core-services#${product.id}`}
                            title={product.name}
                          >
                            {product.tagline}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-md flex flex-col justify-center">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Featured</h4>
                      <div>
                        <h5 className="text-base font-semibold mb-2 text-foreground">{PRODUCTS[0].name}</h5>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{PRODUCTS[0].description}</p>
                        <Link href={`/core-services#${PRODUCTS[0].id}`} className="text-sm font-semibold text-primary hover:underline">
                          Learn more &rarr;
                        </Link>
                      </div>
                      <hr className="my-4 border-border"/>
                       <div>
                        <h5 className="text-base font-semibold mb-2 text-foreground">{PRODUCTS[1].name}</h5>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{PRODUCTS[1].description}</p>
                        <Link href={`/core-services#${PRODUCTS[1].id}`} className="text-sm font-semibold text-primary hover:underline">
                          Learn more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(pathname.startsWith("/insights") && "text-primary", "bg-transparent text-lg")}>
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                   <div className="grid md:grid-cols-[1fr_300px] gap-8 p-6 w-[700px] lg:w-[800px]">
                     <div>
                       <h3 className="text-lg font-medium text-primary mb-4">
                        <Link href="/insights" className="flex items-center hover:underline">
                          Insights
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </h3>
                       <ul className="grid grid-cols-2 gap-3">
                        {insightLinks.map(link => (
                           <ListItem key={link.title} href={link.href} title={link.title}>
                            {link.description}
                           </ListItem>
                        ))}
                      </ul>
                     </div>
                      <div className="bg-muted/50 p-6 rounded-md flex flex-col justify-center">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Featured Insight</h4>
                        <h5 className="text-base font-semibold mb-2 text-foreground">{latestInsight.title}</h5>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{latestInsight.summary}</p>
                        <Link href={`/insights#insight-articles`} className="text-sm font-semibold text-primary hover:underline">
                          Read more &rarr;
                        </Link>
                      </div>
                   </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

               <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(navigationMenuTriggerStyle(), pathname === "/about" ? "text-primary" : "text-muted-foreground", "bg-transparent text-lg")}
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="brand-outline">
                <Link href="/contact">Contact Us</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Logo />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col p-4 mt-4 text-lg font-medium">
                  <Link href="/" onClick={() => setIsOpen(false)} className={cn("py-2", pathname === "/" ? "text-primary" : "text-foreground")}>Home</Link>
                  
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="core-services" className="border-b-0">
                      <AccordionTrigger className={cn("py-2 text-lg font-medium hover:no-underline justify-between", pathname.startsWith("/core-services") ? "text-primary" : "text-foreground")}>
                        <Link href="/core-services" onClick={() => setIsOpen(false)} className="flex-1 text-left">Core Services</Link>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-6 pt-2">
                          {PRODUCTS.map((product) => (
                            <Link key={product.id} href={`/core-services#${product.id}`} onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="insights" className="border-b-0">
                      <AccordionTrigger className={cn("py-2 text-lg font-medium hover:no-underline justify-between", pathname.startsWith("/insights") ? "text-primary" : "text-foreground")}>
                        <Link href="/insights" onClick={() => setIsOpen(false)} className="flex-1 text-left">Insights</Link>
                      </AccordionTrigger>
                      <AccordionContent>
                         <div className="flex flex-col space-y-2 pl-6 pt-2">
                          {insightLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-base text-muted-foreground hover:text-primary">
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Link href="/about" onClick={() => setIsOpen(false)} className={cn("py-2 text-lg font-medium", pathname === "/about" ? "text-primary" : "text-foreground")}>About Us</Link>
                </nav>
                <div className="mt-auto p-4 border-t">
                  <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
