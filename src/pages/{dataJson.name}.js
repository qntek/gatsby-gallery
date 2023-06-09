import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import viewFullIcon from '../assets/images/icons/icon-view-image.svg';
import ModalSinglePicture from '../components/ModalSinglePicture';
import NavigationPanel from '../components/NavigationPanel';
import SEO from '../components/Seo';

const Picture = ({ data }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className='min-h-screen'>
			<Header isSlideShow={true} />
			<main className='mt-5 grid max-w-6xl grid-cols-1 gap-10 md:mt-12 lg:grid-cols-2 xl:mx-auto xl:max-w-7xl'>
				<ModalSinglePicture
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
					image={
						data.dataJson.images.hero.large.childrenImageSharp[0]
							.gatsbyImageData
					}
					imgAlt={data.dataJson.name}
				/>
				<div className='relative z-0'>
					<div className='z-10 bg-white p-5 tracking-wide md:absolute md:left-2/3 md:top-0 md:ml-0 lg:left-2/3'>
						<p className='text-4xl font-bold lg:text-2xl xl:text-5xl'>
							{data.dataJson.name}
						</p>
						<p className='mt-2 text-sm font-bold text-stone-500 md:text-base'>
							{data.dataJson.artist.name}
						</p>
					</div>
					<div className='relative max-h-fit w-full'>
						<GatsbyImage
							image={getImage(
								data.dataJson.images.hero.large.childrenImageSharp[0]
									.gatsbyImageData
							)}
							alt={data.dataJson.name}
							className='mx-6 2xl:mx-0'
						/>
						<button
							onClick={openModal}
							className='absolute bottom-5 left-0 ml-10 flex appearance-none flex-row items-center rounded-sm bg-hero-background px-4 py-2 text-xs tracking-wide text-white transition-colors hover:bg-hero-hover focus:outline-none'>
							<img src={viewFullIcon} className='mr-3' alt='' /> VIEW FULL
						</button>
					</div>

					<div className='md:-bootom-8 absolute -bottom-5 end-3 overflow-hidden rounded-sm sm:start-auto md:pr-5'>
						<GatsbyImage
							image={getImage(
								data.dataJson.artist.image.childrenImageSharp[0].gatsbyImageData
							)}
							alt={data.dataJson.artist.name}
							className='w-20 sm:w-28 md:h-48 md:w-48 lg:h-32 lg:w-32 xl:h-36 xl:w-36'
						/>
					</div>
				</div>
				<div className='relative mx-8 text-justify text-stone-500'>
					<p className='select-none text-right text-9xl text-slate-100 sm:text-18xl md:text-12xl lg:text-9xl xl:text-18xl'>
						{data.dataJson.year}
					</p>
					<div className='-mt-10 indent-5 text-sm font-bold leading-6 sm:-mt-16 md:text-base lg:-mt-10 lg:leading-8 xl:-mt-16'>
						<p>{data.dataJson.description}</p>
						<a href={data.dataJson.source}>
							<p className='mt-8 indent-0 text-xs tracking-widest underline'>
								GO TO SOURCE
							</p>
						</a>
					</div>
				</div>
			</main>
			<NavigationPanel id={data.dataJson.id} />
		</div>
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
								transformOptions: { fit: CONTAIN }
								placeholder: BLURRED
								layout: CONSTRAINED
							)
						}
					}
				}
			}
			artist {
				image {
					childrenImageSharp {
						gatsbyImageData(transformOptions: { fit: CONTAIN })
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

export const Head = ({data}) => (
	<SEO title={data.dataJson.name} description={data.dataJson.description} />
);
