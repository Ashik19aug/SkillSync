"use client";

import {ReactNode} from "react";
import {Navbar} from "@/container/navbar/NavBar";

export default function AuthorizedLayout({children}: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar/>
            {/* Page content */}
            <main
                className="flex-1 p-2 bg-gray-50"
                style={{
                    backgroundImage: "url('/bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                {children}
            </main>
        </div>
    );
}
