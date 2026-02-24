/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                void: '#030712',
                deep: '#0A0F1E',
                surface: '#111827',
                elevated: '#1F2937',
                cyan: {
                    primary: '#00F0FF',
                    glow: 'rgba(0, 240, 255, 0.25)',
                    soft: 'rgba(0, 240, 255, 0.08)',
                },
                magenta: {
                    pop: '#FF00E5',
                    glow: 'rgba(255, 0, 229, 0.25)',
                    soft: 'rgba(255, 0, 229, 0.08)',
                },
            },
            fontFamily: {
                display: ['Outfit', 'sans-serif'],
                body: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'neon-pulse': 'neon-pulse 3s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
                'glow-breathe': 'glow-breathe 4s ease-in-out infinite',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% center' },
                    '50%': { backgroundPosition: '200% center' },
                },
                'neon-pulse': {
                    '0%, 100%': {
                        boxShadow:
                            '0 0 15px rgba(0,240,255,0.3), 0 0 30px rgba(0,240,255,0.15)',
                    },
                    '50%': {
                        boxShadow:
                            '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.25)',
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-breathe': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'grid-pattern':
                    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            },
            backgroundSize: {
                'grid-40': '40px 40px',
            },
        },
    },
    plugins: [],
};
