import * as React from 'react';
import slugify from 'slugify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import Thumbnail from '../components/Thumbnail';
import SEO from '../components/Seo';
import '../styles/index.css';

const IndexPage = ({ data }) => {
	const thumbnails = data.allDataJson.nodes
		.map((node) => {
			return (
				<Thumbnail
					image={node.images.gallery.childImageSharp.gatsbyImageData}
					picName={node.name}
					artistName={node.artist.name}
					key={node.id}
				/>
			);
		})
		.reverse();

	let lastThumbnail = thumbnails.pop();
	const thumbnailsColumnOne = [];
	const thumbnailsColumnTwo = [];
	const thumbnailsColumnThree = [];
	const thumbnailsColumnFour = [];
	while (lastThumbnail) {
		thumbnailsColumnOne.push(lastThumbnail);
		lastThumbnail = thumbnails.pop();
		thumbnailsColumnTwo.push(lastThumbnail);
		lastThumbnail = thumbnails.pop();
		thumbnailsColumnThree.push(lastThumbnail);
		lastThumbnail = thumbnails.pop();
		thumbnailsColumnFour.push(lastThumbnail);
		lastThumbnail = thumbnails.pop();
	}
	const thumbnailsToDisplay = (
		<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 w-full p-4 xl:p-9 max-w-7xl xl:mx-auto animate-appear'>
			<div className='flex flex-col gap-6 mx-auto'>{thumbnailsColumnOne}</div>
			<div className='flex flex-col gap-6 mx-auto'>{thumbnailsColumnTwo}</div>
			<div className='flex flex-col gap-6 mx-auto'>{thumbnailsColumnThree}</div>
			<div className='flex flex-col gap-6 mx-auto'>{thumbnailsColumnFour}</div>
		</div>
	);
	return (
		<div className='relative pb-12'>
			<Header
				isSlideShow={false}
				linkTo={slugify(`/${data.allDataJson.nodes[0].name}`, { lower: true })}
			/>
			{thumbnailsToDisplay}
			<Footer />
		</div>
	);
};

export const query = graphql`
	query {
		allDataJson {
			nodes {
				id
				artist {
					name
				}
				images {
					gallery {
						childImageSharp {
							gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
						}
					}
				}
				name
			}
		}
	}
`;

export default IndexPage;

export const Head = () => <SEO/>;
