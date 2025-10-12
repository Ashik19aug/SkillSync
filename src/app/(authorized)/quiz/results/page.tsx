"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Trophy, Target, Clock, TrendingUp, Home, RotateCcw } from "lucide-react"
import {Progress} from "@radix-ui/react-progress";

function QuizResultsContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const score = Number.parseInt(searchParams.get("score") || "0")
    const total = Number.parseInt(searchParams.get("total") || "15")
    const tech = searchParams.get("tech") || "javascript"
    const difficulty = searchParams.get("difficulty") || "easy"

    const percentage = Math.round((score / total) * 100)
    const passed = percentage >= 60

    const getGrade = () => {
        if (percentage >= 90) return { grade: "A+", color: "text-green-400", message: "Outstanding!" }
        if (percentage >= 80) return { grade: "A", color: "text-green-400", message: "Excellent!" }
        if (percentage >= 70) return { grade: "B", color: "text-blue-400", message: "Good Job!" }
        if (percentage >= 60) return { grade: "C", color: "text-yellow-400", message: "Passed!" }
        return { grade: "F", color: "text-red-400", message: "Keep Learning!" }
    }

    const gradeInfo = getGrade()

    return (
        <div>
            <main className="container mx-auto px-4 py-4">
                {/* Hero Section */}
                <div className="text-center space-y-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card">
                        <Trophy className={`h-6 w-6 ${passed ? "text-accent" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold ">Quiz Completed!</h1>
                        <p className="text-muted-foreground text-lg">{gradeInfo.message}</p>
                    </div>
                </div>

                {/* Scorecard */}
                <div className="glass-card p-8 mb-4 bg-white/5 backdrop-blur-sm rounded-md shadow-md">
                    <div className="text-center space-y-2">
                        <div>
                            <div className={`text-2xl font-bold ${gradeInfo.color}`}>{percentage}%</div>
                            <div className="text-xl font-semibold text-muted-foreground">
                                {score} out of {total} correct
                            </div>
                        </div>
                        {/*<Progress value={percentage} className="h-3" />*/}
                        <div className="flex items-center justify-center gap-2">
                            <span className={`text-2xl font-bold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
                            <span className="text-muted-foreground">Grade</span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div className="glass-card p-6 bg-white/5 backdrop-blur-sm rounded-md shadow-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                <Target className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{score}</div>
                                <div className="text-sm text-muted-foreground">Correct Answers</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 bg-white/5 backdrop-blur-sm rounded-md shadow-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                <Target className="h-6 w-6 text-red-500" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{total - score}</div>
                                <div className="text-sm text-muted-foreground">Incorrect Answers</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 bg-white/5 backdrop-blur-sm rounded-md shadow-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Clock className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">15:00</div>
                                <div className="text-sm text-muted-foreground">Time Taken</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quiz Info */}
                <div className=" bg-white/5 backdrop-blur-sm rounded-md shadow-md p-6 mb-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold mb-1">Quiz Details</h3>
                            <p className="text-sm text-muted-foreground">
                                Technology: <span className="text-foreground font-medium">{tech.toUpperCase()}</span> • Difficulty:{" "}
                                <span className="text-foreground font-medium capitalize">{difficulty}</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-accent">
                            <TrendingUp className="h-5 w-5" />
                            <span className="text-sm font-medium">+{Math.round(percentage / 10)} XP</span>
                        </div>
                    </div>
                </div>

                {/* Performance Feedback */}
                <div className=" bg-white/5 backdrop-blur-sm rounded-md shadow-md p-6 mb-4">
                    <h3 className="font-semibold mb-4">Performance Analysis</h3>
                    <div className="space-y-4">
                        {percentage >= 80 && (
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                <p className="text-sm text-green-400">
                                    🎉 Excellent work! You have a strong understanding of {tech}. Consider trying a harder difficulty
                                    level.
                                </p>
                            </div>
                        )}
                        {percentage >= 60 && percentage < 80 && (
                            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <p className="text-sm text-blue-400">
                                    👍 Good job! You passed the quiz. Review the topics you missed to improve your score.
                                </p>
                            </div>
                        )}
                        {percentage < 60 && (
                            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                <p className="text-sm text-yellow-400">
                                    💪 Keep practicing! Review the fundamentals and try again. You will improve with practice.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white/5 backdrop-blur-sm flex flex-col sm:flex-row gap-4 justify-center py-4 rounded-md shadow-md">
                    <Link href="/quiz">
                        <button className="flex justify-center items-center w-full sm:w-auto bg-accent hover:bg-accent/90 gap-2 p-2 rounded-md shadow-md cursor-pointer">
                            <RotateCcw className="h-4 w-4" />
                            Take Another Quiz
                        </button>
                    </Link>
                    <Link href="/dashboard/developer">
                        <button className="flex justify-center items-center w-full sm:w-auto glass-card gap-2 bg-transparent p-2 rounded-md shadow-md cursor-pointer">
                            <Home className="h-4 w-4" />
                            Back to Dashboard
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default function QuizResultsPage() {
    return (
        <Suspense fallback={<div>Loading results...</div>}>
            <QuizResultsContent />
        </Suspense>
    )
}
