import {
    Briefcase,
    Edit, Eye,
    Github,
    Globe,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Plus,
    TrendingUp,
    UserCheck,
    Users
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {

    const profile = {
        name: "Com Name",
        title: "Senior Full Stack Developer",
        location: "San Francisco, CA",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        website: "johndoe.dev",
        github: "johndoe",
        linkedin: "johndoe",
        bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love solving complex problems and mentoring junior developers.",
    };
    const recentJobs = [
        { id: 1, title: "Senior React Developer", applications: 24, views: 156, status: "Active" },
        { id: 2, title: "Full Stack Engineer", applications: 18, views: 203, status: "Active" },
        { id: 3, title: "DevOps Engineer", applications: 12, views: 89, status: "Active" },
    ]

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">

            <div className="glass-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-6">
                        <div
                            className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                            {profile.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
                            {/*<p className="text-xl text-white/80 mb-3">{profile.title}</p>*/}
                            <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4"/>{profile.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Mail className="h-4 w-4"/>{profile.email}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Phone className="h-4 w-4"/>{profile.phone}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link href="/profile/edit">
                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-md">
                            <Plus className="h-4 w-4 mr-2"/>Post new job
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                            <Briefcase className="h-6 w-6 text-blue-400" />
                        </div>
                        <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12%
              </span>
                    </div>
                    <p className="text-white/60 text-sm mb-1">Active Jobs</p>
                    <p className="text-3xl font-bold text-white">12</p>
                </div>

                <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-500/20 rounded-lg">
                            <Users className="h-6 w-6 text-purple-400" />
                        </div>
                        <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8%
              </span>
                    </div>
                    <p className="text-white/60 text-sm mb-1">Applications</p>
                    <p className="text-3xl font-bold text-white">48</p>
                </div>

                <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-emerald-500/20 rounded-lg">
                            <UserCheck className="h-6 w-6 text-emerald-400" />
                        </div>
                        <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +25%
              </span>
                    </div>
                    <p className="text-white/60 text-sm mb-1">Hired This Month</p>
                    <p className="text-3xl font-bold text-white">5</p>
                </div>

                <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-500/20 rounded-lg">
                            <Eye className="h-6 w-6 text-orange-400" />
                        </div>
                        <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +18%
              </span>
                    </div>
                    <p className="text-white/60 text-sm mb-1">Profile Views</p>
                    <p className="text-3xl font-bold text-white">1.2k</p>
                </div>
            </div>


            <div className="glass-card p-6 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Recent Job Posts</h3>
                        <p className="text-white/60 text-sm">Your latest job openings</p>
                    </div>
                    <Link href="/jobs">
                        <button
                            variant="outline"
                            size="sm"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        >
                            View All
                        </button>
                    </Link>
                </div>

                <div className="space-y-4">
                    {recentJobs.map((job) => (
                        <Link key={job.id} href={`/jobs/${job.id}`}>
                            <div className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-2">{job.title}</h4>
                                        <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                            {job.applications} applications
                        </span>
                                            <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                                                {job.views} views
                        </span>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      {job.status}
                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </div>
    )
}