import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, link, image, video, links, className }: Props) {
    return (
        <Card
            className={
                "flex flex-col overflow-hidden border border-border/60 hover:border-border hover:shadow-md transition-all duration-300 ease-out h-full"
            }>
            {/* Media Header (only renders if image or video exists) */}
            {(image || video) && (
                <Link
                    href={href || "#"}
                    className={cn("block cursor-pointer", className)}
                    scroll={false}
                    {...(href && href !== "#" ? { target: "_blank" } : {})}>
                    {video && (
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className='pointer-events-none mx-auto h-40 w-full object-cover object-top'
                        />
                    )}
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={300}
                            className='h-40 w-full overflow-hidden object-cover object-top border-b border-border/40'
                        />
                    )}
                </Link>
            )}

            {!image && (
                <div className='min-h-40 w-full overflow-hidden bg-muted/30 border-b border-border/40 flex items-center justify-center'>
                    <span className='text-sm text-muted-foreground'>No media available</span>
                </div>
            )}

            <CardHeader className='p-4 pb-2'>
                <div className='space-y-1.5'>
                    <div className='flex items-start justify-between gap-2'>
                        <CardTitle className='text-base font-semibold tracking-tight leading-snug'>{title}</CardTitle>
                        <time className='font-sans text-[11px] text-muted-foreground whitespace-nowrap'>{dates}</time>
                    </div>
                    <div className='prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed'>
                        <Markdown>{description}</Markdown>
                    </div>
                </div>
            </CardHeader>

            <CardContent className='mt-auto flex flex-col p-4 pt-2 pb-2'>
                {tags && tags.length > 0 && (
                    <div className='flex flex-wrap gap-1.5'>
                        {tags?.map((tag) => (
                            <span
                                className='px-2 py-0.5 rounded text-[10px] font-medium bg-muted/60 text-muted-foreground border border-border/40'
                                key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>

            <CardFooter className='p-4 pt-1 pb-3'>
                {links && links.length > 0 && (
                    <div className='flex flex-row flex-wrap items-start gap-1.5'>
                        {links?.map((link, idx) =>
                            link?.href && link.href !== "#" ? (
                                <Link href={link.href} key={idx} target='_blank' rel='noreferrer'>
                                    <Badge className='flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-normal'>
                                        {link.icon}
                                        {link.type}
                                    </Badge>
                                </Link>
                            ) : null,
                        )}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
