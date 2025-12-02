import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export const resumeData = {
    personal: {
        name: "Aagam Gopani",
        role: "Software Developer",
        location: "Toronto, ON",
        email: "gopaniaagam@gmail.com",
        phone: "+1 548 333 9741",
        linkedin: "https://www.linkedin.com/in/aagamgopani/",
        summary: [
            "3+ years designing & delivering high-performance web applications (C#, .NET Core, Angular, AWS, Azure); ML/CV expertise in real-time object detection systems.",
            "Proven Impact: 40% platform outage reduction, 20% API speed improvement, 35% data retrieval optimization, 82% object detection accuracy in production systems.",
            "Cross-functional Leader: Collaborated with product, QA, UX teams; mentored 4+ junior developers; reduced onboarding time by 50%."
        ]
    },
    experience: [
        {
            role: "ML Engineer (Intern)",
            company: "Kevares Autonomous Services",
            location: "Remote, Toronto, ON",
            date: "Jan 2025 - Apr 2025",
            achievements: [
                "Engineered real-time trash detection system (YOLOv11n) for autonomous robots operating in urban environments, achieving mAP@0.5: 82%, Precision: 0.85, Recall: 0.71, enabling scalable integration into waste management fleets.",
                "Optimized transfer learning pipeline using TACO dataset + custom street-level annotations with custom augmentation workflows, reducing model size by 40% for embedded deployment.",
                "Architected end-to-end ML workflow (annotation → preprocessing → training → inference), enabling deployment to IOT devices supporting 300+ urban waste collection sites."
            ]
        },
        {
            role: "Freelance Software Developer",
            company: "Datanova",
            location: "Remote, United States",
            date: "Nov 2024 - Jan 2025",
            achievements: [
                "Resolved critical concurrency bottleneck, reducing platform outages by 40% and improving system stability for 150+ concurrent users through multithreaded request handling optimization.",
                "Engineered location filter feature, enabling targeted reporting, reducing data retrieval time by 35% for administrative users and cutting database query load by 28%.",
                "Architected developer onboarding system, reducing new engineer onboarding time by 50% (from 8 hours to 4 hours).",
                "Optimized release management through advanced branching strategies and standardized coding practices, decreasing integration failures by 30% and eliminating post-release defects (zero production incidents).",
                "Led codebase migration from legacy client environment to local development setup, resolving 47 dependency conflicts and achieving 100% build success rate."
            ]
        },
        {
            role: "Software Developer",
            company: "Shaligram Infotech",
            location: "Ahmedabad, India",
            date: "Feb 2021 - July 2023",
            achievements: [
                "Delivered 3 full-stack Angular + .NET Core projects end-to-end, reducing average delivery timeline by 10% (from 6 months to 5.4 months) while exceeding all client SLAs and generating $120K in premium feature revenue.",
                "Architected & optimized RESTful API infrastructure, improving response times by 20% (avg 450ms → 360ms) through asynchronous programming patterns and advanced SQL query optimization benefiting 5,000+ daily API calls.",
                "Engineered 5+ reusable Angular components with real-time data synchronization, boosting user engagement by 8% and reducing page load times by 15% across 3 enterprise applications.",
                "Spearheaded Windows enterprise application development with Azure SSO integration for real-time employee monitoring system deployed across 8 company locations (500+ users).",
                "Mentored 4 junior developers, improving team productivity by 22% and code quality metrics (reduced bugs by 35% in mentored team's deliverables)."
            ]
        }
    ],
    projects: [
        {
            title: "Shipping Management Portal",
            tech: "Angular 10, .NET Core 7.0, SQL Server",
            description: "Architected international shipping platform enabling real-time booking & tracking for 1,000+ monthly shipments, improving customer satisfaction scores by 12% through streamlined UX.",
            details: [
                "Engineered dynamic admin dashboard with role-based navigation, reducing administrative task completion time by 15% and improving operational efficiency for 20+ support staff.",
                "Designed & implemented role-based access control system (RBAC) using .NET Core Identity Framework, securing 3 user role levels (Admin, Super Admin, Customer) and eliminating all unauthorized access incidents.",
                "Automated report generation pipeline using .NET Core + SQL Server, delivering scheduled PDF reports to 50+ stakeholders and reducing manual reporting hours by 30%."
            ]
        },
        {
            title: "Real-time Trash Detection",
            tech: "YOLOv11n, Python, Computer Vision",
            description: "Engineered real-time detection system for autonomous robots achieving 82% mAP. Optimized for embedded deployment on IoT devices supporting 300+ sites."
        }
    ],
    education: [
        {
            degree: "Post Graduate Certificate - AI/ML",
            school: "Humber College, Toronto",
            date: "2024 - 2025"
        },
        {
            degree: "Post Graduate Certificate - Project Management",
            school: "Georgian College, Toronto",
            date: "2023 - 2024"
        },
        {
            degree: "Master of Science - Information Technology",
            school: "Gujarat University, India",
            date: "2019 - 2021"
        },
        {
            degree: "Bachelor of Science - Information Technology",
            school: "Gujarat University, India",
            date: "2016 - 2019"
        }
    ],
    skills: {
        programming: "C#, .NET Core 7.0+, ASP.NET MVC, REST API, LINQ, Entity Framework, Razor, Angular 12+, TypeScript, JavaScript, HTML5, CSS3, jQuery, AJAX",
        databases: "SQL Server, MySQL (basic), PostgreSQL (basic)",
        cloud: "AWS SageMaker, Azure, Docker (basic), CI/CD (GitHub Actions, Azure DevOps)",
        software: "OOP, Multithreading, Performance Optimization, Microservices (concepts), API Integration (REST/SOAP/GraphQL), Agile/Scrum",
        datascience: "Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch), Feature Engineering, Object Detection (YOLOv11n, Faster R-CNN), Data Annotation (CVAT, LabelImg)"
    }
};
