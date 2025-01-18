import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Jain",
  initials: "HJ",
  url: "https://himanshujain.me",
  location: "Ontario, CA",
  locationLink: "https://www.google.com/maps/place/Brampton,+ON",
  description: "Software Developer passionate about building projects, learning new technologies, and solving real-world problems.",
  summary:
    "In 2023, I started pursuing my Computer Programming & Analysis advanced diploma at Humber Polytechnic. While in college, I have built several projects and am currently working on TeleTools, an advanced Telegram management script. Previously, I completed projects like WiseRate, a comprehensive mortgage calculator. These experiences have helped me explore backend development with technologies like Java, Python, Spring Boot, FastAPI, RabbitMQ, Redis, SQL, and MongoDB. I enjoy solving real-world problems through code, collaborating in teams, and constantly learning to grow as a developer.",
  avatarUrl: "/me.jpg",
  skills: [
    "Java", 
    "Python", 
    "React", 
    "FastAPI", 
    "React Native", 
    "SpringBoot", 
    "SpringSecurity", 
    "SQL", 
    "MongoDB", 
    "RabbitMQ", 
    "Redis",
    "Nginx",
    "Heroku",
    "Windows Server"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "info@himanshujain.me",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jain2098/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        // refer as its from portfolio site
        url: "https://www.linkedin.com/in/himanshujaininfo/?ref=portfolio",
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
      company: "Amazon",
      href: "https://flex.amazon.ca/",
      badges: [],
      location: "Etobicoke",
      title: "Flex Driver",
      logoUrl: "/amzn.png",
      start: "Jan 2019",
      end: "Dec 2023",
      description:
        "Efficiently delivered packages to customers using the Amazon Flex app for route optimization, tracking, and status updates while ensuring timely, accurate deliveries and maintaining communication with support to resolve any delivery issues as needed.",
    },
    {
      company: "H & S Toys",
      badges: [],
      href: "#",
      location: "Etobicoke",
      title: "Sales Representative",
      logoUrl: "/h-and-s-toys.png",
      start: "Jan 2018",
      end: "Dec 2020",
      description:
        "Assisted customers with product inquiries and provided technical support for electronic toys, quickly resolving issues to enhance customer satisfaction and adapting to a variety of troubleshooting needs.",
    },
    {
      company: "Tim Hortons",
      href: "https://timhortons.ca/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Baker and Front Desk Associate",
      logoUrl: "/tim.png",
      start: "Jan 2020",
      end: "Apr 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
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
      title: "TeleTools",
      href: "#",
      dates: "PRESENT",
      active: true,
      description:
        "Advanced Telegram management SaaS enabling secure OAuth authentication, multi-session handling, and task automation with scalable backend services.",
      technologies: ["Python", "Telethon", "OAuth", "RabbitMQ", "Redis", "MongoDB", "FastAPI", "Docker"],
      links: [
        // {
        //   type: "Website",
        //   href: "#",
        //   icon: <Icons.globe className='size-3' />,
        // },
      ],
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
      technologies: ["Spring Boot", "Java", "Spring Security", "Hibernate", "SQL", "React", "Heroku", "PDF Generation"],
      links: [
        {
          type: "Website",
          href: "https://Mortgage.himanshujain.me",
          icon: <Icons.globe className='size-3' />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
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
      technologies: ["React.js", "Node.js", "IndexedDB", "Tailwind CSS", "Dark/Light Mode", "Cross-Browser Compatibility"],
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
      description: "WordPress-based movie hub leveraging TMDB API for real-time data and responsive design with Tailwind CSS.",
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
      description: "Fully responsive resume builder app with dynamic routing, CRUD operations, and RESTful API integration.",
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
      description: "React Native-based Android app utilizing TMDB API for real-time movie data and search functionality.",
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
