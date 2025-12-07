import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    name: "Himanshu Jain",
    initials: "HJ",
    url: "https://himanshujain.me",
    location: "Ontario, CA",
    locationLink: "https://www.google.com/maps/place/Brampton,+ON",
    description:
        "Software Developer & IT Support Technician building practical tools, automations, and backend systems that solve real-world problems.",
    summary:
        "In 2023, I started my Computer Programming & Analysis advanced diploma at Humber Polytechnic. Since then, I've built multiple backend-heavy projects and, in 2025, joined Savaria as an IT Service Desk Technician Intern supporting users across multiple sites. There I troubleshoot Windows and Microsoft 365 issues, manage devices with Intune and Endpoint Central, and document fixes so teams stay productive. On the side, I'm building TeleTools, an advanced Telegram automation toolkit, and a desktop video encoder in JavaFX. These experiences deepen my skills in Java, Python, Spring Boot, FastAPI, RabbitMQ, SQL, and MongoDB while letting me ship things that people actually use.",
    avatarUrl: "/me.jpg",

    skills: [
        "Java",
        "Python",
        "JavaFX",
        "Spring Boot",
        "Spring Security",
        "FastAPI",
        "React",
        "Next.js",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "RabbitMQ",
        "Redis",
        "Docker",
        "Nginx",
        "Git",
        "Windows Server",
        "PowerShell",
        "Intune",
        "Active Directory",
    ],

    navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

    contact: {
        email: "info@himanshujain.me",
        tel: "",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/jain2098/",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/himanshujaininfo/?ref=himanshujain.me",
                icon: Icons.linkedin,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:info@himanshujain.me",
                icon: Icons.email,
                navbar: true,
            },
        },
    },

    work: [
        {
            company: "Savaria Concord Lifts",
            href: "https://savaria.com/",
            badges: [],
            location: "Brampton, ON",
            title: "IT Service Desk Technician Intern",
            logoUrl: "/savaria.png",
            start: "Jun 2025",
            end: "Dec 2025",
            description:
                "Provided first-line IT support for 500+ users across multiple sites, resolving tickets in Freshservice, managing accounts in Active Directory and Microsoft 365, deploying and troubleshooting devices via Intune and Endpoint Central, and documenting solutions to keep teams productive.",
        },
        {
            company: "Amazon",
            href: "https://flex.amazon.ca/",
            badges: [],
            location: "Etobicoke, ON",
            title: "Delivery Driver (Amazon Flex)",
            logoUrl: "/amzn.png",
            start: "Jan 2019",
            end: "Dec 2023",
            description:
                "Delivered packages using the Amazon Flex app for route optimization, tracking, and status updates while ensuring timely deliveries and resolving issues as needed.",
        },
        {
            company: "H & S Toys",
            badges: [],
            href: "#",
            location: "Etobicoke, ON",
            title: "Sales Representative & Technician",
            logoUrl: "/h-and-s-toys.png",
            start: "Jan 2018",
            end: "Dec 2020",
            description:
                "Assisted customers, generated bills, supported shipping and receiving, and provided technical troubleshooting for electronic toys to improve satisfaction.",
        },
        {
            company: "Tim Hortons",
            href: "https://timhortons.ca/",
            badges: [],
            location: "Etobicoke, ON",
            title: "Baker and Front Desk Associate",
            logoUrl: "/tim.png",
            start: "Jan 2020",
            end: "Apr 2020",
            description:
                "Handled front counter and baking operations, managed inventory for baked products, and delivered customer service during busy hours.",
        },
    ],

    education: [
        {
            school: "Humber Polytechnic",
            href: "https://humber.ca/",
            degree: "Computer Programming & Analysis",
            logoUrl: "/humber.png",
            start: "2023",
            end: "2026",
        },
        {
            school: "Humber Polytechnic",
            href: "https://humber.ca/",
            degree: "Business Management",
            logoUrl: "/humber.png",
            start: "2017",
            end: "2018",
        },
    ],

    projects: [
        {
            title: "Advanced Partial Video Encoder",
            href: "#",
            dates: "2025-PRESENT",
            active: true,
            description:
                "Desktop video processing tool built with JavaFX and FFmpeg that analyzes media files, encodes selected segments with AV1, and manages complex encoding workflows through an intuitive UI.",
            technologies: ["Java", "JavaFX", "FFmpeg", "Maven"],
            links: [],
            image: "/video-encoder.png",
            video: "",
        },
        {
            title: "TeleTools",
            href: "#",
            dates: "2025 - PRESENT",
            active: true,
            description:
                "Advanced Telegram automation toolkit that manages multiple user and bot sessions, tracks channels and chats, and runs background tasks using a queue-based backend with Telethon and RabbitMQ.",
            technologies: ["Python", "Telethon", "OAuth", "RabbitMQ", "Redis", "MongoDB", "FastAPI", "Docker"],
            links: [],
            image: "/teletools.png",
            video: "",
        },
        {
            title: "WiseRate",
            href: "https://Mortgage.himanshujain.me",
            dates: "Dec 2024",
            active: true,
            description:
                "Comprehensive mortgage calculator web app with secure authentication, automated amortization schedules, and PDF downloads, built with Spring Boot and React.",
            technologies: [
                "Spring Boot",
                "Java",
                "Spring Security",
                "Hibernate",
                "SQL",
                "React",
                "Heroku",
                "PDF Generation",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://Mortgage.himanshujain.me",
                    icon: <Icons.globe className='size-3' />,
                },
            ],
            image: "/wiserate.png",
            video: "",
        },
        {
            title: "ImgShare",
            href: "https://image.himanshujain.me/",
            dates: "July 2024",
            active: true,
            description:
                "Cross-browser image-sharing platform with upload, share, delete features, offline support via IndexedDB, and responsive dark/light mode UI.",
            technologies: ["React.js", "Node.js", "IndexedDB", "Tailwind CSS", "Dark/Light Mode"],
            links: [
                {
                    type: "Website",
                    href: "https://image.himanshujain.me/",
                    icon: <Icons.globe className='size-3' />,
                },
            ],
            image: "/imgshare.png",
            video: "",
        },
        {
            title: "WP MoviesHub",
            href: "https://Movies.himanshujain.me",
            dates: "June 2024",
            active: true,
            description:
                "WordPress-based movie hub leveraging TMDB API for real-time data and responsive design with Tailwind CSS.",
            technologies: ["WordPress", "TMDB API", "Tailwind CSS"],
            links: [
                {
                    type: "Website",
                    href: "https://Movies.himanshujain.me",
                    icon: <Icons.globe className='size-3' />,
                },
            ],
            image: "/wpmovieshub.jpg",
            video: "",
        },
        {
            title: "ResumeBuilder",
            href: "https://Resume.himanshujain.me",
            dates: "Feb 2024",
            active: true,
            description:
                "Fully responsive resume builder app with dynamic routing, CRUD operations, and RESTful API integration.",
            technologies: ["React.js", "Node.js", "RESTful APIs"],
            links: [
                {
                    type: "Website",
                    href: "https://Resume.himanshujain.me",
                    icon: <Icons.globe className='size-3' />,
                },
            ],
            image: "/resumebuilder.jpg",
            video: "",
        },
        {
            title: "MovieExplorer",
            href: "",
            dates: "Feb 2024",
            active: true,
            description:
                "React Native-based Android app utilizing TMDB API for real-time movie data and search functionality.",
            technologies: ["React Native", "TMDB API"],
            links: [
                {
                    type: "Website",
                    href: "https://Movies.himanshujain.me",
                    icon: <Icons.globe className='size-3' />,
                },
            ],
            image: "/movieexplorer.jpg",
            video: "",
        },
        {
            title: "Drake Immigration",
            href: "https://immigration.himanshujain.me",
            dates: "Jan 2024",
            active: true,
            description:
                "Static business website built on WordPress with custom HTML, CSS, JavaScript, and PHP for easy navigation and appointment capabilities.",
            technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
            links: [
                {
                    type: "Website",
                    href: "https://immigration.himanshujain.me",
                    icon: <Icons.globe className='size-3' />,
                },
            ],
            image: "/drakeimmigration.jpg",
            video: "",
        },
    ],
} as const;
