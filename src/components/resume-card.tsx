"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
}

export const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    period,
    description,
}: ResumeCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <Link
            href={href || "#"}
            className='block cursor-pointer'
            onClick={handleClick}>
            <Card className='flex p-4 border border-border/60 hover:border-border transition-all duration-200'>
                <div className='flex-none'>
                    <Avatar className='border size-11 m-auto bg-background shrink-0 overflow-hidden shadow-xs'>
                        <AvatarImage src={logoUrl} alt={altText} className='object-cover' />
                        <AvatarFallback className='text-xs font-semibold'>{altText[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className='flex-grow ml-4 items-center flex-col group'>
                    <CardHeader className='p-0 space-y-1'>
                        <div className='flex items-center justify-between gap-x-2'>
                            <h3 className='inline-flex items-center gap-2 font-semibold text-sm sm:text-base leading-tight'>
                                {title}
                                {badges && (
                                    <span className='inline-flex gap-x-1'>
                                        {badges.map((badge, index) => (
                                            <Badge
                                                variant='secondary'
                                                className='text-[10px] font-normal py-0 px-2'
                                                key={index}>
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                )}
                                {description && (
                                    <ChevronRightIcon
                                        className={cn(
                                            "size-3.5 transform opacity-40 transition-all duration-200 group-hover:opacity-100",
                                            isExpanded ? "rotate-90" : "rotate-0"
                                        )}
                                    />
                                )}
                            </h3>
                            <div className='text-xs tabular-nums text-muted-foreground font-medium'>
                                {period}
                            </div>
                        </div>
                        {subtitle && <div className='text-xs font-medium text-muted-foreground'>{subtitle}</div>}
                    </CardHeader>

                    {description && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,
                                height: isExpanded ? "auto" : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className='mt-3 text-xs sm:text-sm'>
                            <div className='prose dark:prose-invert max-w-full text-xs sm:text-sm text-muted-foreground leading-relaxed [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-1.5 [&>p]:leading-relaxed'>
                                <Markdown>{description}</Markdown>
                            </div>
                        </motion.div>
                    )}
                </div>
            </Card>
        </Link>
    );
};

