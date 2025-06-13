import React from 'react';
import clsx from 'clsx'; // Удобно для динамических классов

type CheckIconProps = {
  active?: boolean;
  className?: string;
};

const UICheck: React.FC<CheckIconProps> = ({ active = false, className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={clsx(`cursor-pointer select-none fill-transparent ${className} ${!active ? 'stroke-text_color' : ''}`)} width="24" height="24" viewBox="0 0 24 24">
      <circle
        className={clsx(
          'transition-all',
          active ? 'opacity-0' : 'opacity-100'
        )}
        cx="12"
        cy="12.0001"
        r="11"
        stroke="inherit"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <path
        className={clsx(
          'transition-all',
          active ? 'opacity-100' : 'opacity-0'
        )}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37261 18.6274 3.05176e-05 12 3.05176e-05C5.37258 3.05176e-05 0 5.37261 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#2990FF"
      />
      <path
        className={clsx(
          'transition-all',
          active ? 'opacity-100' : 'opacity-0'
        )}
        d="M16.78 6.90204C17.2484 7.19475 17.3907 7.8117 17.098 8.28004L11.473 17.28C11.3022 17.5533 11.0102 17.7276 10.6886 17.748C10.3669 17.7685 10.0551 17.6327 9.85107 17.3833L6.47607 13.2583C6.12635 12.8308 6.18935 12.2008 6.61679 11.8511C7.04424 11.5014 7.67426 11.5644 8.02399 11.9918L10.516 15.0376L15.402 7.22004C15.6947 6.75171 16.3117 6.60933 16.78 6.90204Z"
        fill="white"
      />
    </svg>
  );
};

export default UICheck;
