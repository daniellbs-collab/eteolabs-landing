import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: 'standard' | 'interactive' | 'elevated' | 'subtle';
}

export function GlassCard({ children, className, variant = 'standard' }: GlassCardProps) {
    const variants = {
        standard: 'bg-[#0E1214]/70 backdrop-blur-xl border border-white/[0.08] rounded-3xl',
        interactive: 'group bg-[#0E1214]/72 backdrop-blur-xl border border-white/[0.09] rounded-3xl hover:bg-[#13181B]/82 hover:border-cyan-primary/25 transition-all duration-500 hover:shadow-[0_0_28px_rgba(211,229,220,0.08)]',
        elevated: 'bg-[#0D1113]/82 backdrop-blur-2xl border border-white/[0.1] rounded-2xl shadow-xl',
        subtle: 'bg-[#0E1214]/55 backdrop-blur-md border border-white/[0.05] rounded-xl',
    };

    return (
        <div className={cn('relative overflow-hidden', variants[variant], className)}>
            <div
                className={cn(
                    'pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500',
                    'bg-[radial-gradient(80%_65%_at_15%_0%,rgba(211,229,220,0.22)_0%,rgba(211,229,220,0.06)_45%,transparent_85%)]',
                    variant === 'interactive' ? 'group-hover:opacity-100' : 'opacity-70'
                )}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
