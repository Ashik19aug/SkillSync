"use client"

import { useState } from "react"
import Link from "next/link"
import { Code2, Zap, Brain, Clock } from "lucide-react"

const technologies = [
    { id: "javascript", name: "JavaScript", icon: "JS", color: "from-yellow-500/20 to-yellow-600/20" },
    { id: "react", name: "React", icon: "⚛️", color: "from-blue-500/20 to-cyan-500/20" },
    { id: "nodejs", name: "Node.js", icon: "📗", color: "from-green-500/20 to-emerald-600/20" },
    { id: "typescript", name: "TypeScript", icon: "TS", color: "from-blue-600/20 to-blue-700/20" },
    { id: "python", name: "Python", icon: "🐍", color: "from-blue-400/20 to-yellow-500/20" },
    { id: "nextjs", name: "Next.js", icon: "▲", color: "from-gray-700/20 to-gray-900/20" },
]

const difficulties = [
    { id: "easy", name: "Easy", description: "Perfect for beginners", icon: Zap, color: "text-green-400" },
    { id: "medium", name: "Medium", description: "Test your knowledge", icon: Brain, color: "text-yellow-400" },
    { id: "hard", name: "Hard", description: "Expert level challenge", icon: Code2, color: "text-red-400" },
]

export default function QuizSelectionPage() {
    const [selectedTech, setSelectedTech] = useState<string | null>(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">

                <div className="text-center space-y-4 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-balance">Skill Assessment</h1>
                    </div>
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">15 Questions • 1 min per question</span>
                    </div>
                    <h2 className="text-xl font-semibold">Test Your Skills</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Choose a technology and difficulty level to start your assessment. <br/> Track your progress and improve your
                        skills.
                    </p>
                </div>

                {/* Technology Selection */}
                <div className="space-y-6 mb-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Select Technology</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {technologies.map((tech) => (
                                <button
                                    key={tech.id}
                                    onClick={() => setSelectedTech(tech.id)}
                                    className={`glass-card glass-hover p-6 rounded-xl transition-all bg-white/5 backdrop-blur-sm ${
                                        selectedTech === tech.id ? "ring-2 ring-accent bg-accent/10" : ""
                                    }`}
                                >
                                    <div
                                        className={`w-full aspect-square rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3`}
                                    >
                                        <span className="text-5xl font-bold">{tech.icon}</span>
                                    </div>
                                    <p className="text-sm font-medium text-center">{tech.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Difficulty Selection */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Select Difficulty</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {difficulties.map((diff) => {
                                const Icon = diff.icon
                                return (
                                    <button
                                        key={diff.id}
                                        onClick={() => setSelectedDifficulty(diff.id)}
                                        className={`glass-card glass-hover p-6 rounded-xl transition-all text-left bg-white/5 backdrop-blur-sm ${
                                            selectedDifficulty === diff.id ? "ring-2 ring-accent bg-accent/10" : ""
                                        }`}
                                    >
                                        <Icon className={`h-8 w-8 mb-3 ${diff.color}`} />
                                        <h4 className="text-lg font-semibold mb-1">{diff.name}</h4>
                                        <p className="text-sm text-muted-foreground">{diff.description}</p>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Start Quiz Button */}
                <div className="flex justify-center">
                    <Link
                        href={
                            selectedTech && selectedDifficulty
                                ? `/quiz/take?tech=${selectedTech}&difficulty=${selectedDifficulty}`
                                : "#"
                        }
                    >
                        <button disabled={!selectedTech || !selectedDifficulty} className="btn-primary">
                            Start Quiz
                        </button>
                    </Link>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-card p-6 bg-white/5 backdrop-blur-sm rounded-md">
                        <div className="text-3xl font-bold text-accent mb-2">1,234</div>
                        <p className="text-sm text-muted-foreground">Quizzes Completed</p>
                    </div>
                    <div className="glass-card p-6 bg-white/5 backdrop-blur-sm rounded-md">
                        <div className="text-3xl font-bold text-accent mb-2">85%</div>
                        <p className="text-sm text-muted-foreground">Average Score</p>
                    </div>
                    <div className="glass-card p-6 bg-white/5 backdrop-blur-sm rounded-md">
                        <div className="text-3xl font-bold text-accent mb-2">42</div>
                        <p className="text-sm text-muted-foreground">Skills Assessed</p>
                    </div>
                </div>
        </div>
    )
}
