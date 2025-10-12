"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {Clock, AlertCircle, SkipForward, SkipBack} from "lucide-react"
import {Progress} from "@radix-ui/react-progress";

// Sample quiz questions
const quizQuestions = {
    javascript: {
        easy: [
            {
                id: 1,
                question: "What is the correct way to declare a variable in JavaScript?",
                options: ["var x = 5;", "variable x = 5;", "v x = 5;", "int x = 5;"],
                correct: 0,
            },
            {
                id: 2,
                question: "Which method is used to add an element to the end of an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correct: 0,
            },
            {
                id: 3,
                question: "What does '===' operator do in JavaScript?",
                options: ["Compares values only", "Compares both value and type", "Assigns a value", "Checks if not equal"],
                correct: 1,
            },
            {
                id: 4,
                question: "How do you write a comment in JavaScript?",
                options: [" comment ", "// comment", "# comment", "/* comment"],
                correct: 1,
            },
            {
                id: 5,
                question: "Which keyword is used to create a constant in JavaScript?",
                options: ["const", "let", "var", "constant"],
                correct: 0,
            },
            {
                id: 6,
                question: "What is the output of: typeof null?",
                options: ["'null'", "'undefined'", "'object'", "'number'"],
                correct: 2,
            },
            {
                id: 7,
                question: "How do you create a function in JavaScript?",
                options: ["function myFunc()", "def myFunc()", "func myFunc()", "create myFunc()"],
                correct: 0,
            },
            {
                id: 8,
                question: "Which method converts JSON string to JavaScript object?",
                options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
                correct: 0,
            },
            {
                id: 9,
                question: "What is the correct way to write an if statement?",
                options: ["if x = 5", "if (x == 5)", "if x == 5 then", "if x === 5 then"],
                correct: 1,
            },
            {
                id: 10,
                question: "Which event occurs when a user clicks on an HTML element?",
                options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
                correct: 1,
            },
            {
                id: 11,
                question: "How do you round the number 7.25 to the nearest integer?",
                options: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
                correct: 0,
            },
            {
                id: 12,
                question: "What is the correct way to write a JavaScript array?",
                options: [
                    "var colors = 'red', 'green', 'blue'",
                    "var colors = (1:'red', 2:'green', 3:'blue')",
                    "var colors = ['red', 'green', 'blue']",
                    "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
                ],
                correct: 2,
            },
            {
                id: 13,
                question: "How do you find the length of a string in JavaScript?",
                options: ["str.length", "str.size()", "length(str)", "str.len()"],
                correct: 0,
            },
            {
                id: 14,
                question: "Which operator is used to concatenate strings?",
                options: ["+", "&", "*", "concat"],
                correct: 0,
            },
            {
                id: 15,
                question: "What is the correct way to write a JavaScript object?",
                options: [
                    "var person = {firstName:'John', lastName:'Doe'}",
                    "var person = (firstName:'John', lastName:'Doe')",
                    "var person = [firstName='John', lastName='Doe']",
                    "var person = firstName:'John', lastName:'Doe'",
                ],
                correct: 0,
            },
        ],
    },
    react: {
        easy: [
            {
                id: 1,
                question: "What is React?",
                options: ["A JavaScript library", "A database", "A programming language", "An operating system"],
                correct: 0,
            },
            {
                id: 2,
                question: "What is JSX?",
                options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"],
                correct: 0,
            },
            {
                id: 3,
                question: "Which hook is used to manage state in functional components?",
                options: ["useState", "useEffect", "useContext", "useReducer"],
                correct: 0,
            },
            {
                id: 4,
                question: "What is the virtual DOM?",
                options: ["A lightweight copy of the actual DOM", "A database", "A CSS framework", "A testing library"],
                correct: 0,
            },
            {
                id: 5,
                question: "How do you create a React component?",
                options: ["function Component()", "class Component", "Both A and B", "component()"],
                correct: 2,
            },
            {
                id: 6,
                question: "What is props in React?",
                options: ["Properties passed to components", "A state management tool", "A routing library", "A CSS framework"],
                correct: 0,
            },
            {
                id: 7,
                question: "Which method is used to update state?",
                options: ["setState()", "updateState()", "changeState()", "modifyState()"],
                correct: 0,
            },
            {
                id: 8,
                question: "What is the purpose of useEffect hook?",
                options: ["Handle side effects", "Manage state", "Create components", "Style components"],
                correct: 0,
            },
            {
                id: 9,
                question: "How do you pass data from parent to child component?",
                options: ["Using props", "Using state", "Using context", "Using refs"],
                correct: 0,
            },
            {
                id: 10,
                question: "What is the correct way to import React?",
                options: ["import React from 'react'", "require('react')", "include React", "using React"],
                correct: 0,
            },
            {
                id: 11,
                question: "What is the key prop used for?",
                options: ["Identifying elements in lists", "Styling components", "Managing state", "Handling events"],
                correct: 0,
            },
            {
                id: 12,
                question: "Which hook is used for side effects?",
                options: ["useEffect", "useState", "useContext", "useMemo"],
                correct: 0,
            },
            {
                id: 13,
                question: "What is React Fragment used for?",
                options: ["Grouping elements without extra DOM nodes", "Creating animations", "Managing state", "Routing"],
                correct: 0,
            },
            {
                id: 14,
                question: "How do you handle events in React?",
                options: [
                    "onClick={handleClick}",
                    "onclick='handleClick()'",
                    "on-click={handleClick}",
                    "onClick='handleClick'",
                ],
                correct: 0,
            },
            {
                id: 15,
                question: "What is the default port for React development server?",
                options: ["3000", "8080", "5000", "4200"],
                correct: 0,
            },
        ],
    },
}

function QuizTakeContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const tech = searchParams.get("tech") || "javascript"
    const difficulty = searchParams.get("difficulty") || "easy"

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [answers, setAnswers] = useState<(number | null)[]>(Array(15).fill(null))
    const [timeLeft, setTimeLeft] = useState(60)
    const [isTimeUp, setIsTimeUp] = useState(false)

    const questions =
        quizQuestions[tech as keyof typeof quizQuestions]?.[difficulty as keyof typeof quizQuestions.javascript] ||
        quizQuestions.javascript.easy

    // Timer effect
    useEffect(() => {
        if (timeLeft === 0) {
            setIsTimeUp(true)
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    // Auto-move to next question when time is up
    useEffect(() => {
        if (isTimeUp) {
            const timeout = setTimeout(() => {
                handleNext()
            }, 1500)
            return () => clearTimeout(timeout)
        }
    }, [isTimeUp])

    const handleNext = () => {
        const newAnswers = [...answers]
        newAnswers[currentQuestion] = selectedAnswer

        if (currentQuestion < questions.length - 1) {
            setAnswers(newAnswers)
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setTimeLeft(60)
            setIsTimeUp(false)
        } else {
            // Quiz completed
            const score = newAnswers.reduce<number>((acc, answer, idx) => {
                return answer === questions[idx].correct ? acc + 1 : acc
            }, 0)
            router.push(`/quiz/results?score=${score}&total=${questions.length}&tech=${tech}&difficulty=${difficulty}`)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setSelectedAnswer(answers[currentQuestion - 1])
            setTimeLeft(60)
            setIsTimeUp(false)
        }
    }

    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">
            {/* Header */}
            <div className="border-b border-border/50">
                <div className="container mx-auto px-4 h-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          Question {currentQuestion + 1} of {questions.length}
                        </span>
                    </div>
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-full glass-card ${timeLeft <= 10 ? "ring-2 ring-red-500" : ""}`}
                    >
                        <Clock className={`h-4 w-4 ${timeLeft <= 10 ? "text-red-500" : "text-accent"}`} />
                        <span className={`text-sm font-mono font-semibold ${timeLeft <= 10 ? "text-red-500" : ""}`}>
                          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                        </span>
                    </div>
                </div>
                <Progress value={progress} className="h-1" />
            </div>

            <main className="">
                {isTimeUp && (
                    <div className="mb-6 glass-card p-4 rounded-lg border border-red-500/50 bg-red-500/10">
                        <div className="flex items-center gap-2 text-red-500">
                            <AlertCircle className="h-5 w-5" />
                            <span className="font-semibold">Time is up! Moving to next question...</span>
                        </div>
                    </div>
                )}

                <div className="glass-card p-8 bg-white/5 backdrop-blur-sm rounded-md">
                    <div className="space-y-8">
                        {/* Question */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-2">
                                {tech.toUpperCase()} • {difficulty.toUpperCase()}
                            </div>
                            <h2 className="text-xl font-semibold text-balance leading-relaxed">
                                {questions[currentQuestion].question}
                            </h2>
                        </div>

                        {/* Options */}
                        <div className="space-y-3">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedAnswer(index)}
                                    disabled={isTimeUp}
                                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                                        selectedAnswer === index
                                            ? "border-accent bg-accent/20 ring-2 ring-accent"
                                            : "border-border/50 glass-card glass-hover"
                                    } ${isTimeUp ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                                                selectedAnswer === index ? "border-accent bg-accent text-accent-foreground" : "border-border"
                                            }`}
                                        >
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <span className="text-sm font-light">{option}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between pt-4">
                            <button
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0 || isTimeUp}
                                className="flex items-center justify-center glass-card bg-transparent px-2 py-2 rounded-md shadow-md cursor-pointer hover:bg-white/5"
                            >
                                <SkipBack className="w-4 h-4 mx-2" /> Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={selectedAnswer === null && !isTimeUp}
                                className="flex items-center justify-center bg-accent hover:bg-accent/90 px-2 py-2 rounded-md shadow-md cursor-pointer"
                            >
                                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"} <SkipForward className="w-4 h-4 mx-2" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Question Navigator */}
                <div className="mt-8 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground">Question Navigator</h3>
                    <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-2">
                        {questions.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentQuestion(index)
                                    setSelectedAnswer(answers[index])
                                    setTimeLeft(60)
                                    setIsTimeUp(false)
                                }}
                                className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all shadow-lg ${
                                    index === currentQuestion
                                        ? "bg-accent text-accent-foreground"
                                        : answers[index] !== null
                                            ? "bg-accent/30 text-accent"
                                            : "glass-card glass-hover"
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default function QuizTakePage() {
    return (
        <Suspense fallback={<div>Loading quiz...</div>}>
            <QuizTakeContent />
        </Suspense>
    )
}
