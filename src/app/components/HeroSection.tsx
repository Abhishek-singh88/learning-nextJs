import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[40]rem w-full rounded-md flex flex-col text-white items-center justify-center realtive overflow-hidden mx-auto py-10 md:py-0">
            <div className="py-30 relative z-10 w-full text-center">
                <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="blue" />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master NextJs</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static rendering.</p>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Don't click me!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;