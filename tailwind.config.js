import typography from '@tailwindcss/typography'
import transform3d from '@xpd/tailwind-3dtransforms'
import container_query from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			containers: {
				'2xs': '14rem',
				'3xs': '10rem',
			},
		},
	},
	plugins: [typography, transform3d, container_query],
}

