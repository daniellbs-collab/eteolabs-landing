import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: 'standard' | 'interactive' | 'elevated' | 'subtle';
}

export function GlassCard({ children, className, variant = 'standard' }: GlassCardProps) {
    const variants = {
        standard: 'bg-gray-900/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl',
        interactive: 'bg-gray-900/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl hover:bg-gray-900/75 hover:border-cyan-400/15 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]',
        elevated: 'bg-gray-900/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-xl',
        subtle: 'bg-gray-900/40 backdrop-blur-md border border-white/[0.04] rounded-xl',
    };

    return (
        <div className={cn(variants[variant], className)}>
            {children}
        </div>
    );
}
