"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CareBuddy",
    desc: "Healthcare and emergency assistance mobile application designed with scalable architecture.",
    image: "/carebuddy.png",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Retrofit"],
    highlights: [
      "Implemented scalable MVVM architecture",
      "Integrated emergency contact & medical assistance features",
      "Optimized UI performance for smooth experience",
    ],
    github: "https://github.com/AryanRajput20/CareBuddy",
    demo: "#",
  },
  {
    title: "MyWallet",
    desc: "Real-time cryptocurrency portfolio tracking application with analytics dashboard.",
    image: "/mywallet.png",
    tech: ["Kotlin", "Jetpack Compose", "REST API", "Coroutines", "Room DB"],
    highlights: [
      "Live crypto price tracking via API integration",
      "Built transaction analytics dashboard",
      "Offline data caching using Room Database",
    ],
    github: "https://github.com/AryanRajput20/MyWallet",
    demo: "#",
  },
  {
    title: "Video Chat & Reels App",
    desc: "Real-time video communication platform integrated with short-form video (Reels) feature.",
    image: "/videochat-reels.png",
    tech: [
      "Kotlin",
      "WebRTC",
      "Firebase",
      "Jetpack Compose",
      "Coroutines",
    ],
    highlights: [
      "Implemented real-time video calling using WebRTC",
      "Integrated Firebase Authentication & Firestore backend",
      "Built short-video (Reels) feature for enhanced engagement",
      "Optimized media streaming performance for low latency",
    ],
    github: "https://github.com/AryanRajput20/video-reels-videochat-app",
    demo: "#",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(project)}
            className="cursor-pointer p-8 bg-white/5 
            backdrop-blur-lg rounded-2xl 
            border border-white/10 
            hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]
            transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {project.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}