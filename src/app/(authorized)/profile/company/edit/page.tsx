"use client"

import type React from "react"

import {useState} from "react"
import {Code2, ArrowLeft, Plus, X} from "lucide-react"
import Link from "next/link"
import {useRouter} from "next/navigation"

export default function EditProfilePage() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: "John Doe",
        title: "Senior Full Stack Developer",
        location: "San Francisco, CA",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        website: "johndoe.dev",
        github: "johndoe",
        linkedin: "johndoe",
        bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love solving complex problems and mentoring junior developers.",
    })

    const [skills, setSkills] = useState([
        "React",
        "TypeScript",
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "GraphQL",
        "Tailwind CSS",
        "Python",
    ])
    const [newSkill, setNewSkill] = useState("")

    const [experience, setExperience] = useState([
        {
            title: "Senior Full Stack Developer",
            company: "TechCorp",
            location: "San Francisco, CA",
            period: "2021 - Present",
            description:
                "Leading development of core platform features, mentoring junior developers, and architecting scalable solutions.",
        },
        {
            title: "Full Stack Developer",
            company: "StartupXYZ",
            location: "Remote",
            period: "2019 - 2021",
            description: "Built and maintained multiple client-facing applications using React and Node.js.",
        },
    ])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()])
            setNewSkill("")
        }
    }

    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove))
    }

    const handleSave = () => {
        console.log("[v0] Saving profile:", {formData, skills, experience})
        router.push("/profile")
    }

    return (
        <div className="container mx-auto px-4 py-4 space-y-6">

            <div>
                <Link href="/profile/company" className="hover:cursor-pointer">
                    <button
                        className="inline-flex items-center gap-2 mb-2 text-white/70 hover:text-white hover:bg-white/10 hover:rounded-md px-2 py-2 hover:cursor-pointer">
                        <ArrowLeft className="h-4 w-4 mr-2"/> Back to Profile
                    </button>
                </Link>
            </div>


            <div className="glass-card p-8 border bg-white/5 backdrop-blur-sm rounded-xl mb-6">
                <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>

                <div className="space-y-6">
                    <div>
                        <div>
                            <label className="form-label">Company Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Phone</label>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Location</label>
                        <input
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Website</label>
                            <input
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">GitHub Username</label>
                            <input
                                name="github"
                                value={formData.github}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">LinkedIn
                                Username</label>
                            <input
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={4}
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="flex gap-4 mt-8">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2">
                        Save Changes
                    </button>
                    <Link href="/profile" className="flex-1">
                        <button
                            className="w-full border-white/20 text-white hover:bg-red-500 border-2 rounded-md py-2">
                            Cancel
                        </button>
                    </Link>
                </div>

            </div>






        </div>
    )
}
