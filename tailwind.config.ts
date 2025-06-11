
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
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
					DEFAULT: '#2d4c7b',
					50: '#f4f6fb',
					100: '#e8edf6',
					200: '#cbd9ec',
					300: '#9eb8db',
					400: '#6a93c6',
					500: '#4775b0',
					600: '#355c94',
					700: '#2d4c7b',
					800: '#284064',
					900: '#253755',
					950: '#192438',
					foreground: '#f4f6fb'
				},
				secondary: {
					DEFAULT: '#a4d7c6',
					50: '#f0f9f6',
					100: '#dbf0e8',
					200: '#a4d7c6',
					300: '#8cc9b9',
					400: '#5bac99',
					500: '#39907e',
					600: '#287366',
					700: '#205c53',
					800: '#1c4942',
					900: '#183c38',
					950: '#0c2220',
					foreground: '#192438'
				},
				neutral: {
					DEFAULT: '#f9f8f7',
					50: '#f9f8f7',
					100: '#f2f0ee',
					200: '#e8e3e0',
					300: '#d7d0ca',
					400: '#beb3ab',
					500: '#a19287',
					600: '#8e7f74',
					700: '#76695f',
					800: '#635951',
					900: '#554d47',
					950: '#2c2723'
				},
				terracota: {
					DEFAULT: '#fdf6ec',
					50: '#fdf6ec',
					100: '#fbedd9',
					200: '#f6d8b2',
					300: '#f0be81',
					400: '#e9994e',
					500: '#e37d2c',
					600: '#d56521',
					700: '#b14d1d',
					800: '#8d3e1f',
					900: '#72351c',
					950: '#3d190d'
				},
				rose: {
					DEFAULT: '#d8a79d',
					50: '#fbf6f5',
					100: '#f7ebe9',
					200: '#f0dcd8',
					300: '#e5c3bc',
					400: '#d8a79d',
					500: '#c27f71',
					600: '#ac6556',
					700: '#905245',
					800: '#78463c',
					900: '#653f37',
					950: '#361e19'
				},
				destructive: {
					DEFAULT: '#ac6556',
					foreground: '#fbf6f5'
				},
				muted: {
					DEFAULT: '#f2f0ee',
					foreground: '#76695f'
				},
				accent: {
					DEFAULT: '#a4d7c6',
					foreground: '#192438'
				},
				popover: {
					DEFAULT: '#f9f8f7',
					foreground: '#2c2723'
				},
				card: {
					DEFAULT: '#f9f8f7',
					foreground: '#2c2723'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
