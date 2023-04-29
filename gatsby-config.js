/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `The greatest painters`,
		author: 'Tomasz Kuncio',
		description: 'Your virtual gallery, a place where all greatest paintings can be found.',
		siteUrl: 'https://qntek.github.io/gatsby-gallery/',
	},
	 pathPrefix: "/gatsby-gallery",
	plugins: [
		
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Libre Baskerville', 'Kalam'],
				},
			},
		},
	],
};
