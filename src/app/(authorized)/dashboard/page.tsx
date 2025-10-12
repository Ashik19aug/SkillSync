"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Briefcase,
    TrendingUp,
    Star,
    Clock,
    ArrowRight,
    Sparkles,
    Target,
    Award,
    Users,
    Building2,
    Code2,
    Brain,
    Zap,
    ChevronRight,
} from "lucide-react"

export default function HomePage() {
    const [userType] = useState<"developer" | "company">("developer") // This would come from auth context

    const featuredJobs = [
        {
            id: 1,
            title: "Senior Full Stack Engineer",
            company: "TechCorp",
            location: "Remote",
            salary: "$120k - $180k",
            type: "Full-time",
            tags: ["React", "Node.js", "TypeScript"],
            logo: "TC",
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "DesignHub",
            location: "New York, NY",
            salary: "$100k - $150k",
            type: "Full-time",
            tags: ["React", "Next.js", "Tailwind"],
            logo: "DH",
        },
        {
            id: 3,
            title: "DevOps Engineer",
            company: "CloudScale",
            location: "San Francisco, CA",
            salary: "$130k - $190k",
            type: "Full-time",
            tags: ["AWS", "Docker", "Kubernetes"],
            logo: "CS",
        },
    ]

    // const quickStats = [
    //     { label: "Profile Views", value: "342", change: "+15%", icon: TrendingUp },
    //     { label: "Applications", value: "8", change: "+3", icon: Briefcase },
    //     { label: "Saved Jobs", value: "15", change: "+2", icon: Star },
    //     { label: "Interviews", value: "3", change: "This week", icon: Clock },
    // ]

    const achievements = [
        { title: "Profile Complete", description: "100% profile completion", icon: Award, color: "emerald" },
        { title: "Quick Responder", description: "Avg. response time: 2h", icon: Zap, color: "blue" },
        { title: "Skill Verified", description: "3 skills verified", icon: Target, color: "purple" },
    ]

    return (
        <div>

            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium">Welcome back</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
                        Your next opportunity
                        <br />
                        <span className="text-white/60">starts here.</span>
                    </h1>
                    <p className="text-xl text-white/60 mb-8 max-w-2xl text-pretty">
                        Discover personalized job matches, track your applications, and connect with top companies looking for
                        talent like you.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/jobs">
                            <button className="flex items-center justify-center bg-white text-slate-950 hover:bg-white/90 h-12 px-6 rounded-md shadow-md cursor-pointer">
                                Explore Jobs
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </Link>
                        <Link href="/quiz">
                            <button
                                className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-6 rounded-md shadow-md border-2 cursor-pointer"
                            >
                                Take Skill Quiz
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Quick Stats */}
                {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">*/}
                {/*    {quickStats.map((stat, index) => (*/}
                {/*        <div*/}
                {/*            key={index}*/}
                {/*            className="glass-card p-6 rounded-xl border border-white/10 group hover:border-white/20 transition-all"*/}
                {/*        >*/}
                {/*            <div className="flex items-center justify-between mb-3">*/}
                {/*                <stat.icon className="h-5 w-5 text-blue-400" />*/}
                {/*                <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>*/}
                {/*            </div>*/}
                {/*            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>*/}
                {/*            <p className="text-sm text-white/60">{stat.label}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                {/* Featured Jobs */}
                <div className="mb-16 bg-white/5 backdrop-blur-sm p-8 rounded-md shadow-md">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Recommended for you</h2>
                            <p className="text-white/60">Jobs matching your skills and preferences</p>
                        </div>
                        <Link href="/jobs">
                            <button className="flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 p-2 cursor-pointer rounded-md">
                                View all
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredJobs.map((job) => (
                            <Link key={job.id} href={`/jobs/${job.id}`}>
                                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all group cursor-pointer h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                            {job.logo}
                                        </div>
                                        <button
                                            className="h-8 w-8 p-0 text-white/60 hover:text-white hover:bg-white/10"
                                        >
                                            <Star className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-white/60 mb-4">{job.company}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {job.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 rounded-md text-xs font-medium bg-white/10 text-white/80 border border-white/10"
                                            >
                                              {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <span className="text-sm text-white/60">{job.location}</span>
                                        <span className="text-sm font-semibold text-white">{job.salary}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Achievements & Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {/* Achievements */}
                    <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ">
                        <div className="flex items-center gap-2 mb-6">
                            <Award className="h-5 w-5 text-yellow-400" />
                            <h3 className="text-xl font-bold text-white">Your Achievements</h3>
                        </div>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    <div
                                        className={`h-12 w-12 rounded-lg bg-${achievement.color}-500/20 flex items-center justify-center`}
                                    >
                                        <achievement.icon className={`h-6 w-6 text-${achievement.color}-400`} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                                        <p className="text-sm text-white/60">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ">
                        <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                        <div className="space-y-5">
                            <div>
                                <Link href="/profile/edit">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Users className="h-5 w-5 text-blue-400"/>
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">Update Profile</p>
                                                <p className="text-sm text-white/60">Keep your information current</p>
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className="h-5 w-5 text-white/40 group-hover:text-white/80 transition-colors"/>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href="/quiz">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Brain className="h-5 w-5 text-purple-400"/>
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">Take Skill Assessment</p>
                                                <p className="text-sm text-white/60">Verify your expertise</p>
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className="h-5 w-5 text-white/40 group-hover:text-white/80 transition-colors"/>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link href="/jobs">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                                <Briefcase className="h-5 w-5 text-emerald-400"/>
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">Browse All Jobs</p>
                                                <p className="text-sm text-white/60">Explore opportunities</p>
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className="h-5 w-5 text-white/40 group-hover:text-white/80 transition-colors"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass-card p-8 md:p-12 rounded-xl border border-white/10 text-center bg-white/5 backdrop-blur-sm">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                            Ready to take the next step in your career?
                        </h2>
                        <p className="text-lg text-white/60 mb-8 text-pretty">
                            Complete your profile, showcase your skills, and let top companies discover you.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/profile/edit">
                                <button className="bg-white text-slate-950 hover:bg-white/90 h-12 px-8 rounded-md shadow-md cursor-pointer">
                                    Complete Profile
                                </button>
                            </Link>
                            <Link href="/jobs">
                                <button
                                    className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-8 rounded-md shadow-md cursor-pointer border-2"
                                >
                                    Explore Jobs
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
