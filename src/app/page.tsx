import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectFilter } from "@/components/project-filter";
import { ResumeCard } from "@/components/resume-card";
import { ScrollDownIndicator } from "@/components/scroll-down-indicator";
import { SkillsShowcase } from "@/components/skills-showcase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    return (
        <main className='flex flex-col min-h-dvh space-y-12 max-w-3xl mx-auto'>
            {/* HERO */}
            <section
                id='hero'
                className='min-h-screen flex flex-col justify-center items-center text-center py-10 relative'>
                <div className='flex flex-col items-center space-y-4 max-w-xl'>
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <Avatar className='size-30 md:size-50 border-2 border-border/80 shadow-md mb-2'>
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className='size-30 md:size-50' />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                    <div className='flex items-center justify-center gap-2.5 flex-wrap'>
                        <BlurFadeText
                            delay={BLUR_FADE_DELAY}
                            className='text-3xl font-bold tracking-tight sm:text-4xl'
                            yOffset={8}
                            text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                        />
                        <picture className='inline-block size-8 sm:size-9 align-middle'>
                            <source srcSet='/wavinghand.webp' type='image/webp' />
                            <img
                                src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif'
                                alt='👋'
                                width={36}
                                height={36}
                                className='inline-block size-8 sm:size-9 select-none'
                            />
                        </picture>
                    </div>
                    <BlurFadeText
                        className='text-base sm:text-lg text-muted-foreground leading-relaxed'
                        delay={BLUR_FADE_DELAY}
                        text={DATA.description}
                    />
                    <ScrollDownIndicator />
                </div>
            </section>

            {/* ABOUT */}
            <section id='about' className='scroll-mt-12 md:scroll-mt-16'>
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className='text-xl font-bold mb-3'>About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <div className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed'>
                        <Markdown>{DATA.summary}</Markdown>
                    </div>
                </BlurFade>
            </section>

            {/* SKILLS (Interactive Bento Showcase) */}
            <section id='skills' className='scroll-mt-12 md:scroll-mt-16'>
                <div className='flex min-h-0 flex-col gap-y-4'>
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className='text-xl font-bold'>Skills</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <SkillsShowcase />
                    </BlurFade>
                </div>
            </section>

            {/* WORK EXPERIENCE (Both 2 On-Site Roles) */}
            <section id='work' className='scroll-mt-12 md:scroll-mt-16'>
                <div className='flex min-h-0 flex-col gap-y-3.5'>
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className='text-xl font-bold'>Work Experience</h2>
                    </BlurFade>
                    {DATA.work.map((work, id) => (
                        <BlurFade key={`${id}-${work.title}`} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                            <ResumeCard
                                logoUrl={work.logoUrl}
                                altText={work.company}
                                title={work.company}
                                subtitle={work.title}
                                href={work.href}
                                badges={work.badges}
                                period={`${work.start} - ${work.end ?? "Present"}`}
                                description={work.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* EDUCATION */}
            <section id='education' className='scroll-mt-12 md:scroll-mt-16'>
                <div className='flex min-h-0 flex-col gap-y-3.5'>
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className='text-xl font-bold'>Education</h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                        <BlurFade key={id + education.school} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                            <ResumeCard
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                subtitle={education.degree}
                                period={`${education.start} - ${education.end}`}
                                description={education.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section id='certifications' className='scroll-mt-12 md:scroll-mt-16'>
                <div className='flex min-h-0 flex-col gap-y-3.5'>
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <h2 className='text-xl font-bold'>Certifications</h2>
                    </BlurFade>
                    {DATA.certifications.map((cert) => (
                        <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 12}>
                            <ResumeCard
                                href={cert.href}
                                logoUrl={cert.logoUrl}
                                altText={cert.issuer}
                                title={cert.title}
                                subtitle={cert.issuer}
                                period={cert.date}
                                description={cert.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section id='projects' className='scroll-mt-12 md:scroll-mt-16'>
                <div className='space-y-6 w-full py-4'>
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className='flex flex-col items-center justify-center space-y-2 text-center'>
                            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>Featured Projects</h2>
                            <p className='text-muted-foreground text-xs sm:text-sm max-w-[550px]'>
                                A collection of full-stack web applications, AI agent tools, and automation scripts.
                            </p>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ProjectFilter />
                    </BlurFade>
                </div>
            </section>

            {/* CONTACT */}
            <section id='contact' className='scroll-mt-12 md:scroll-mt-16'>
                <div className='grid items-center justify-center gap-3 text-center w-full py-8 border-t border-border/40'>
                    <BlurFade delay={BLUR_FADE_DELAY * 15}>
                        <div className='space-y-2'>
                            <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>Get in Touch</h2>
                            <p className='mx-auto max-w-[500px] text-muted-foreground text-xs sm:text-sm leading-relaxed'>
                                Want to discuss a project or opportunity? Connect with me on{" "}
                                <Link
                                    href={DATA.contact.social.LinkedIn.url}
                                    className='text-foreground underline underline-offset-4 font-medium hover:text-primary'>
                                    LinkedIn
                                </Link>{" "}
                                or send an email to{" "}
                                <Link
                                    href={`mailto:${DATA.contact.email}`}
                                    className='text-foreground underline underline-offset-4 font-medium hover:text-primary'>
                                    {DATA.contact.email}
                                </Link>
                                .
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
