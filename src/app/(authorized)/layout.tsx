"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";
import {Navbar} from "@/container/navbar/NavBar";

const navItems = [
    {name: "Home", href: "/dashboard"},
    {name: "Profile", href: "/dashboard/profile"},
    {name: "Settings", href: "/dashboard/settings"},
];

export default function AuthorizedLayout({children}: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Navbar */}
            <Navbar/>

            {/* Page content */}
            <main
                className="flex-1 p-6 bg-gray-50"
                style={{
                    backgroundImage: "url('/bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {children}
            </main>
        </div>
    );
}
