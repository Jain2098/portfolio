"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Bot, Database, ShieldCheck, Sparkles } from "lucide-react";
import { DATA } from "@/data/resume";

type CategoryKey = keyof typeof DATA.skillsByCategory;

const categoryMeta: Record<
    CategoryKey,
    {
        icon: React.ElementType;
        accent: string;
        badgeColor: string;
        bgGlow: string;
        shortName: string;
    }
> = {
    "Languages & Frameworks": {
        icon: Code2,
        accent: "text-blue-500 dark:text-blue-400",
        badgeColor: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 dark:border-blue-400/20 dark:bg-blue-400/5",
        bgGlow: "from-blue-500/10 via-transparent to-transparent",
        shortName: "Languages & Web",
    },
    "AI & Automation": {
        icon: Bot,
        accent: "text-violet-500 dark:text-violet-400",
        badgeColor: "border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40 dark:border-violet-400/20 dark:bg-violet-400/5",
        bgGlow: "from-violet-500/10 via-transparent to-transparent",
        shortName: "AI & Automation",
    },
    "Databases & Cloud": {
        icon: Database,
        accent: "text-emerald-500 dark:text-emerald-400",
        badgeColor: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 dark:border-emerald-400/20 dark:bg-emerald-400/5",
        bgGlow: "from-emerald-500/10 via-transparent to-transparent",
        shortName: "Databases & Cloud",
    },
    "IT & Systems Admin": {
        icon: ShieldCheck,
        accent: "text-amber-500 dark:text-amber-400",
        badgeColor: "border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40 dark:border-amber-400/20 dark:bg-amber-400/5",
        bgGlow: "from-amber-500/10 via-transparent to-transparent",
        shortName: "IT & Systems",
    },
};

export function SkillsShowcase() {
    const categories = Object.keys(DATA.skillsByCategory) as CategoryKey[];
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey | "All">("All");

    const displayedCategories =
        selectedCategory === "All"
            ? categories
            : categories.filter((cat) => cat === selectedCategory);

    return (
        <div className='w-full space-y-5'>
            {/* Category Filter Pills */}
            <div className='flex flex-wrap items-center justify-start sm:justify-center gap-1.5 p-1 rounded-xl bg-muted/40 border border-border/50 max-w-fit mx-auto'>
                <button
                    type='button'
                    onClick={() => setSelectedCategory("All")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                        selectedCategory === "All"
                            ? "bg-background text-foreground shadow-xs border border-border/80"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}>
                    <Sparkles className='size-3.5 text-primary' />
                    <span>All Skills</span>
                </button>

                {categories.map((category) => {
                    const meta = categoryMeta[category];
                    const Icon = meta.icon;
                    const isActive = selectedCategory === category;
                    return (
                        <button
                            key={category}
                            type='button'
                            onClick={() => setSelectedCategory(category)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                                isActive
                                    ? "bg-background text-foreground shadow-xs border border-border/80"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}>
                            <Icon className={`size-3.5 ${meta.accent}`} />
                            <span>{meta.shortName}</span>
                        </button>
                    );
                })}
            </div>

            {/* Bento Grid Layout */}
            <motion.div
                layout
                className={`grid gap-3.5 ${
                    selectedCategory === "All"
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 max-w-2xl mx-auto"
                }`}>
                <AnimatePresence mode='popLayout'>
                    {displayedCategories.map((category) => {
                        const meta = categoryMeta[category];
                        const Icon = meta.icon;
                        const skills = DATA.skillsByCategory[category];

                        return (
                            <motion.div
                                key={category}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className='group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card/90 to-card/40 p-4.5 shadow-xs hover:border-border transition-all duration-300'>
                                {/* Subtle top-right ambient glow */}
                                <div
                                    className={`absolute -right-8 -top-8 size-24 rounded-full bg-gradient-to-br ${meta.bgGlow} blur-xl opacity-70 group-hover:opacity-100 transition-opacity`}
                                />

                                {/* Card Header */}
                                <div className='flex items-center justify-between gap-2 mb-3.5 relative z-10'>
                                    <div className='flex items-center gap-2.5'>
                                        <div
                                            className={`size-8 rounded-lg flex items-center justify-center border border-border/50 bg-background/80 shadow-xs ${meta.accent}`}>
                                            <Icon className='size-4' />
                                        </div>
                                        <div>
                                            <h3 className='text-sm font-semibold tracking-tight text-foreground'>
                                                {category}
                                            </h3>
                                        </div>
                                    </div>
                                    <span className='text-[11px] font-medium text-muted-foreground/80 px-2 py-0.5 rounded-md bg-muted/50 border border-border/40'>
                                        {skills.length}
                                    </span>
                                </div>

                                {/* Skill Pills */}
                                <div className='flex flex-wrap gap-1.5 relative z-10'>
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium text-foreground/90 border transition-all duration-200 cursor-default hover:scale-[1.03] ${meta.badgeColor}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
