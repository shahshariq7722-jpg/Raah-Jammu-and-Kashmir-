import React from 'react';

interface CompassLogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'brand';
}

export const CompassLogo: React.FC<CompassLogoProps> = ({ 
  className = 'w-9 h-9', 
  size = 36,
  variant = 'brand' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RAAH J&K Compass Logo"
      role="img"
    >
      {/* Outer subtle ring */}
      <circle cx="50" cy="50" r="46" stroke={variant === 'light' ? '#FFFFFF' : '#176B5B'} strokeWidth="2.5" strokeOpacity="0.25" />
      <circle cx="50" cy="50" r="40" stroke={variant === 'light' ? '#FFFFFF' : '#176B5B'} strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.4" />
      
      {/* Compass Needle - North (Warm Orange) */}
      <polygon 
        points="50,12 59,48 50,44" 
        fill="#F3A83B" 
      />
      <polygon 
        points="50,12 41,48 50,44" 
        fill="#E59828" 
      />

      {/* Compass Needle - South (Deep Green or White) */}
      <polygon 
        points="50,88 59,52 50,56" 
        fill={variant === 'light' ? '#E2E8F0' : '#104D43'} 
      />
      <polygon 
        points="50,88 41,52 50,56" 
        fill={variant === 'light' ? '#CBD5E1' : '#176B5B'} 
      />

      {/* Compass Needle - East (Subtle) */}
      <polygon 
        points="88,50 52,41 56,50" 
        fill={variant === 'light' ? '#CBD5E1' : '#176B5B'} 
        fillOpacity="0.8"
      />
      {/* Compass Needle - West (Subtle) */}
      <polygon 
        points="12,50 48,59 44,50" 
        fill={variant === 'light' ? '#94A3B8' : '#104D43'} 
        fillOpacity="0.8"
      />

      {/* Center Pivot Jewel */}
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" stroke="#104D43" strokeWidth="2" />
      <circle cx="50" cy="50" r="2.5" fill="#F3A83B" />

      {/* Cardinal Marker dots */}
      <circle cx="50" cy="6" r="2" fill="#F3A83B" />
      <circle cx="94" cy="50" r="1.5" fill={variant === 'light' ? '#FFFFFF' : '#176B5B'} opacity="0.6" />
      <circle cx="50" cy="94" r="1.5" fill={variant === 'light' ? '#FFFFFF' : '#176B5B'} opacity="0.6" />
      <circle cx="6" cy="50" r="1.5" fill={variant === 'light' ? '#FFFFFF' : '#176B5B'} opacity="0.6" />
    </svg>
  );
};
