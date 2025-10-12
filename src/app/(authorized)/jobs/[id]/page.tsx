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
    Users,
    Calendar,
    CheckCircle2, Send, ThumbsUp, Reply, Upload, X, Minimize,
} from "lucide-react"
import Link from "next/link"

type CommentReply = {
    id: string
    author: string
    avatar: string
    content: string
    timestamp: string
    likes: number
}

type Comment = {
    id: string
    author: string
    avatar: string
    content: string
    timestamp: string
    likes: number
    replies: [CommentReply]
}

export default function JobDetailsPage({params}: { params: { id: string } }) {
    const [isSaved, setIsSaved] = useState(false)
    const [hasApplied, setHasApplied] = useState(false)
    const [coverLetter, setCoverLetter] = useState("")
    const [showApplicationModal, setShowApplicationModal] = useState(false)
    const [showApplicationForm, setShowApplicationForm] = useState(false)
    const [cvFile, setCvFile] = useState<File | null>(null)

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

    const [comments, setComments] = useState<Comment[]>([
        {
            id: "1",
            author: "Sarah Johnson",
            avatar: "SJ",
            content:
                "Great opportunity! I've worked with similar tech stack. Can anyone share insights about the team culture?",
            timestamp: "2 hours ago",
            likes: 5,
            replies: [
                {
                    id: "1-1",
                    author: "Mike Chen",
                    avatar: "MC",
                    content:
                        "I interviewed with them last month. The team is very collaborative and they have a strong focus on work-life balance.",
                    timestamp: "1 hour ago",
                    likes: 3,
                },
            ],
        },
        {
            id: "2",
            author: "Alex Rodriguez",
            avatar: "AR",
            content: "Does anyone know if they sponsor visas for international candidates?",
            timestamp: "5 hours ago",
            likes: 2,
            replies: [
                {
                    id: "1-1",
                    author: "Mike Chen",
                    avatar: "MC",
                    content:
                        "I interviewed with them last month. The team is very collaborative and they have a strong focus on work-life balance.",
                    timestamp: "1 hour ago",
                    likes: 3,
                },
            ],
        },
    ])

    const [newComment, setNewComment] = useState("")
    const [replyingTo, setReplyingTo] = useState<string | null>(null)
    const [replyContent, setReplyContent] = useState("")

    const handleApply = () => {
        console.log("[v0] Applying to job:", job.id)
        console.log("[v0] Cover letter:", coverLetter)
        console.log("[v0] CV file:", cvFile?.name)
        setHasApplied(true)
        setShowApplicationModal(false)
        setCoverLetter("")
        setCvFile(null)
    }

    const handleAddComment = () => {
        if (!newComment.trim()) return

        const comment: Comment = {
            id: Date.now().toString(),
            author: "You",
            avatar: "YO",
            content: newComment,
            timestamp: "Just now",
            likes: 0,
            replies: [],
        }

        setComments([comment, ...comments])
        setNewComment("")
    }

    const handleAddReply = (commentId: string) => {
        if (!replyContent.trim()) return

        const reply = {
            id: Date.now().toString(),
            author: "You",
            avatar: "YO",
            content: replyContent,
            timestamp: "Just now",
            likes: 0,
        }

        setComments(
            comments.map((comment) =>
                comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment,
            ),
        )
        setReplyContent("")
        setReplyingTo(null)
    }

    const handleLikeComment = (commentId: string) => {
        setComments(
            comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
        )
    }

    const handleLikeReply = (commentId: string, replyId: string) => {
        setComments(
            comments.map((comment) =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: comment.replies.map((reply) =>
                            reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply,
                        ),
                    }
                    : comment,
            ),
        )
    }

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">

            <Link href="/jobs">
                <button
                    className="flex items-center justify-center rounded-md px-2 py-2 mb-6 text-white/70 hover:text-white hover:bg-white/10 cursor-pointer">
                    <ArrowLeft className="h-4 w-4 mr-2"/>
                    Back to Jobs
                </button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
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
                                            <Briefcase className="h-4 w-4"/>{job.type}
                                          </span>
                                        <span className="flex items-center gap-1">
                                            <DollarSign className="h-4 w-4"/>{job.salary}
                                          </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4"/>{job.posted}
                                          </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setIsSaved(!isSaved)}
                                        className="text-white/60 hover:text-yellow-400 hover:bg-white/10">
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
                                <span key={tag}
                                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/20">
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
                        <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h2 className="text-xl font-semibold text-white mb-4">Application</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="form-label">Cover Letter (Optional)</label>
                                    <textarea
                                        placeholder="Tell us why you're a great fit for this role..."
                                        value={coverLetter}
                                        onChange={(e) => setCoverLetter(e.target.value)}
                                        rows={6}
                                        className="form-input"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={handleApply} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Submit Application
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

                    {/*Comment Section start*/}
                    <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <h2 className="text-xl font-semibold text-white mb-6">Discussion</h2>

                        <div className="mb-6">
                            <textarea
                                placeholder="Share your thoughts or ask a question..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={3}
                                className="form-input"
                            />
                            <div className="flex justify-end">
                                <button
                                    onClick={handleAddComment}
                                    disabled={!newComment.trim()}
                                    className="flex items-center justify-center my-4 btn-primary"
                                >
                                    <Send className="h-4 w-4 mr-2" />
                                    Post Comment
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {comments.map((comment) => (
                                <div key={comment.id} className="border-t border-white/10 pt-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold flex-shrink-0">
                                            {comment.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-semibold text-white">{comment.author}</span>
                                                <span className="text-white/40 text-sm">{comment.timestamp}</span>
                                            </div>
                                            <p className="text-white/70 mb-3 leading-relaxed">{comment.content}</p>
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => handleLikeComment(comment.id)}
                                                    className="flex items-center gap-1 text-white/60 hover:text-blue-400 transition-colors text-sm"
                                                >
                                                    <ThumbsUp className="h-4 w-4" />
                                                    <span>{comment.likes}</span>
                                                </button>
                                                <button
                                                    onClick={() => setReplyingTo(comment.id)}
                                                    className="flex items-center gap-1 text-white/60 hover:text-blue-400 transition-colors text-sm"
                                                >
                                                    <Reply className="h-4 w-4" />
                                                    Reply
                                                </button>
                                            </div>

                                            {replyingTo === comment.id && (
                                                <div className="mt-4 ml-4 pl-4 border-l-2 border-white/10">
                                                    <textarea
                                                        placeholder="Write your reply..."
                                                        value={replyContent}
                                                        onChange={(e) => setReplyContent(e.target.value)}
                                                        rows={2}
                                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500/50 mb-2"
                                                    />
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleAddReply(comment.id)}
                                                            disabled={!replyContent.trim()}
                                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                                        >
                                                            Reply
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setReplyingTo(null)
                                                                setReplyContent("")
                                                            }}
                                                            className="text-white/60 hover:text-white hover:bg-white/10"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {comment.replies.length > 0 && (
                                                <div className="mt-4 ml-4 pl-4 border-l-2 border-white/10 space-y-4">
                                                    {comment.replies.map((reply) => (
                                                        <div key={reply.id} className="flex items-start gap-3">
                                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold text-sm flex-shrink-0">
                                                                {reply.avatar}
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <span className="font-semibold text-white text-sm">{reply.author}</span>
                                                                    <span className="text-white/40 text-xs">{reply.timestamp}</span>
                                                                </div>
                                                                <p className="text-white/70 mb-2 text-sm leading-relaxed">{reply.content}</p>
                                                                <button
                                                                    onClick={() => handleLikeReply(comment.id, reply.id)}
                                                                    className="flex items-center gap-1 text-white/60 hover:text-blue-400 transition-colors text-xs"
                                                                >
                                                                    <ThumbsUp className="h-3 w-3" />
                                                                    <span>{reply.likes}</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*Comment Section end*/}

                </div>

                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-xl border border-white/10 sticky top-24 bg-white/5 backdrop-blur-sm">
                        {hasApplied ? (
                            <div className="text-center py-4">
                                <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-4">
                                    <CheckCircle2 className="h-8 w-8 text-green-400"/>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Application Submitted!</h3>
                                <p className="text-white/60 text-sm mb-4">We review your application and get back
                                    to you soon.</p>
                                <Link href="/jobs">
                                    <button className="btn-primary">
                                        Browse More Jobs
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <button onClick={() => setShowApplicationModal(true)} className="btn-primary" data-modal-target="default-modal" data-modal-toggle="default-modal">
                                    Apply Now
                                </button>
                                <button onClick={() => setIsSaved(!isSaved)}
                                        className="flex items-center justify-center w-full border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-md py-2 cursor-pointer">
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
                                    <Calendar className="h-4 w-4"/>Posted
                                  </span>
                                <span className="text-white font-medium">{job.posted}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {showApplicationModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay background */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setShowApplicationModal(false)}
                    ></div>

                    {/* Modal content */}
                    <div className="relative z-10 bg-slate-900/95 backdrop-blur-xl border border-white/10 text-white max-w-2xl w-full mx-4 rounded-xl shadow-xl p-6 animate-fadeIn">
                        {/* Header */}
                        <div className="flex items-center gap-2 justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Apply for {job.title}</h2>
                                <p className="text-white/60 mt-1">
                                    Submit your application with a cover letter and CV
                                </p>
                            </div>
                            <div>
                                <Minimize className="text-red-500 cursor-pointer" onClick={()=>setShowApplicationModal(false)} />
                            </div>
                        </div>


                        {/* Form section */}
                        <div className="space-y-4 py-4">
                            {/* Cover letter */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">
                                    Cover Letter
                                </label>
                                <textarea
                                    placeholder="Tell us why you're a great fit for this role..."
                                    value={coverLetter}
                                    onChange={(e) => setCoverLetter(e.target.value)}
                                    rows={6}
                                    className="w-full rounded-lg border border-white/20 bg-slate-800/60 text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/40"
                                />
                            </div>

                            {/* CV upload */}
                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">
                                    Upload CV/Resume *
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) setCvFile(file);
                                        }}
                                        className="hidden"
                                        id="cv-upload"
                                    />
                                    <label
                                        htmlFor="cv-upload"
                                        className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-blue-500/50 hover:bg-white/5 transition-colors"
                                    >
                                        <Upload className="h-5 w-5 text-white/60" />
                                        <span className="text-white/60">
                      {cvFile ? cvFile.name : "Click to upload PDF, DOC, or DOCX"}
                    </span>
                                    </label>

                                    {cvFile && (
                                        <button
                                            onClick={() => setCvFile(null)}
                                            className="absolute top-2 right-2 p-1 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 transition-colors"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                                <p className="text-xs text-white/40 mt-1">
                                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                                </p>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                onClick={() => {
                                    setShowApplicationModal(false);
                                    setCoverLetter("");
                                    setCvFile(null);
                                }}
                                className="px-4 py-2 border border-white/20 text-white rounded-md hover:bg-white/10 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleApply}
                                disabled={!cvFile}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Submit Application
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}
