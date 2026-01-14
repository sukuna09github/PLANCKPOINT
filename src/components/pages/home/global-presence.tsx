
import { GLOBAL_OFFICES } from "@/lib/constants";
import { AnimatedSection } from "@/components/animated-section";

export function GlobalPresence() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <div className="mx-auto mb-4 flex items-center justify-center">
                <svg
                    className="h-16 w-16 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.636 9h16.728M3.636 15h16.728M12 2.05v19.9"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.05c-3.14 0-6.14.88-8.68 2.4-1.25.75-2.25 1.75-3.07 2.87M20.75 7.32c-.82-1.12-1.82-2.12-3.07-2.87C15.14 2.93 12.14 2.05 12 2.05"
                    />
                </svg>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Our Global Presence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connecting with clients and talent across the world.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {GLOBAL_OFFICES.map((office) => (
                <div key={office} className="text-center">
                  <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {office}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
