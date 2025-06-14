
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
				'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
				'2xl': '1536px', // Increased max width for 2xl
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
			},
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
        'premium-accent': {
            DEFAULT: 'hsl(var(--premium-accent))',
            foreground: 'hsl(var(--premium-accent-foreground))',
            light: 'hsl(var(--premium-accent-light))'
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
				sidebar: { // ... keep existing code (sidebar color definitions)
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				wellness: { // Kept for potential specific use, but primary/accent should be preferred
					teal: 'hsl(var(--primary))', 
					charcoal: 'hsl(var(--foreground))', 
          gold: 'hsl(var(--premium-accent))',
          'gold-light': 'hsl(var(--premium-accent-light))',
				}
			},
			borderRadius: {
				lg: 'var(--radius-lg)', // Use new CSS var
				DEFAULT: 'var(--radius)',    // Default border radius
				md: 'var(--radius)',      // Consistent with default
				sm: 'var(--radius-sm)',   // Use new CSS var
				xl: 'calc(var(--radius-lg) + 0.25rem)', // Slightly larger than lg
        '2xl': 'calc(var(--radius-lg) + 0.5rem)',
        '3xl': 'calc(var(--radius-lg) + 1rem)', // For very rounded elements
        full: '9999px',
			},
			keyframes: { // ... keep existing code (keyframes for accordion, fade-in, slide-up)
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
					'0%': {
						opacity: '0',
						transform: 'translateY(12px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)' 
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: { // ... keep existing code (animation definitions)
				'accordion-down': 'accordion-down 0.25s ease-out', 
				'accordion-up': 'accordion-up 0.25s ease-out', 
				'fade-in': 'fade-in 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)', 
				'slide-up': 'slide-up 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)' 
			},
      boxShadow: { // Adding more refined shadows
        'soft': '0 2px 8px -1px hsla(var(--foreground), 0.04), 0 4px 12px -2px hsla(var(--foreground), 0.08)',
        'md': '0 4px 12px -2px hsla(var(--foreground), 0.05), 0 6px 20px -3px hsla(var(--foreground), 0.1)',
        'lg': '0 8px 24px -4px hsla(var(--foreground), 0.06), 0 12px 32px -6px hsla(var(--foreground), 0.12)',
        'xl': '0 12px 32px -6px hsla(var(--foreground), 0.08), 0 20px 50px -10px hsla(var(--foreground), 0.15)',
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
