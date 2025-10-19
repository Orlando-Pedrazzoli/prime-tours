import React from 'react';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerColor = 'primary' | 'white' | 'secondary';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
}) => {
  const sizeClasses: Record<SpinnerSize, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  const colorClasses: Record<SpinnerColor, string> = {
    primary: 'border-primary border-t-transparent',
    white: 'border-white border-t-transparent',
    secondary: 'border-secondary border-t-transparent',
  };

  return (
    <div className='flex items-center justify-center'>
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
        role='status'
        aria-label='Loading'
      >
        <span className='sr-only'>Carregando...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
