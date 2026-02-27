"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/aryan-resume.pdf";
    link.download = "aryan-resume.pdf";
    link.click();
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 rounded-2xl p-6 w-full max-w-4xl h-[85vh] border border-white/10 shadow-[0_0_50px_rgba(0,255,255,0.2)]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Aryan Resume</h2>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
          >
            <Download size={18} />
            Download
          </button>
        </div>

        <iframe
          src="/aryan-resume.pdf"
          className="w-full h-full rounded-lg"
        />

        <button
          onClick={onClose}
          className="mt-4 w-full bg-purple-500 py-2 rounded-lg hover:bg-purple-400 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}