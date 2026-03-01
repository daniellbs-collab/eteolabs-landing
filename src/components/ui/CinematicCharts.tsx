'use client';

import { motion } from 'framer-motion';
import { useId, useMemo } from 'react';
import { cn } from '@/lib/utils';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

type PaletteName = 'mint' | 'ocean' | 'sunset' | 'violet';

const palettes: Record<PaletteName, [string, string, string]> = {
  mint: ['#EFF7F3', '#CFE7DA', '#7D9F8C'],
  ocean: ['#E6F6FF', '#8FD6FF', '#467AB3'],
  sunset: ['#FFE9C6', '#FFAA78', '#E85D68'],
  violet: ['#F1E8FF', '#C2A1FF', '#7250D8'],
};

function getPalette(name: PaletteName): [string, string, string] {
  return palettes[name];
}

function buildCoordinates(values: number[], width: number, height: number) {
  if (values.length <= 1) return [];

  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(max - min, 1);
  const step = width / (values.length - 1);

  return values.map((value, index) => {
    const x = index * step;
    const y = height - ((value - min) / range) * height;
    return { x, y, value };
  });
}

export function SparklineChart({
  values,
  className,
  palette = 'mint',
  label = 'Tendência',
}: {
  values: number[];
  className?: string;
  palette?: PaletteName;
  label?: string;
}) {
  const uid = useId();
  const lineId = `sparkline-${uid}`;
  const fillId = `sparkline-fill-${uid}`;
  const width = 340;
  const height = 110;
  const [light, mid, deep] = getPalette(palette);

  const coords = useMemo(() => buildCoordinates(values, width, height), [values]);
  const points = useMemo(
    () => coords.map(({ x, y }) => `${x},${y}`).join(' '),
    [coords]
  );

  return (
    <div className={cn('group relative rounded-2xl border border-white/10 bg-black/25 p-4 overflow-hidden', className)}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${mid}22 0%, transparent 52%, ${deep}20 100%)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between mb-2">
        <p className="text-xs uppercase tracking-[0.16em] text-cyan-primary font-mono">{label}</p>
        <p className="text-xs text-gray-500">{`${values.length} pontos`}</p>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="relative z-10 w-full h-[120px]">
        <defs>
          <linearGradient id={lineId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={deep} />
            <stop offset="45%" stopColor={mid} />
            <stop offset="100%" stopColor={light} />
          </linearGradient>
          <linearGradient id={fillId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`${mid}66`} />
            <stop offset="100%" stopColor={`${mid}03`} />
          </linearGradient>
        </defs>

        <polyline
          fill={`url(#${fillId})`}
          stroke="none"
          points={`${points} ${width},${height} 0,${height}`}
        />

        <motion.polyline
          initial={{ pathLength: 0, opacity: 0.18 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 1.1, ease: EASE_OUT }}
          fill="none"
          stroke={`url(#${lineId})`}
          strokeWidth="3"
          points={points}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {coords.map((point, index) => (
          <motion.circle
            key={`dot-${index}`}
            cx={point.x}
            cy={point.y}
            r="3.4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ delay: index * 0.04, duration: 0.35 }}
            fill={light}
            className="group-hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </svg>
    </div>
  );
}

export function ProgressRing({
  label,
  value,
  subtitle,
  className,
  palette = 'mint',
}: {
  label: string;
  value: number;
  subtitle: string;
  className?: string;
  palette?: PaletteName;
}) {
  const progress = Math.max(0, Math.min(value, 100));
  const [light, mid] = getPalette(palette);
  const style = {
    background: `conic-gradient(${mid} ${progress * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
  };

  return (
    <div className={cn('rounded-2xl border border-white/10 bg-black/25 p-5', className)}>
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-primary font-mono">{label}</p>
      <div className="mt-4 flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2 }}
          className="relative w-24 h-24 rounded-full p-[6px]"
          style={style}
        >
          <div className="h-full w-full rounded-full bg-[#0D1114] border border-white/10 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{progress}%</span>
          </div>
          <div className="absolute -inset-1 rounded-full pointer-events-none" style={{ boxShadow: `0 0 18px ${light}30` }} />
        </motion.div>
        <p className="text-sm text-gray-300 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

export function VerticalBars({
  bars,
  className,
  palette = 'sunset',
  title = 'Liquidez operacional',
}: {
  bars: number[];
  className?: string;
  palette?: PaletteName;
  title?: string;
}) {
  const [light, mid, deep] = getPalette(palette);

  return (
    <div className={cn('rounded-2xl border border-white/10 bg-black/25 p-5', className)}>
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-primary font-mono">{title}</p>
      <div className="mt-6 grid gap-3" style={{ gridTemplateColumns: `repeat(${bars.length}, minmax(0, 1fr))` }}>
        {bars.map((bar, index) => {
          const clamped = Math.max(10, Math.min(bar, 100));
          const heightPx = 18 + (clamped / 100) * 102;

          return (
            <div key={`bar-${bar}-${index}`} className="flex flex-col items-center gap-2">
              <div className="relative h-[128px] w-full overflow-hidden rounded-md border border-white/10 bg-white/[0.02]">
                <motion.div
                  initial={{ height: 12, opacity: 0.45 }}
                  whileInView={{ height: heightPx, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: EASE_OUT }}
                  whileHover={{ scaleY: 1.04 }}
                  className="absolute inset-x-1.5 bottom-1.5 rounded-[8px] transition-transform"
                  style={{
                    background: `linear-gradient(to top, ${deep} 0%, ${mid} 58%, ${light} 100%)`,
                    boxShadow: `0 0 20px ${mid}3D`,
                  }}
                />
              </div>
              <span className="text-[10px] text-gray-500">{`S${index + 1}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SegmentBars({
  title,
  segments,
  className,
}: {
  title: string;
  segments: Array<{ label: string; value: number; color: string }>;
  className?: string;
}) {
  const total = Math.max(
    segments.reduce((acc, segment) => acc + segment.value, 0),
    1
  );

  return (
    <div className={cn('rounded-2xl border border-white/10 bg-black/25 p-5', className)}>
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-primary font-mono">{title}</p>
      <div className="mt-4 h-3 rounded-full overflow-hidden border border-white/10 flex">
        {segments.map((segment) => (
          <motion.div
            key={segment.label}
            initial={{ width: 0 }}
            whileInView={{ width: `${(segment.value / total) * 100}%` }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            style={{ backgroundColor: segment.color }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2 text-xs">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: segment.color }} />
            <span className="text-gray-300">{segment.label}</span>
            <span className="text-gray-500 ml-auto">{segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SignalGrid({
  title,
  rows = 4,
  cols = 8,
  className,
}: {
  title: string;
  rows?: number;
  cols?: number;
  className?: string;
}) {
  const [light, mid, deep] = getPalette('violet');
  const cells = useMemo(() => {
    return Array.from({ length: rows * cols }, (_, index) => {
      const r = Math.floor(index / cols);
      const c = index % cols;
      const level = ((r * 17 + c * 11 + r * c * 3) % 100) / 100;
      return { key: `${r}-${c}`, level };
    });
  }, [rows, cols]);

  return (
    <div className={cn('rounded-2xl border border-white/10 bg-black/25 p-5', className)}>
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-primary font-mono">{title}</p>
      <div className="mt-4 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {cells.map((cell, index) => {
          const color = cell.level > 0.72 ? light : cell.level > 0.46 ? mid : deep;
          return (
            <motion.div
              key={cell.key}
              initial={{ opacity: 0.2, scale: 0.92 }}
              whileInView={{ opacity: 0.98, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.28, delay: index * 0.008 }}
              className="h-4 rounded-[4px] border border-white/10"
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function MetricPill({
  title,
  value,
  detail,
  tone = 'neutral',
}: {
  title: string;
  value: string;
  detail: string;
  tone?: 'neutral' | 'positive' | 'warning' | 'info';
}) {
  const toneStyles = {
    neutral: 'border-white/10 text-gray-400',
    positive: 'border-emerald-300/25 text-emerald-200',
    warning: 'border-amber-300/25 text-amber-200',
    info: 'border-sky-300/25 text-sky-200',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn('rounded-xl border bg-black/30 px-4 py-3', toneStyles[tone])}
    >
      <p className="text-[11px] uppercase tracking-[0.12em]">{title}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
      <p className="text-xs text-gray-500">{detail}</p>
    </motion.div>
  );
}
