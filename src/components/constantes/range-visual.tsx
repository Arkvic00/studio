
'use client';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RangeVisualProps {
    label: string;
    min: number;
    max: number;
    unit: string;
    icon: LucideIcon;
    colorClass: string;
}

export const RangeVisual = ({ label, min, max, unit, icon: Icon, colorClass }: RangeVisualProps) => (
    <div className="bg-background/50 p-4 rounded-2xl border border-border flex flex-col gap-3">
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Icon size={14} className={colorClass} /> {label}
            </span>
            <span className="text-[9px] text-slate-500 font-bold">{unit}</span>
        </div>
        <div className="relative h-2 bg-muted/30 rounded-full w-full mt-1">
            <div className={cn(`absolute top-0 left-[20%] right-[20%] h-full rounded-full opacity-30`, colorClass.replace('text-', 'bg-'))}></div>
            <div className={cn(`absolute top-0 left-[20%] w-[60%] h-full rounded-full opacity-80`, colorClass.replace('text-', 'bg-'))}></div>
        </div>
        <div className="flex justify-between text-white font-mono font-bold text-sm">
            <span>{min}</span>
            <span className="text-slate-500">-</span>
            <span>{max}</span>
        </div>
    </div>
);
