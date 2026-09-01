import { Icons } from "@/components/icons";
import { 
    HomeIcon, 
    UserIcon, 
    SparklesIcon, 
    BriefcaseIcon, 
    GraduationCapIcon, 
    FolderGit2Icon
} from "lucide-react";

export const DATA = {
    name: "Himanshu Jain",
    initials: "HJ",
    url: "https://himanshujain.me",
    location: "Toronto, ON",
    locationLink: "https://www.google.com/maps/place/Toronto,+ON",
    description:
        "Software Developer & IT Support Technician building practical tools, AI agent automations (MCP), and full-stack systems.",
    summary:
        "Computer Programming & Analysis graduate from Humber College with hands-on experience in full-stack engineering (Python, React, PostgreSQL, ASP .NET, Spring Boot) and AI-integrated tooling with FastMCP. At **Savaria Concord Lifts**, I provided comprehensive on-site IT support, resolved **800+ tickets**, engineered an **Excel VBA & live ERP SQL dashboard** that cut retrieval time from minutes to under 3 seconds, and scripted a **PowerShell mass deployment across 50+ workstations**.",
    avatarUrl: "/me_v1.jpg",

    // Categorized skills for structured 2x2 layout
    skillsByCategory: {
        "Languages & Frameworks": [
            "Python",
            "Java",
            "TypeScript",
            "C#",
            "React",
            "Next.js",
            "Spring Boot",
            "ASP .NET Core",
            "FastAPI",
            "Node.js",
            "Tailwind CSS",
            "JavaFX",
        ],
        "AI & Automation": [
            "FastMCP",
            "MCP (Model Context Protocol)",
            "Claude Code",
            "Agent Workflows",
            "RAG",
            "PowerShell",
            "Bash Scripting",
            "Linux Cron",
            "rclone",
            "Excel VBA",
        ],
        "Databases & Cloud": [
            "PostgreSQL",
            "MySQL",
            "SQLite",
            "MongoDB",
            "Redis",
            "RabbitMQ",
            "Entity Framework Core",
            "Docker",
            "AWS (EC2)",
        ],
        "IT & Systems Admin": [
            "Active Directory",
            "Microsoft Entra",
            "Microsoft Intune",
            "Microsoft 365 / Exchange",
            "Windows Server (RDP)",
            "Linux CLI",
            "Freshservice",
            "RustDesk / AnyDesk",
        ],
    },

    skills: [
        "Python",
        "Java",
        "TypeScript",
        "C#",
        "React",
        "Next.js",
        "FastAPI",
        "Spring Boot",
        "ASP .NET Core",
        "FastMCP",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Docker",
        "AWS",
        "PowerShell",
        "Active Directory",
        "Microsoft Intune",
    ],

    navbar: [
        { href: "/#hero", icon: HomeIcon, label: "Home" },
        { href: "/#about", icon: UserIcon, label: "About" },
        { href: "/#skills", icon: SparklesIcon, label: "Skills" },
        { href: "/#work", icon: BriefcaseIcon, label: "Work" },
        { href: "/#education", icon: GraduationCapIcon, label: "Education" },
        { href: "/#projects", icon: FolderGit2Icon, label: "Projects" },
    ],

    contact: {
        email: "info@himanshujain.me",
        tel: "647-575-2098",
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

    // TWO DISTINCT ON-SITE ROLES PRESERVED
    work: [
        {
            company: "Savaria Concord Lifts Inc",
            href: "https://savaria.com/",
            badges: ["On-Site"],
            location: "Brampton, ON",
            title: "IT Support Technician",
            logoUrl: "/savaria.png",
            start: "Jan 2026",
            end: "July 2026",
            description:
                "- Built an unassigned Excel VBA dashboard integrating live ERP SQL queries via ODBC into a single interface, cutting data lookup time from minutes to under 3 seconds.\n- Scripted a PowerShell-based mass deployment for an Avaya softphone upgrade across 50+ workstations with network drive staging, silent install, and per-user configuration.\n- Resolved 800+ software, hardware, and network tickets across multiple facility locations with remote and on-site support in Freshservice.\n- Administered Active Directory and Microsoft Intune for user provisioning, group policy updates, and security policy enforcement.\n- Performed hardware upgrades (RAM/SSD), crash data recovery, and vendor repair coordination (e.g. Lenovo).",
        },
        {
            company: "Savaria Concord Lifts Inc",
            href: "https://savaria.com/",
            badges: ["On-Site", "Internship"],
            location: "Brampton, ON",
            title: "IT Help Desk Technician Intern",
            logoUrl: "/savaria.png",
            start: "June 2025",
            end: "Dec 2025",
            description:
                "- Provided first-line, on-site IT support for 500+ users across multiple sites, resolving technical tickets in Freshservice.\n- Managed user accounts, onboarding, password resets, and access permissions in Active Directory and Microsoft 365 (Exchange, Teams, OneDrive).\n- Deployed and staged employee laptops, desktops, and Surface devices using Microsoft Intune.\n- Maintained technical documentation and standard operating procedures (SOPs) for hardware and software rollouts.",
        },
    ],

    education: [
        {
            school: "Humber College",
            href: "https://humber.ca/",
            degree: "Computer Programming and Analysis (Co-Op Advanced Diploma)",
            badges: ["Co-Op"],
            logoUrl: "/humber.png",
            start: "Jan 2023",
            end: "Aug 2026",
            description:
                "**Relevant Coursework:** Data Structures & Algorithms, Database Design & SQL, Networking Essentials, Operating Systems, Machine Learning, Robotic Process Automation (RPA), ASP .NET Web Development, QA & Troubleshooting.",
        },
        {
            school: "Humber College",
            href: "https://humber.ca/",
            degree: "Business Management",
            logoUrl: "/humber.png",
            start: "2017",
            end: "2018",
            description:
                "Foundations in business administration, professional communication, and operations management.",
        },
    ],

    certifications: [
        {
            title: "AWS Academy Graduate - Cloud Security Foundations",
            issuer: "Amazon Web Services (AWS)",
            date: "Aug 2026",
            logoUrl: "/amzn.png",
            href: "https://www.credly.com/badges/12abedd0-9feb-4e2d-a7d8-063b7f28500f/print",
            description:
                "Training in AWS cloud security architecture, IAM access management, encryption, compliance standards, and automated threat monitoring.",
        },
    ],

    projects: [
        {
            title: "AI Tool Server (MCP)",
            category: "AI & Automation",
            href: "https://github.com/Jain2098/MCP-Python-Project",
            dates: "Aug 2026",
            active: true,
            description:
                "Multi-server agent tooling framework built with FastMCP. Implemented 3 tool-selection strategies (query routing, keyword pre-filtering, two-stage LLM) to eliminate tool sprawl across servers. Deployed to AWS EC2 over Server-Sent Events (SSE).",
            technologies: ["Python", "FastMCP", "LLM", "AWS EC2", "SSE", "REST APIs"],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/Jain2098/MCP-Python-Project",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "EquipTrack",
            category: "Full Stack & Web",
            href: "https://github.com/Jain2098/EquipTrack-CollegeProject",
            dates: "Aug 2026",
            active: true,
            description:
                "Enterprise IT asset tracking web application built with ASP .NET Core MVC and Entity Framework Core. Features automated warranty alerts, category breakdowns, and end-of-life recycling logs.",
            technologies: ["C#", "ASP .NET Core", "Entity Framework", "SQLite", "Bootstrap"],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/Jain2098/EquipTrack-CollegeProject",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "/equiptrack.jpg",
            video: "",
        },
        {
            title: "WiseRate",
            category: "Full Stack & Web",
            href: "https://Mortgage.himanshujain.me",
            dates: "Dec 2024",
            active: true,
            description:
                "Team-based mortgage calculator web app with a Spring Boot backend, relational data handling, automated amortization schedule calculation, downloadable PDF generation, and React frontend.",
            technologies: ["Spring Boot", "Java", "Spring Security", "React", "SQL", "Heroku"],
            links: [
                {
                    type: "Website",
                    href: "https://Mortgage.himanshujain.me",
                    icon: <Icons.globe className='size-3' />,
                },
                {
                    type: "Frontend",
                    href: "https://github.com/WiseRate/frontend",
                    icon: <Icons.github className='size-3' />,
                },
                {
                    type: "Backend",
                    href: "https://github.com/WiseRate/backend",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "/wiserate.png",
            video: "",
        },
        {
            title: "ImgShare",
            category: "Full Stack & Web",
            href: "https://image.himanshujain.me/",
            dates: "July 2024",
            active: true,
            description:
                "High-performance image-sharing platform featuring fast uploads, multi-platform embed links, and offline caching via IndexedDB that cut bandwidth usage by 90% while achieving a 95+ Lighthouse score.",
            technologies: ["React.js", "Node.js", "IndexedDB", "Tailwind CSS"],
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
            title: "System Task Automation Scripts",
            category: "Systems & Tools",
            href: "#",
            dates: "2025 - Present",
            active: true,
            description:
                "Automated PowerShell, VBScript, and Bash tools for system maintenance, cache clearing, and unattended daily Linux database backups synchronized to remote cloud storage via rclone.",
            technologies: ["PowerShell", "Bash", "Linux Cron", "rclone", "VBScript", "Windows Batch"],
            links: [
                {
                    type: "GitHub",
                    href: "#",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "IPv4 Subnet Calculator",
            category: "Systems & Tools",
            href: "https://github.com/Jain2098/python-subnet-gui",
            dates: "Dec 2024",
            active: true,
            description:
                "Python desktop utility applying algorithmic logic to real-time IPv4 subnet analysis, CIDR notation, network/broadcast addresses, and host range calculations.",
            technologies: ["Python", "Tkinter", "Networking", "IPv4/CIDR"],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/Jain2098/python-subnet-gui",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "TeleTools",
            category: "AI & Automation",
            href: "#",
            dates: "2025 - Present",
            active: true,
            description:
                "Advanced Telegram automation toolkit managing multi-session bots, chat tracking, and asynchronous queue workers using Telethon, RabbitMQ, Redis, MongoDB, and FastAPI.",
            technologies: ["Python", "Telethon", "FastAPI", "RabbitMQ", "Redis", "MongoDB", "Docker"],
            links: [
                {
                    type: "GitHub",
                    href: "#",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "/teletools.png",
            video: "",
        },
        {
            title: "Advanced Partial Video Encoder",
            category: "Mobile & Desktop",
            href: "#",
            dates: "2025 - Present",
            active: true,
            description:
                "Desktop video processing tool built with JavaFX and FFmpeg that analyzes media streams, encodes partial segment cuts using AV1 codec, and manages multi-threaded encoding queues.",
            technologies: ["Java", "JavaFX", "FFmpeg", "Maven"],
            links: [
                {
                    type: "GitHub",
                    href: "#",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "/video-encoder.png",
            video: "",
        },
        {
            title: "MovieExplorer",
            category: "Mobile & Desktop",
            href: "https://github.com/Jain2098/MyMoviesApp_Expo",
            dates: "Feb 2024",
            active: true,
            description:
                "React Native Android mobile application leveraging TMDB API for live movie discovery, genre browsing, and real-time query searching with responsive mobile UI.",
            technologies: ["React Native", "Android", "TMDB API", "JavaScript"],
            links: [
                {
                    type: "GitHub",
                    href: "https://github.com/Jain2098/MyMoviesApp_Expo",
                    icon: <Icons.github className='size-3' />,
                },
            ],
            image: "/movieexplorer.jpg",
            video: "",
        },
        {
            title: "WP MoviesHub",
            category: "Full Stack & Web",
            href: "https://Movies.himanshujain.me",
            dates: "June 2024",
            active: true,
            description:
                "WordPress-based movie discovery portal integrating TMDB API for real-time media metadata, built with custom templates and Tailwind CSS styling.",
            technologies: ["WordPress", "PHP", "TMDB API", "Tailwind CSS"],
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
    ],
} as const;
