/**
 * Soothing animated gradient background with glassmorphism mesh.
 * Used on landing, login, register, and other public pages.
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden>
      {/* Base wash so it's not pure white */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/40 to-teal-50/60" />

      {/* Color-shifting gradient orbs */}
      <div className="absolute top-[-18%] left-[-8%] w-[55vw] max-w-[600px] aspect-square rounded-full blur-[80px] opacity-[0.35] animate-orb-1 bg-[#0071E3]" />
      <div className="absolute bottom-[-12%] right-[-6%] w-[50vw] max-w-[520px] aspect-square rounded-full blur-[90px] opacity-[0.30] animate-orb-2 bg-[#AF52DE]" />
      <div className="absolute top-[35%] right-[15%] w-[35vw] max-w-[380px] aspect-square rounded-full blur-[70px] opacity-[0.25] animate-orb-3 bg-[#5AC8FA]" />
      <div className="absolute bottom-[25%] left-[10%] w-[30vw] max-w-[320px] aspect-square rounded-full blur-[60px] opacity-[0.22] animate-orb-4 bg-[#34C759]" />

      {/* Light veil to soften the orbs */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
}
