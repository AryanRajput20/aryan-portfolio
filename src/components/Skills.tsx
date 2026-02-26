"use client";

import { motion } from "framer-motion";

const skills = [
  "Kotlin",
  "Jetpack Compose",
  "KMP",
  "MVVM",
  "Hilt",
  "Coroutines",
  "Firebase",
  "Room",
];

export default function Skills() {
  return (
    <section className="py-32 px-8">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl text-center border border-white/10"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}