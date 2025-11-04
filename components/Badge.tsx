import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium transition-all duration-200';

  const variantClasses = {
    default: 'bg-background-tertiary text-text-primary border border-border',
    outline: 'bg-transparent text-text-primary border border-text-primary',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
