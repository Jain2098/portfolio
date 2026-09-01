"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function ProjectFilter() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "AI & Automation", "Full Stack & Web", "Systems & Tools", "Mobile & Desktop"];

    const filteredProjects =
        selectedCategory === "All"
            ? DATA.projects
            : DATA.projects.filter((p) => p.category === selectedCategory);

    return (
        <div className='w-full space-y-6'>
            {/* Segmented Filter Bar */}
            <div className='flex flex-wrap justify-center gap-1.5 p-1 rounded-xl bg-muted/30 border border-border/50 max-w-fit mx-auto'>
                {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            type='button'
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                                isActive
                                    ? "bg-background text-foreground shadow-xs border border-border/80"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}>
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Filtered Project Grid */}
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-200 mx-auto'>
                {filteredProjects.map((project, id) => (
                    <BlurFade key={`${selectedCategory}-${project.title}`} delay={BLUR_FADE_DELAY * 2 + id * 0.04}>
                        <ProjectCard
                            href={project.href}
                            title={project.title}
                            description={project.description}
                            dates={project.dates}
                            tags={project.technologies}
                            image={project.image}
                            video={project.video}
                            links={project.links}
                        />
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}
