"use client"

import {useState} from "react"
import {
    MapPin,
    Briefcase,
    DollarSign,
    Clock,
    Building2,
    Star,
    Share2,
    ArrowLeft,
    Code2,
    Users,
    Calendar,
    CheckCircle2,
} from "lucide-react"
import Link from "next/link"


export default function JobDetailsPage({params}: { params: { id: string } }) {
    const [isSaved, setIsSaved] = useState(false)
    const [hasApplied, setHasApplied] = useState(false)
    const [coverLetter, setCoverLetter] = useState("")
    const [showApplicationForm, setShowApplicationForm] = useState(false)

    const job = {
        id: 1,
        title: "Senior React Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120k - $180k",
        posted: "2 days ago",
        description:
            "We're looking for an experienced React developer to join our frontend team and help build the next generation of our product.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        requirements: [
            "5+ years of experience with React and modern JavaScript",
            "Strong understanding of TypeScript and type systems",
            "Experience with Next.js and server-side rendering",
            "Proficiency in CSS and modern styling solutions",
            "Experience with state management libraries (Redux, Zustand, etc.)",
            "Strong problem-solving and communication skills",
        ],
        responsibilities: [
            "Build and maintain high-quality React components",
            "Collaborate with designers and backend engineers",
            "Optimize application performance and user experience",
            "Participate in code reviews and technical discussions",
            "Mentor junior developers and share knowledge",
        ],
        benefits: [
            "Competitive salary and equity package",
            "Health, dental, and vision insurance",
            "401(k) matching",
            "Flexible work schedule and remote options",
            "Professional development budget",
            "Unlimited PTO",
        ],
        applicants: 24,
        views: 156,
    }

    const handleApply = () => {
        console.log("[v0] Applying to job:", job.id)
        console.log("[v0] Cover letter:", coverLetter)
        setHasApplied(true)
        setShowApplicationForm(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard/developer" className="flex items-center gap-2">
                            <Code2 className="h-6 w-6 text-blue-400"/>
                            <h1 className="text-xl font-bold text-white">TalentHub</h1>
                        </Link>
                        <nav className="hidden md:flex items-center gap-4">
                            <Link href="/dashboard/developer">
                                <button className="text-white/70 hover:text-white hover:bg-white/10">
                                    Dashboard
                                </button>
                            </Link>
                            <Link href="/jobs">
                                <button className="text-white/90 hover:text-white hover:bg-white/10">
                                    Find Jobs
                                </button>
                            </Link>
                            <Link href="/profile">
                                <button className="text-white/70 hover:text-white hover:bg-white/10">
                                    Profile
                                </button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Link href="/jobs">
                    <button className="mb-6 text-white/70 hover:text-white hover:bg-white/10">
                        <ArrowLeft className="h-4 w-4 mr-2"/>
                        Back to Jobs
                    </button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-6 rounded-xl border border-white/10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-blue-500/20 rounded-lg">
                                        <Building2 className="h-8 w-8 text-blue-400"/>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-white mb-2">{job.title}</h1>
                                        <p className="text-lg text-white/80 mb-3">{job.company}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
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
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setIsSaved(!isSaved)}
                                        className="text-white/60 hover:text-yellow-400 hover:bg-white/10"
                                    >
                                        <Star
                                            className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`}/>
                                    </button>
                                    <button className="text-white/60 hover:text-white hover:bg-white/10">
                                        <Share2 className="h-5 w-5"/>
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {job.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/20"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">About the Role</h2>
                                    <p className="text-white/70 leading-relaxed">{job.description}</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">Requirements</h2>
                                    <ul className="space-y-2">
                                        {job.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start gap-2 text-white/70">
                                                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0"/>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">Responsibilities</h2>
                                    <ul className="space-y-2">
                                        {job.responsibilities.map((resp, index) => (
                                            <li key={index} className="flex items-start gap-2 text-white/70">
                                                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0"/>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">Benefits</h2>
                                    <ul className="space-y-2">
                                        {job.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2 text-white/70">
                                                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0"/>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {showApplicationForm && !hasApplied && (
                            <div className="glass-card p-6 rounded-xl border border-white/10">
                                <h2 className="text-xl font-semibold text-white mb-4">Application</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">Cover Letter
                                            (Optional)</label>
                                        <textarea
                                            placeholder="Tell us why you're a great fit for this role..."
                                            value={coverLetter}
                                            onChange={(e) => setCoverLetter(e.target.value)}
                                            rows={6}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500/50"
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={handleApply}
                                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                                            Submit Application
                                        </button>
                                        <button
                                            onClick={() => setShowApplicationForm(false)}
                                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card p-6 rounded-xl border border-white/10 sticky top-24">
                            {hasApplied ? (
                                <div className="text-center py-4">
                                    <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-4">
                                        <CheckCircle2 className="h-8 w-8 text-green-400"/>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Application Submitted!</h3>
                                    <p className="text-white/60 text-sm mb-4">We review your application and get back
                                        to you soon.</p>
                                    <Link href="/jobs">
                                        <button
                                            className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                                        >
                                            Browse More Jobs
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setShowApplicationForm(true)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                                    >
                                        Apply Now
                                    </button>
                                    <button
                                        onClick={() => setIsSaved(!isSaved)}
                                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                                    >
                                        <Star
                                            className={`h-4 w-4 mr-2 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`}/>
                                        {isSaved ? "Saved" : "Save Job"}
                                    </button>
                                </>
                            )}

                            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <Users className="h-4 w-4"/>
                    Applicants
                  </span>
                                    <span className="text-white font-medium">{job.applicants}</span>
                                </div>
                                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4"/>
                    Posted
                  </span>
                                    <span className="text-white font-medium">{job.posted}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
