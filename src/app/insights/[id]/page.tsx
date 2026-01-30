import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockResearchData } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButtons } from '@/components/pages/insights/share-buttons';
import { ArrowRight, Download } from 'lucide-react';

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

    return (
        <main className="bg-white text-black">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                <header className="text-left mb-12 max-w-4xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-600">{article.category}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-serif text-gray-900 !leading-tight">{article.title}</h1>
                    <div className="mt-6 text-base text-gray-700 flex items-center flex-wrap">
                        <span>By {article.author.name}</span>
                        <span className="mx-3">|</span>
                        <span>{formatDate(article.publicationDate)}</span>
                    </div>
                </header>
                
                <hr className="mb-12" />

                <div className="grid grid-cols-12 gap-x-8 max-w-6xl mx-auto">
                    <div className="col-span-12 lg:col-span-8 mckinsey-article-body">
                        <div dangerouslySetInnerHTML={{ __html: article.content || ''}} />
                    </div>
                    <aside className="col-span-12 lg:col-span-4">
                        <div className="sticky top-24 space-y-10">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-3">Downloads</h3>
                                {article.pdfUrl && (
                                    <a href={article.pdfUrl} download className="mt-4 flex items-center text-sm text-blue-700 hover:underline">
                                        <Download className="h-4 w-4 mr-2" />
                                        <span>Article</span>
                                    </a>
                                )}
                            </div>
                            <ShareButtons title={article.title} pdfUrl={article.pdfUrl} />
                        </div>
                    </aside>
                </div>
            </div>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Insights</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredInsights.map((insight, index) => {
                            const image = PlaceHolderImages.find(img => img.id === insight.imageId);
                            return (
                             <AnimatedSection key={insight._id} delay={index * 0.1}>
                                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group bg-white border">
                                    <Link href={`/insights/${insight._id}`} className="block h-full flex flex-col">
                                        {image && 
                                            <div className="relative aspect-video overflow-hidden">
                                                <Image src={image.imageUrl} alt={insight.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={image.imageHint} />
                                            </div>
                                        }
                                        <CardHeader>
                                            <Badge variant="outline" className="mb-2 w-fit">{insight.category}</Badge>
                                            <CardTitle className="!text-xl text-gray-900 group-hover:text-blue-700 transition-colors">{insight.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{insight.summary}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <span className="text-sm font-semibold text-blue-700 group-hover:underline flex items-center">Read More <ArrowRight className="ml-2 h-4 w-4" /></span>
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
