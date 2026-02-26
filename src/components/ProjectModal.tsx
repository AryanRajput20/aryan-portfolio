"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm 
      flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-white/10
        shadow-[0_0_50px_rgba(0,255,255,0.2)]
        rounded-2xl max-w-2xl w-full p-8
        overflow-y-auto max-h-[90vh]"
      >
        {/* Title */}
        <h3 className="text-3xl font-bold mb-4">
          {project.title}
        </h3>

        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-xl mb-6"
        />

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.desc}
        </p>

        {/* Tech Stack */}
        {project.tech && (
          <>
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">
              Tech Stack
            </h4>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm 
                  bg-cyan-500/20 border border-cyan-400/30 
                  rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Highlights */}
        {project.highlights && (
          <>
            <h4 className="text-lg font-semibold text-purple-400 mb-3">
              Key Highlights
            </h4>

            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              {project.highlights.map(
                (point: string, index: number) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6 flex-wrap">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 
              bg-white/10 rounded-lg 
              hover:bg-white/20 transition"
            >
              <Github size={18} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 
              bg-cyan-500 rounded-lg 
              hover:bg-cyan-400 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-purple-500 py-2 rounded-lg 
          hover:bg-purple-400 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}