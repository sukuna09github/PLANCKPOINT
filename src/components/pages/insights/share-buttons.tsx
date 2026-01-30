"use client";

import { Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const XLogo = () => (
    <svg viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L114.011 78.66H302.085L610.136 505.694L657.604 573.588L1083.99 1154.33H895.912L569.165 687.854V687.828Z" fill="currentColor"/>
    </svg>
);

export const ShareButtons = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const pathname = usePathname();
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, [pathname]);

    if (!url) return null;

    const text = `Check out this article: ${title}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`;

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        toast({
            title: "Link Copied!",
            description: "The article URL has been copied to your clipboard.",
        });
    };

    return (
        <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b pb-3">Share</h3>
            <div className="mt-4 flex items-center gap-2">
                <Button asChild variant="ghost" size="icon" title="Share on X">
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                        <XLogo />
                    </a>
                </Button>
                <Button asChild variant="ghost" size="icon" title="Share on LinkedIn">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" onClick={copyLink} title="Copy link">
                    <LinkIcon className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
