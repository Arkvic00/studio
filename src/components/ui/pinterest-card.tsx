import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PinterestCardProps {
  children: ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const PinterestCard = ({
  children,
  color = 'bg-secondary/20',
  className = '',
  onClick,
}: PinterestCardProps) => (
  <div
    onClick={onClick}
    className={cn(
      'rounded-4xl shadow-xl border border-white/5',
      color,
      className,
      onClick
        ? 'cursor-pointer hover:scale-[1.01] active:scale-95 transition-all duration-300'
        : ''
    )}
  >
    <div className="p-6">{children}</div>
  </div>
);
