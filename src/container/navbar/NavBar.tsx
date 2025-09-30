import { House, ChevronDown, User, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            SkillSync
                        </h1>
                    </div>

                    {/* Desktop Center Button */}
                    <div className="hidden md:flex items-center">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                            <House className="h-4 w-4 mr-2" />
                            One
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                            <House className="h-4 w-4 mr-2" />
                            Two
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                            <House className="h-4 w-4 mr-2" />
                            Three
                        </button>
                    </div>

                    {/* Desktop User Dropdown */}
                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <button
                                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                            >
                                <User className="h-4 w-4 mr-2" />
                                User Name
                                <ChevronDown className="h-4 w-4 ml-2" />
                            </button>

                            {/* Dropdown Menu */}
                            {isUserDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg z-50">
                                    <div className="py-1">
                                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <User className="h-4 w-4 mr-2" />
                                            View Profile
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <Settings className="h-4 w-4 mr-2" />
                                            Edit Profile
                                        </button>
                                        <div className="border-t my-1"></div>
                                        <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t pt-4">
                        <div className="flex flex-col space-y-3">
                            <button className="flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                <House className="h-4 w-4 mr-2" />
                                Home
                            </button>

                            <div className="border-t my-2"></div>

                            <button className="flex items-center justify-center rounded-md text-sm text-gray-700 hover:bg-gray-100 h-10 px-4 py-2">
                                <User className="h-4 w-4 mr-2" />
                                View Profile
                            </button>
                            <button className="flex items-center justify-center rounded-md text-sm text-gray-700 hover:bg-gray-100 h-10 px-4 py-2">
                                <Settings className="h-4 w-4 mr-2" />
                                Edit Profile
                            </button>
                            <button className="flex items-center justify-center rounded-md text-sm text-red-600 hover:bg-gray-100 h-10 px-4 py-2">
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay to close dropdowns when clicking outside */}
            {(isUserDropdownOpen || isMobileMenuOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setIsUserDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                    }}
                />
            )}
        </nav>
    );
}