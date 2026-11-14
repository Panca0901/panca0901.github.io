/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: '2rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				// Light mode colors
				'light-theme': '#FDF8FF',
				'primary-light': '#DB2777',
				'primary-hover-light': '#BE185D',

				// Dark mode colors
				'dark-theme': '#140821',
				'primary-dark': '#F472B6',
				'primary-hover-dark': '#EC4899',

				// Neutrals
				'n200': '#d7d9da',
				'n900': '#222222',
				'n700': '#241038',
				'n500': '#555555',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
