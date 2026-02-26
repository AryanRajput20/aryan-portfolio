"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center">
      <h2 className="text-4xl font-bold mb-10">
        Contact Me
      </h2>

      <div className="flex justify-center gap-10 text-cyan-400">

        <a href="https://github.com/AryanRajput20">
          <Github size={28} />
        </a>

        <a href="https://www.linkedin.com/in/aryan-rajput21/">
          <Linkedin size={28} />
        </a>

        <a href="mailto:aryan.tech.professional@gmail.com">
          <Mail size={28} />
        </a>

        <a href="tel:+917982086362">
          <Phone size={28} />
        </a>

      </div>
    </section>
  );
}