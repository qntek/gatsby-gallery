import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import viewFullIcon from '../assets/images/icons/icon-view-image.svg';

const Picture = ({ data }) => {
	return (
		<>
			<Header isSlideShow={true} />
			<main className='mt-5 grid grid-cols-1 lg:container md:mt-12 lg:mx-auto lg:grid-cols-2'>
				<div className='relative mb-10'>
					<div className='z-10 ml-8 bg-white p-5 tracking-wide md:absolute md:left-1/2 md:top-0 md:ml-0 lg:left-2/3'>
						<p className='text-5xl  font-bold'>{data.dataJson.name}</p>
						<p className='mt-2 text-stone-500'>{data.dataJson.artist.name}</p>
					</div>
					<div className='relative w-full'>
						<GatsbyImage
							image={getImage(
								data.dataJson.images.hero.large.childrenImageSharp[0]
									.gatsbyImageData
							)}
							alt={data.dataJson.name}
							className='mx-8 md:mx-16'
						/>
						<button className='absolute bottom-5 flex flex-row items-center left-0 ml-10 appearance-none rounded-sm bg-hero-background px-4 py-2 text-white transition-colors hover:bg-hero-hover focus:outline-none md:ml-24 text-xs tracking-wide'>
							<img src={viewFullIcon} className='mr-3'/> VIEW FULL
						</button>
					</div>

					<div className='md:-bootom-8 absolute -bottom-5 end-3 overflow-hidden rounded-sm sm:start-auto md:pr-5'>
						<GatsbyImage
							image={getImage(
								data.dataJson.artist.image.childrenImageSharp[0].gatsbyImageData
							)}
							alt={data.dataJson.artist.name}
							className='w-20 sm:w-28 md:h-48 md:w-48 lg:h-36 lg:w-36'
						/>
					</div>
				</div>
				<div className='relative bg-slate-600'></div>
			</main>
		</>
	);
};

export const query = graphql`
	query ($id: String) {
		dataJson(id: { eq: $id }) {
			name
			year
			id
			description
			images {
				hero {
					large {
						childrenImageSharp {
							gatsbyImageData(
								placeholder: BLURRED
								layout: FULL_WIDTH
								
							)
						}
					}
				}
			}
			artist {
				image {
					childrenImageSharp {
						gatsbyImageData
					}
				}
				name
			}
			source
		}
		allDataJson {
			totalCount
			nodes {
				id
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default Picture;
