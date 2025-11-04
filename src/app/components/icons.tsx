import React from 'react';

export const CopyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M5 15V3a2 2 0 012-2h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ResetIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 5v-2l-3 3 3 3V7a5 5 0 110 10 5 5 0 01-4.9-4H5.1A7 7 0 1012 5z"
      fill="currentColor"
    />
  </svg>
);

export const InfoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="10" x2="12" y2="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
  </svg>
);

export const BackIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ImageIcon: React.FC<{ size?: number; className?: string }> = ({ size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="9" r="2.2" fill="currentColor" />
    <path d="M4.5 17l5.5-5 4 3 5.5-4.5V18H4.5z" fill="currentColor" opacity="0.18" />
    <path d="M4.5 17l5.5-5 4 3 5.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShapesIcon: React.FC<{ size?: number; className?: string }> = ({ size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
    <rect x="12.5" y="12.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 5l3.5 6h-7L16 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
);

export const PersonIcon: React.FC<{ size?: number; className?: string }> = ({ size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
    <path d="M5 19c0-3.3 3.2-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StarIcon: React.FC<{ size?: number; className?: string }> = ({ size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.4l6.1-.9L12 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);