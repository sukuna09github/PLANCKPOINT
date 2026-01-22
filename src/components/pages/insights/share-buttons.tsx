"use client";

import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
            <h3 className="font-semibold text-xl mb-4 border-b pb-2">Share</h3>
            <div className="flex items-center gap-2">
                <Button asChild variant="outline" size="icon" title="Share on Twitter">
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                    </a>
                </Button>
                <Button asChild variant="outline" size="icon" title="Share on LinkedIn">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" onClick={copyLink} title="Copy link">
                    <LinkIcon className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
