"use client"

import type React from "react"
import {useState} from "react"
import Link from "next/link"
import { ArrowLeft} from "lucide-react"
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     setError("")
    //     setIsLoading(true)
    //
    //     // Simulate API call
    //     setTimeout(() => {
    //         if (email && password) {
    //             // Redirect based on user type
    //             if (userType === "company") {
    //                 router.push("/dashboard/company")
    //             } else {
    //                 router.push("/dashboard/developer")
    //             }
    //         } else {
    //             setError("Please fill in all fields")
    //             setIsLoading(false)
    //         }
    //     }, 1000)
    // }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        console.log("Form submitted");
        router.push("/dashboard"); // redirect
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 p-4">
            <div className="glass-card w-full max-w-md rounded-xl p-6">
                <div className="flex flex-col space-y-1 mb-6 justify-center">
                    <div className="flex items-center justify-end">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                        >
                            <ArrowLeft className="h-4 w-4"/>
                            Back to home
                        </Link>
                    </div>
                    <p className="flex text-sm text-muted-foreground justify-center">Enter your credentials to access
                        your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm text-white font-light">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-background/50 border border-border/100 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="name@flowbite.com" required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-light text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-background/50 border border-border/100 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <button
                            type="submit"
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md py-2"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>

                        <p className="text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href={`/`} className="font-medium text-accent hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
