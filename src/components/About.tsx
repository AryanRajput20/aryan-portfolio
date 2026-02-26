"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Professional Summary */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-linear-to-br from-cyan-500/10 to-purple-500/10 
          p-8 rounded-2xl border border-cyan-400/30 
          shadow-[0_0_40px_rgba(0,255,255,0.3)] 
          backdrop-blur-lg md:col-span-2"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Professional Summary
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Mobile Application Developer specializing in Kotlin, Jetpack Compose, and Kotlin Multiplatform.
            Experienced in building scalable Android applications using MVVM and Clean Architecture.
            Strong expertise in REST API integration, Firebase services, and real-time systems like WebRTC.
            Passionate about writing maintainable code and delivering optimized user experiences.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-linear-to-br from-cyan-500/10 to-purple-500/10 
          p-8 rounded-2xl border border-cyan-400/30 
          shadow-[0_0_40px_rgba(0,255,255,0.3)] 
          backdrop-blur-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
            Education
          </h3>

          <p className="text-gray-300">
            MCA – The Northcap University (Expected July 2026)
          </p>
          <p className="text-gray-300 mt-2">
            BCA – IITM Janakpuri (June 2024)
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-linear-to-br from-purple-500/10 to-cyan-500/10 
          p-8 rounded-2xl border border-purple-400/30 
          shadow-[0_0_40px_rgba(168,85,247,0.4)] 
          backdrop-blur-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">
            Experience
          </h3>

          <div className="space-y-6 text-gray-300">

            <div>
              <h4 className="font-semibold text-white">
                Android Developer Intern
              </h4>
              <p className="text-sm text-gray-400">
                Vanisb Technology | New Delhi, India  
                June 2025 – December 2025
              </p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Improved code maintainability by 30% using MVVM.</li>
                <li>Integrated REST APIs & Firebase reducing latency by 25%.</li>
                <li>Optimized UI performance increasing responsiveness by 20%.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Android Developer Intern
              </h4>
              <p className="text-sm text-gray-400">
                IOT Websolutions Pvt. Ltd. | New Delhi, India  
                Jan 2024 – March 2024
              </p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Developed Android applications using Kotlin.</li>
                <li>Collaborated with designers for user-friendly UI.</li>
                <li>Managed code using Git & version control systems.</li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}