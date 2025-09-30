import Link from "next/link"
import { Building2, Code2 } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 p-4">
            <div className="w-full max-w-md space-y-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight text-balance bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                        Welcome to _________
                    </h1>
                    <p className="text-muted-foreground text-lg">Connect companies with talented developers</p>
                </div>

                <div className="space-y-4">
                    <Link href="/login" className="block">
                        <button className="w-full text-base h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
                            Sign In
                        </button>
                    </Link>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/50" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or create an account</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/register/company" className="block">
                            <div className="glass-card glass-hover w-full h-24 flex flex-col gap-2 items-center justify-center rounded-lg cursor-pointer">
                                <Building2 className="h-6 w-6 text-accent" />
                                <span className="text-sm font-medium text-foreground">Company</span>
                            </div>
                        </Link>

                        <Link href="/register/developer" className="block">
                            <div className="glass-card glass-hover w-full h-24 flex flex-col gap-2 items-center justify-center rounded-lg cursor-pointer">
                                <Code2 className="h-6 w-6 text-accent" />
                                <span className="text-sm font-medium text-foreground">Developer</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                    By continuing, you agree to our{" "}
                    <Link href="#" className="underline hover:text-foreground transition-colors">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    )
}
