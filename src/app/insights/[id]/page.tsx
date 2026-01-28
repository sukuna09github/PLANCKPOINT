import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockResearchData, LEADERSHIP_TEAM } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButtons } from '@/components/pages/insights/share-buttons';
import { ArrowRight } from 'lucide-react';

export default function InsightDetailPage({ params }: { params: { id: string } }) {
    const article = mockResearchData.find((p) => p._id === params.id);

    if (!article) {
        notFound();
    }

    const featuredInsights = mockResearchData
        .filter(p => p._id !== article._id)
        .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
        .slice(0, 3);

    const formatDate = (dateString: string | Date | undefined) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    
    const authorImage = PlaceHolderImages.find(p => p.id === article.author.avatarImageId);

    return (
        <main className="bg-background">
            <article>
                <header className="relative py-24 md:py-32 lg:py-40">
                    <div className="absolute inset-0">
                        <Image src={article.mainImage} alt={article.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
                    </div>
                    <div className="relative container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
                        <AnimatedSection>
                            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{article.title}</h1>
                            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{article.summary}</p>
                        </AnimatedSection>
                    </div>
                </header>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <AnimatedSection>
                                <div className="prose max-w-none text-lg" dangerouslySetInnerHTML={{ __html: article.content || '' }} />
                            </AnimatedSection>
                        </div>
                        <aside className="lg:col-span-4 relative">
                            <div className="sticky top-24 space-y-8">
                                <AnimatedSection delay={0.1}>
                                    <h3 className="font-semibold text-xl mb-4 border-b pb-2">Author</h3>
                                    <div className="flex items-center gap-4">
                                        {authorImage && (
                                            <Avatar className="h-16 w-16">
                                                <AvatarImage src={authorImage.imageUrl} alt={article.author.name} />
                                                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div>
                                            <p className="font-bold text-lg">{article.author.name}</p>
                                            <p className="text-md text-muted-foreground">{article.author.role}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection delay={0.2}>
                                    <h3 className="font-semibold text-xl mb-4 border-b pb-2">Details</h3>
                                    <div className="space-y-2 text-md">
                                        <p><strong>Published:</strong> {formatDate(article.publicationDate)}</p>
                                        <p><strong>Category:</strong> {article.category}</p>
                                    </div>
                                </AnimatedSection>
                                {article.tags && article.tags.length > 0 && (
                                    <AnimatedSection delay={0.3}>
                                        <h3 className="font-semibold text-xl mb-4 border-b pb-2">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {article.tags.map(tag => (
                                                <Badge key={tag} variant="outline">{tag}</Badge>
                                            ))}
                                        </div>
                                    </AnimatedSection>
                                )}
                                <AnimatedSection delay={0.4}>
                                   <ShareButtons title={article.title} pdfUrl={article.pdfUrl} />
                                </AnimatedSection>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <section className="py-24 bg-primary/5">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-center mb-12">Featured Insights</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredInsights.map((insight, index) => {
                            const image = PlaceHolderImages.find(img => img.id === insight.imageId);
                            return (
                             <AnimatedSection key={insight._id} delay={index * 0.1}>
                                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group bg-white">
                                    <Link href={`/insights/${insight._id}`} className="block h-full flex flex-col">
                                        {image && 
                                            <div className="relative aspect-video overflow-hidden">
                                                <Image src={image.imageUrl} alt={insight.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={image.imageHint} />
                                            </div>
                                        }
                                        <CardHeader>
                                            <Badge variant="secondary" className="mb-2 w-fit">{insight.category}</Badge>
                                            <CardTitle className="!text-xl group-hover:text-primary transition-colors">{insight.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{insight.summary}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <span className="text-sm font-semibold text-primary group-hover:underline flex items-center">Read More <ArrowRight className="ml-2 h-4 w-4" /></span>
                                        </CardFooter>
                                    </Link>
                                </Card>
                             </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
