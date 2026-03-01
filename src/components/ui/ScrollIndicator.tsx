'use client';

import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.9 }}
      className="absolute bottom-7 left-1/2 -translate-x-1/2 pointer-events-none"
    >
      <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/35 backdrop-blur-md px-4 py-2">
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/25 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-cyan-primary" />
        </motion.div>
        <span className="text-xs text-gray-300 tracking-wide">02/03 · Scroll down</span>
      </div>
    </motion.div>
  );
}
