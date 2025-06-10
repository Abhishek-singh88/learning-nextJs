"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "../lib/utils";

export default function GridWithInfiniteCards() {
  return (
    <div className="relative flex h-[50rem] w-full flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade Mask */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6 px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black dark:text-white">
          Moving Card with Grid
        </h1>

        {/* Infinite Moving Cards */}
        <div className="w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Next.js helped us ship our product 3x faster with built-in routing and SSR. Game changer for our dev team!",
    name: "Alex Kim",
    title: "Frontend Lead at StartupX",
  },
  {
    quote:
      "The performance gains we saw after switching to Next.js were immediate. Our Lighthouse scores went through the roof!",
    name: "Priya Nair",
    title: "Web Performance Engineer",
  },
  {
    quote:
      "Built-in API routes in Next.js saved us from setting up a separate backend. Perfect for full-stack apps.",
    name: "David Chen",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "Deploying with Vercel + Next.js is a dream. CI/CD, preview URLs, and edge functions out of the box!",
    name: "Emma Garcia",
    title: "DevOps Engineer",
  },
  {
    quote:
      "With Next.js, we easily created a blazing fast static blog that still supports dynamic features when needed.",
    name: "Satoshi Yamamoto",
    title: "Technical Blogger",
  },
  {
    quote:
      "App directory, server actions, and React Server Components in Next.js 14 are seriously powerful.",
    name: "Liam O’Connor",
    title: "React Architect",
  },
  {
    quote:
      "Switching from CRA to Next.js felt like upgrading from a bicycle to a Tesla.",
    name: "Isabella Rossi",
    title: "Frontend Engineer",
  },
];
