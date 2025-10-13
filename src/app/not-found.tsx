"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[clamp(5rem,10vw,10rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-2 text-lg text-neutral-400 max-w-md"
      >
        Üzgünüz, aradığınız sayfayı bulamadık. Belki yanlış bir linke tıkladın ya da sayfa taşındı.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-medium text-neutral-100 transition hover:bg-neutral-700 hover:border-neutral-600"
        >
          <ArrowLeft size={18} />
          Ana sayfaya dön
        </Link>
      </motion.div>
    </div>
  );
}
