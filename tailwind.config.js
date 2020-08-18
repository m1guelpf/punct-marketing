module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {},
			fill: {
				none: 'none',
			},
			animation: {
				spin: 'spin 6s linear infinite',
			},
			typography: (theme) => ({
				default: {
					css: {
						color: theme('colors.gray.300'),
						blockquote: {
							color: theme('colors.gray.300'),
							borderLeftColor: theme('colors.gray.700'),
						},
						hr: {
							borderTopColor: theme('colors.gray.800'),
						},
						strong: {
							color: theme('colors.white'),
						},
						'figure figcaption': {
							color: theme('colors.gray.500'),
						},
						a: {
							color: theme('colors.white'),
						},
						th: {
							color: theme('colors.white'),
						},
						'h1, h2, h3, h4': {
							color: theme('colors.white'),
						},
						code: {
							color: theme('colors.gray.300'),
						},
						'code:before': {
							color: theme('colors.gray.300'),
						},
						'code:after': {
							color: theme('colors.gray.300'),
						},
						'ol > li:before': {
							color: theme('colors.gray.400'),
						},
						'ul > li:before': {
							backgroundColor: theme('colors.gray.600'),
						},
					},
				},
			}),
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
