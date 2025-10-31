import React from 'react';

export const CopyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
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