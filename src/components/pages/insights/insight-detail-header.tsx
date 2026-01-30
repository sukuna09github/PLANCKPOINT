
"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { mockResearchData } from '@/lib/constants';

type Article = typeof mockResearchData[0];

interface InsightDetailHeaderProps {
    article: Article;
}

const formatDate = (dateString: string | Date | undefined) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export function InsightDetailHeader({ article }: InsightDetailHeaderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <div ref={ref} className="relative overflow-hidden mb-12">
            {article.mainImage && (
                <motion.div className="absolute inset-0 z-0" style={{ y }}>
                    <Image
                        src={article.mainImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint="article background"
                    />
                    <div className="absolute inset-0 bg-primary/70" />
                </motion.div>
            )}
            <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-white">
                <header className="text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/80">{article.category}</p>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white !leading-tight">{article.title}</h1>
                    <p className="mt-4 text-lg italic text-white/90 max-w-3xl">{article.summary}</p>
                    <div className="mt-4 text-base text-white/90 flex items-center flex-wrap">
                        <span>By {article.author.name}</span>
                        <span className="mx-3">|</span>
                        <span>{formatDate(article.publicationDate)}</span>
                    </div>
                </header>
            </div>
        </div>
    );
}
