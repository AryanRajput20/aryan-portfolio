"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "./MagneticButton";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Aryan
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Hey, I am Aryan 👋",
          1500,
          "I am a Mobile Application Developer",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="mt-6 text-xl text-gray-400"
      />

      <MagneticButton />

    </section>
  );
}