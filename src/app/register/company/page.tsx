"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Alert, AlertDescription } from "@/components/ui/alert"
import { Building2, ArrowLeft } from "lucide-react"
// import { Textarea } from "@/components/ui/textarea"

export default function CompanyRegisterPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        website: "",
        description: "",
    })
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters")
            return
        }

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            router.push("/dashboard/company")
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 p-4 py-12">
            <div className="w-full max-w-2xl space-y-6">

                <div className="glass-card rounded-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1 mb-6">
                            <div className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-accent" />
                                <h2 className="text-2xl font-bold text-foreground">Create Company Account</h2>
                            </div>
                            <p className="text-sm text-muted-foreground">Join our platform to find talented developers</p>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to home
                            </Link>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="companyName" className="form-label">
                                        Company Name <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Acme Inc."
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="website" className="form-label">
                                        Company Website <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="website"
                                        name="website"
                                        type="url"
                                        placeholder="https://example.com"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="form-label">
                                    Work Email <span className="text-destructive">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="description" className="form-label">
                                    Company Description <span className="text-destructive">*</span>
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Tell us about your company..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="form-input"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="password" className="block mb-2 text-sm text-white font-light">
                                        Password <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Min. 8 characters"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Re-enter password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-6">
                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md py-2"
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating account..." : "Create Company Account"}
                            </button>

                            <p className="text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link href="/login" className="font-medium text-accent hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
