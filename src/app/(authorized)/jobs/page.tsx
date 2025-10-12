"use client"

import {useState} from "react"
import {Search, MapPin, Briefcase, DollarSign, Clock, Building2, Star, Filter, Code2} from "lucide-react"
import Link from "next/link"

const jobs = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120k - $180k",
        posted: "2 days ago",
        description: "We're looking for an experienced React developer to join our frontend team.",
        tags: ["React", "TypeScript", "Next.js"],
        saved: false,
    },
    {
        id: 2,
        title: "Full Stack Engineer",
        company: "StartupXYZ",
        location: "Remote",
        type: "Full-time",
        salary: "$100k - $150k",
        posted: "5 days ago",
        description: "Join our fast-growing startup as a full stack engineer working on cutting-edge tech.",
        tags: ["Node.js", "React", "PostgreSQL"],
        saved: true,
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "DesignHub",
        location: "New York, NY",
        type: "Contract",
        salary: "$80k - $120k",
        posted: "1 week ago",
        description: "Create beautiful user interfaces for our design platform.",
        tags: ["Vue.js", "CSS", "Figma"],
        saved: false,
    },
    {
        id: 4,
        title: "DevOps Engineer",
        company: "CloudScale",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$130k - $170k",
        posted: "3 days ago",
        description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
        tags: ["AWS", "Docker", "Kubernetes"],
        saved: false,
    },
    {
        id: 5,
        title: "Backend Developer",
        company: "DataFlow",
        location: "Remote",
        type: "Full-time",
        salary: "$110k - $160k",
        posted: "4 days ago",
        description: "Design and implement scalable backend services and APIs.",
        tags: ["Python", "Django", "Redis"],
        saved: true,
    },
    {
        id: 6,
        title: "Mobile Developer",
        company: "AppMakers",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$100k - $140k",
        posted: "1 week ago",
        description: "Build native mobile applications for iOS and Android.",
        tags: ["React Native", "Swift", "Kotlin"],
        saved: false,
    },
]

export default function JobsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState("all")
    const [savedJobs, setSavedJobs] = useState<number[]>([2, 5])

    const toggleSaveJob = (jobId: number) => {
        setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
    }

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesType = selectedType === "all" || job.type === selectedType

        return matchesSearch && matchesType
    })

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">

            <main className="container mx-auto py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2 text-white">Find Your Next Opportunity</h2>
                    <p className="text-white/60">Browse through {jobs.length} available positions</p>
                </div>

                <div className="glass-card p-6 rounded-xl border border-white/10 mb-8 bg-white/5 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40"/>
                            <input
                                placeholder="Search jobs, companies, or skills..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="form-input pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedType("all")}
                                className={
                                    selectedType === "all"
                                        ? "bg-blue-600 hover:bg-blue-700 text-white border-1 text-xs px-2 cursor-pointer rounded-md"
                                        : "px-2 border-1 text-xs rounded-md cursor-pointer py-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                                }
                            >
                                All
                            </button>
                            <button
                                onClick={() => setSelectedType("Full-time")}
                                className={
                                    selectedType === "Full-time"
                                        ? "bg-blue-600 hover:bg-blue-700 text-white border-1 text-xs px-2 cursor-pointer rounded-md"
                                        : "px-2 border-1 text-xs rounded-md cursor-pointer py-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                                }
                            >
                                Full-time
                            </button>
                            <button
                                onClick={() => setSelectedType("Contract")}
                                className={
                                    selectedType === "Contract"
                                        ? "bg-blue-600 hover:bg-blue-700 text-white border-1 text-xs px-2 cursor-pointer rounded-md"
                                        : "px-2 border-1 text-xs rounded-md cursor-pointer py-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                                }
                            >
                                Contract
                            </button>
                            <button
                                className="flex justify-center items-center border-white/20 text-white hover:bg-white/10 bg-transparent border-1 text-xs px-2 cursor-pointer rounded-md"
                            >
                                <Filter className="h-4 w-4 mr-2"/>
                                Filters
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all  bg-white/5 backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/20 rounded-lg">
                                        <Building2 className="h-6 w-6 text-blue-400"/>
                                    </div>
                                    <div>
                                        <Link href={`/jobs/${job.id}`}>
                                            <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
                                                {job.title}
                                            </h3>
                                        </Link>
                                        <p className="text-white/60 text-sm">{job.company}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => toggleSaveJob(job.id)}
                                    className="text-white/60 hover:text-yellow-400 hover:bg-white/10"
                                >
                                    <Star
                                        className={`h-5 w-5 ${savedJobs.includes(job.id) ? "fill-yellow-400 text-yellow-400" : ""}`}/>
                                </button>
                            </div>

                            <p className="text-white/70 text-sm mb-4 line-clamp-2">{job.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {job.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4"/>
                    {job.location}
                </span>
                                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4"/>
                                    {job.type}
                </span>
                                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4"/>
                                    {job.salary}
                </span>
                                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4"/>
                                    {job.posted}
                </span>
                            </div>

                            <Link href={`/jobs/${job.id}`}>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-2 cursor-pointer">View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                {filteredJobs.length === 0 && (
                    <div className="glass-card p-12 rounded-xl border border-white/10 text-center">
                        <Briefcase className="h-12 w-12 text-white/40 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
                        <p className="text-white/60">Try adjusting your search or filters</p>
                    </div>
                )}
            </main>
        </div>
    )
}
