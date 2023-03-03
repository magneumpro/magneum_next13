"use client";
import { motion } from "framer-motion";

export default function Home() {
return (
<div className="snap-y snap-mandatory bg-[#1C1A22] w-screen h-screen">
<section className="snap-start w-screen h-screen">
<div>
<header className="w-screen h-screen bg-neutral-900">
<div
className="hero w-screen h-screen"
style={{ backgroundImage: `url("/hero.gif")` }}
>
<div className="hero-overlay bg-opacity-60"></div>

<motion.div
initial={{ y: -500, opacity: 0, scale: 0.3 }}
animate={{ y: 0, opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="hero-content text-center uppercase backdrop-blur-3xl rounded-xl border-2 border-purple-900/30"
>
<div className="font-mono">
<div className="ring-1 ring-purple-600/50 relative rounded-lg ml-4 mr-4 mb-4 py-1 px-3 text-sm leading-6 shadow-2xl shadow-black bg-neutral-900/50 text-purple-600 font-bold">
made with <span className="animate-ping">💜</span> using
nextjs + tailwindcss
</div>
<h1 className="mb-5 text-5xl font-medium">
<span className="animate-pulse hover:text-purple-700/50 text-purple-400/50">
experience{" "}
</span>
<span className="hover:text-purple-700/50">is </span>
<span className="hover:text-purple-700/50">the </span>
<span className="hover:text-purple-700/50">name </span>
<span className="hover:text-purple-700/50">everyone </span>
<span className="hover:text-purple-700/50">gives </span>
<span className="hover:text-purple-700/50">to </span>
<span className="hover:text-purple-700/50">their </span>
<span className="animate-pulse hover:text-purple-700/50 text-purple-400/50">
mistakes.{" "}
</span>
</h1>
</div>
</motion.div>
</div>
</header>
</div>
</section>
</div>
);
}
