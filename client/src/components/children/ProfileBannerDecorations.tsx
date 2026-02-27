import { motion } from 'framer-motion';

interface Props {
  theme: 'girl' | 'boy' | 'neutral';
}

const float = (delay: number, duration: number, x: number, y: number) => ({
  initial: { x: 0, y: 0, opacity: 0 },
  animate: {
    x: [0, x, 0],
    y: [0, y, 0],
    opacity: [0.25, 0.4, 0.25],
    transition: { delay, duration, repeat: Infinity, repeatType: 'mirror' as const, ease: 'easeInOut' as const },
  },
});

function GirlDecorations() {
  return (
    <>
      {/* Butterfly */}
      <motion.svg {...float(0, 12, 15, -10)} className="absolute top-3 left-[10%] w-5 h-5 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M12 12C9 6 2 4 2 8s5 6 10 4zm0 0c3-6 10-8 10-4s-5 6-10 4z" fill="#EC4899" opacity="0.5" />
        <line x1="12" y1="8" x2="12" y2="16" stroke="#EC4899" strokeWidth="0.8" opacity="0.5" />
      </motion.svg>
      {/* Flower */}
      <motion.svg {...float(2, 16, -10, 8)} className="absolute top-6 right-[15%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#F472B6" opacity="0.4" />
        <circle cx="12" cy="7" r="2.5" fill="#F9A8D4" opacity="0.35" />
        <circle cx="16" cy="10" r="2.5" fill="#F9A8D4" opacity="0.35" />
        <circle cx="15" cy="15" r="2.5" fill="#F9A8D4" opacity="0.35" />
        <circle cx="9" cy="15" r="2.5" fill="#F9A8D4" opacity="0.35" />
        <circle cx="8" cy="10" r="2.5" fill="#F9A8D4" opacity="0.35" />
      </motion.svg>
      {/* Heart */}
      <motion.svg {...float(4, 10, 8, -12)} className="absolute bottom-4 left-[30%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z" fill="#F472B6" opacity="0.35" />
      </motion.svg>
      {/* Star */}
      <motion.svg {...float(1, 14, -12, 6)} className="absolute bottom-6 right-[25%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" fill="#A855F7" opacity="0.3" />
      </motion.svg>
    </>
  );
}

function BoyDecorations() {
  return (
    <>
      {/* Rocket */}
      <motion.svg {...float(0, 14, 10, -12)} className="absolute top-2 left-[12%] w-5 h-5 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 8 8 8 14l4 4 4-4c0-6-4-12-4-12z" fill="#3B82F6" opacity="0.4" />
        <path d="M8 14l-2 2 2 2v-4zm8 0l2 2-2 2v-4z" fill="#60A5FA" opacity="0.3" />
        <circle cx="12" cy="11" r="1.5" fill="#93C5FD" opacity="0.5" />
      </motion.svg>
      {/* Planet */}
      <motion.svg {...float(3, 18, -8, 10)} className="absolute top-4 right-[18%] w-5 h-5 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="#06B6D4" opacity="0.35" />
        <ellipse cx="12" cy="12" rx="10" ry="3" stroke="#06B6D4" strokeWidth="0.8" opacity="0.25" transform="rotate(-20 12 12)" fill="none" />
      </motion.svg>
      {/* Star */}
      <motion.svg {...float(1, 12, 12, -8)} className="absolute bottom-3 left-[35%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" fill="#3B82F6" opacity="0.3" />
      </motion.svg>
      {/* Paper Plane */}
      <motion.svg {...float(2, 20, -14, 6)} className="absolute bottom-5 right-[20%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M2 12l20-9-9 20-2-8z" fill="#60A5FA" opacity="0.35" />
        <path d="M11 15l11-12" stroke="#93C5FD" strokeWidth="0.6" opacity="0.3" />
      </motion.svg>
    </>
  );
}

function NeutralDecorations() {
  return (
    <>
      {/* Cloud */}
      <motion.svg {...float(0, 16, 12, -6)} className="absolute top-3 left-[15%] w-6 h-4 pointer-events-none" viewBox="0 0 32 20" fill="none">
        <path d="M8 18a6 6 0 01-.5-12A8 8 0 0123 8a5 5 0 011 10H8z" fill="#34D399" opacity="0.3" />
      </motion.svg>
      {/* Leaf */}
      <motion.svg {...float(2, 14, -10, 8)} className="absolute top-5 right-[20%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M17 8C8 10 5 16 5 20c5-2 8-4 12-12z" fill="#34D399" opacity="0.35" />
        <path d="M5 20Q10 14 17 8" stroke="#10B981" strokeWidth="0.6" opacity="0.3" fill="none" />
      </motion.svg>
      {/* Star */}
      <motion.svg {...float(1, 12, 8, -10)} className="absolute bottom-4 left-[40%] w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" fill="#5AC8FA" opacity="0.3" />
      </motion.svg>
    </>
  );
}

export default function ProfileBannerDecorations({ theme }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {theme === 'girl' && <GirlDecorations />}
      {theme === 'boy' && <BoyDecorations />}
      {theme === 'neutral' && <NeutralDecorations />}
    </div>
  );
}
