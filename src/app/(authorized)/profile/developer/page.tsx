"use client"
import {
    Code2,
    MapPin,
    Mail,
    Phone,
    Globe,
    Github,
    Linkedin,
    Edit,
    Briefcase,
    GraduationCap,
    Award,
    Calendar,
} from "lucide-react"
// import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfilePage() {
    const profile = {
        name: "John Doe",
        title: "Senior Full Stack Developer",
        location: "San Francisco, CA",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        website: "johndoe.dev",
        github: "johndoe",
        linkedin: "johndoe",
        bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love solving complex problems and mentoring junior developers.",
        skills: [
            "React",
            "TypeScript",
            "Node.js",
            "Next.js",
            "PostgreSQL",
            "AWS",
            "Docker",
            "GraphQL",
            "Tailwind CSS",
            "Python",
        ],
        experience: [
            {
                title: "Senior Full Stack Developer",
                company: "TechCorp",
                location: "San Francisco, CA",
                period: "2021 - Present",
                description:
                    "Leading development of core platform features, mentoring junior developers, and architecting scalable solutions.",
            },
            {
                title: "Full Stack Developer",
                company: "StartupXYZ",
                location: "Remote",
                period: "2019 - 2021",
                description: "Built and maintained multiple client-facing applications using React and Node.js.",
            },
            {
                title: "Frontend Developer",
                company: "DesignHub",
                location: "New York, NY",
                period: "2017 - 2019",
                description: "Developed responsive user interfaces and collaborated with design team on UX improvements.",
            },
        ],
        education: [
            {
                degree: "Bachelor of Science in Computer Science",
                school: "University of California, Berkeley",
                period: "2013 - 2017",
            },
        ],
        certifications: [
            {
                name: "AWS Certified Solutions Architect",
                issuer: "Amazon Web Services",
                date: "2022",
            },
            {
                name: "Professional Scrum Master I",
                issuer: "Scrum.org",
                date: "2021",
            },
        ],
    }

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">
            <div className="glass-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-6">
                        <div
                            className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                            {profile.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
                            <p className="text-xl text-white/80 mb-3">{profile.title}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4"/>
                        {profile.location}
                    </span>
                                <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4"/>
                                    {profile.email}
                    </span>
                                <span className="flex items-center gap-1">
                      <Phone className="h-4 w-4"/>
                                    {profile.phone}
                    </span>
                            </div>
                        </div>
                    </div>
                    <Link href="/profile/edit">
                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-md">
                            <Edit className="h-4 w-4 mr-2"/>Edit Profile
                        </button>
                    </Link>
                </div>

                <div className="flex gap-4 mb-6">
                    <a
                        href={`https://${profile.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                    >
                        <Globe className="h-4 w-4"/>
                        {profile.website}
                    </a>
                    <a
                        href={`https://github.com/${profile.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                    >
                        <Github className="h-4 w-4"/>
                        GitHub
                    </a>
                    <a
                        href={`https://linkedin.com/in/${profile.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                    >
                        <Linkedin className="h-4 w-4"/>
                        LinkedIn
                    </a>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">About</h2>
                    <p className="text-white/70 leading-relaxed">{profile.bio}</p>
                </div>
            </div>

            <div className="glass-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-blue-400"/>
                    Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 rounded-lg bg-white/10 text-white/90 border border-white/20 font-medium"
                        >
                  {skill}
                </span>
                    ))}
                </div>
            </div>

            <div className="glass-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-blue-400"/>
                    Experience
                </h2>
                <div className="space-y-6">
                    {profile.experience.map((exp, index) => (
                        <div key={index} className="relative pl-6 border-l-2 border-white/20">
                            <div
                                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-slate-900"/>
                            <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                            <p className="text-white/80 mb-2">{exp.company}</p>
                            <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4"/>
                        {exp.period}
                    </span>
                                <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4"/>
                                    {exp.location}
                    </span>
                            </div>
                            <p className="text-white/70">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-400"/>
                    Education
                </h2>
                <div className="space-y-4">
                    {profile.education.map((edu, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                            <p className="text-white/80 mb-2">{edu.school}</p>
                            <p className="text-sm text-white/60 flex items-center gap-1">
                                <Calendar className="h-4 w-4"/>
                                {edu.period}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-400"/>
                    Certifications
                </h2>
                <div className="space-y-4">
                    {profile.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                                <p className="text-white/70">{cert.issuer}</p>
                            </div>
                            <span className="text-sm text-white/60">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
