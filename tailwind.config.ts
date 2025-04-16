
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class", ".dark-mode"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Web3 themed colors - updated with more vibrant options
				web3: {
					purple: '#8B5CF6', // Updated to a brighter purple
					pink: '#EC4899',
					blue: '#3B82F6', // Updated to a brighter blue
					teal: '#14B8A6',
					green: '#10B981',
					neon: '#22D3EE',
					orange: '#F97316', // Added vibrant orange
					yellow: '#FBBF24', // Added vibrant yellow
				},
				// Custom background for gradients
				'bg-dark': '#0D1117',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			boxShadow: {
				glow: '0 0 20px rgba(139, 92, 246, 0.5)', // Updated glow color
				'glow-lg': '0 0 30px rgba(139, 92, 246, 0.6)',
				'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)', // Added pink glow
				'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)', // Added blue glow
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glow: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(0)' },
					'50%': { transform: 'translateY(-15px) rotate(2deg)' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
				},
				'bounce-slight': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'blob': {
					'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
					'25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
					'50%': { borderRadius: '50% 60% 30% 70% / 30% 40% 70% 60%' },
					'75%': { borderRadius: '60% 40% 70% 30% / 70% 30% 50% 40%' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'glow': 'glow 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'zoom-in': 'zoom-in 0.3s ease-out forwards',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'bounce-slight': 'bounce-slight 2s ease-in-out infinite',
				'blob': 'blob 8s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(to right, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15), rgba(59, 130, 246, 0.15))',
				'web3-gradient': 'linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
				'web3-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.05) 70%, transparent 100%)',
				'cyber-grid': 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
