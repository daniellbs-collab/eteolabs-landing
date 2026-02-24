'use client';

import { motion } from 'framer-motion';

export function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
            <span className="text-xs text-gray-500 uppercase tracking-widest">
                Scroll
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5"
            >
                <div className="w-1 h-1.5 rounded-full bg-gray-400" />
            </motion.div>
        </motion.div>
    );
}
