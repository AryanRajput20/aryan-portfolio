"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="space-y-10">
        <motion.div whileHover={{ scale: 1.02 }} className="glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold">
            Android Developer Intern – Vanisb Technology
          </h3>
          <p className="text-gray-400 mt-2">
            Improved maintainability by 30%, reduced latency by 25%, 
            and boosted responsiveness by 20%.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold">
            Android Developer Intern – IOT Websolutions Pvt Ltd
          </h3>
          <p className="text-gray-400 mt-2">
            Built Kotlin applications, collaborated with designers, 
            and managed version control workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}