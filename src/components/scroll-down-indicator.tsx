"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollDownIndicator() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className='flex flex-col items-center justify-center pt-8 cursor-pointer group select-none'
            onClick={scrollToAbout}>
            <span className='text-[11px] font-medium tracking-widest uppercase text-muted-foreground/60 group-hover:text-foreground transition-colors mb-1.5'>
                Scroll to explore
            </span>
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut",
                }}
                className='p-1.5 rounded-full border border-border/60 bg-muted/30 backdrop-blur-xs group-hover:border-primary/50 group-hover:bg-muted/80 transition-all shadow-xs'>
                <ChevronDown className='size-4 text-muted-foreground group-hover:text-primary transition-colors' />
            </motion.div>
        </motion.div>
    );
}

