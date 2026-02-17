
'use client';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string | number;
  onChange: (value: string) => void;
  icon?: LucideIcon;
  suffix?: string;
  subLabel?: string;
}

export const GlassInput = ({
  label,
  icon: Icon,
  suffix,
  subLabel,
  ...props
}: GlassInputProps) => (
  <div className="flex flex-col gap-2 w-full">
    {label && (
      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-2">
        {label}
      </label>
    )}
    <div className="relative group">
      {Icon && (
        <Icon
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
          size={18}
        />
      )}
      <input
        {...props}
        onChange={(e) => props.onChange(e.target.value)}
        className={cn(
          'w-full bg-card border-2 border-transparent focus:border-ring/50 rounded-2xl p-4 text-white font-bold outline-none transition-all placeholder:text-muted-foreground',
          Icon ? 'pl-12' : '',
          suffix ? 'pr-16' : '',
          props.disabled && 'opacity-50 cursor-not-allowed'
        )}
      />
      {suffix && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground uppercase">
          {suffix}
        </span>
      )}
    </div>
    {subLabel && (
      <span className="text-[10px] text-accent font-bold ml-2 animate-in fade-in slide-in-from-top-1">
        {subLabel}
      </span>
    )}
  </div>
);
