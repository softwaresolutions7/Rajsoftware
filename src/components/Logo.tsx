import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 'md' }) => {
  const iconSize = 
    size === 'sm' ? 'w-8 h-8' : 
    size === 'lg' ? 'w-12 h-12' : 
    size === 'xl' ? 'w-16 h-16' : 'w-10 h-10';

  const textScale = 
    size === 'sm' ? 'text-lg' : 
    size === 'lg' ? 'text-2xl' : 
    size === 'xl' ? 'text-3xl' : 'text-xl';

  const subScale = 
    size === 'sm' ? 'text-[9px]' : 
    size === 'lg' ? 'text-[11px]' : 
    size === 'xl' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Gold RAJ Software Logo Emblem */}
      <div className={`relative ${iconSize} shrink-0 rounded-xl overflow-hidden border border-[#D4AF37]/60 shadow-lg shadow-black/50 bg-[#0B0F19] group`}>
        <img
          src="/assets/aistudio/RAJ_Software_Gold_Wall_Sign_efc988de.png"
          alt="RAJ Software Solution Logo"
          className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/30 rounded-xl pointer-events-none" />
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`${textScale} font-extrabold tracking-tight text-white font-sans`}>
              RAJ
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded text-[#D4AF37] font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/30 tracking-wider">
              SOLUTION
            </span>
          </div>
          <span className={`${subScale} text-slate-400 font-medium tracking-wider uppercase mt-1`}>
            Software Solution
          </span>
        </div>
      )}
    </div>
  );
};

