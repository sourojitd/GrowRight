import { useState } from 'react';
import { motion } from 'framer-motion';

interface ThoughtBubbleProps {
  imageUrl: string;
  alt: string;
}

export default function ThoughtBubble({ imageUrl, alt }: ThoughtBubbleProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="absolute -top-2 -right-3 z-30 pointer-events-none" style={{ width: 180 }}>
      {/* Main cloud */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        className="relative"
      >
        {/* Cloud shape via layered rounded divs */}
        <div
          className="relative rounded-[28px] overflow-hidden shadow-float border border-white/40"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          }}
        >
          {/* Inner content */}
          <div className="p-2.5">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-surface-secondary to-surface-tertiary">
              {!imgError ? (
                <img
                  src={imageUrl}
                  alt={alt}
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🧸
                </div>
              )}
            </div>
            <p className="text-caption text-text-secondary text-center mt-1.5 leading-tight truncate px-1">
              {alt}
            </p>
          </div>
        </div>

        {/* Thought trail circles — 3 descending bubbles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 400, damping: 20 }}
          className="absolute -bottom-4 left-6 w-5 h-5 rounded-full border border-white/40"
          style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 400, damping: 20 }}
          className="absolute -bottom-8 left-2 w-3.5 h-3.5 rounded-full border border-white/40"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22, type: 'spring', stiffness: 400, damping: 20 }}
          className="absolute -bottom-11 -left-1 w-2.5 h-2.5 rounded-full border border-white/40"
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      </motion.div>
    </div>
  );
}
