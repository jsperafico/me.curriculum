import transform3d from '@xpd/tailwind-3dtransforms'
import container_query from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			width: {
				'initial': 'initial',
			},
			containers: {
				'2xs': '14rem',
				'3xs': '10rem',
			},
			screens: {
				'xs': '340px',
			},
		},
	},
	plugins: [transform3d, container_query],
}

