import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import slugify from 'slugify';
import iconBack from '../assets/images/icons/icon-back-button.svg';
import iconNext from '../assets/images/icons/icon-next-button.svg';

function NavigationPanel({ id }) {
	const data = useStaticQuery(graphql`
		query {
			allDataJson {
				nodes {
					id
					name
					artist {
						name
					}
				}
			}
		}
	`);
	let index;
	let artist;
	let picture;
	let nextImgPath;
	let prevImgPath;

	data.allDataJson.nodes.forEach((node, i) => {
		if (node.id === id) {
			index = i;
			artist = node.artist.name;
			picture = node.name;
		}
	});
	if (index === 0) {
		prevImgPath =
			data.allDataJson.nodes[data.allDataJson.nodes.length - 1].name;
		nextImgPath = data.allDataJson.nodes[index + 1].name;
	} else if (index === data.allDataJson.nodes.length - 1) {
		prevImgPath = data.allDataJson.nodes[index - 1].name;
		nextImgPath = data.allDataJson.nodes[0].name;
	} else {
		nextImgPath = data.allDataJson.nodes[index + 1].name;
		prevImgPath = data.allDataJson.nodes[index - 1].name;
	}

	return (
		<div className='mx-5 my-5 flex max-w-7xl flex-row items-center justify-between md:mx-8 lg:my-10 xl:mx-auto xl:mt-16'>
			<div className='xl:mx-5'>
				<p className='lg:text-large text-base font-bold'>{picture}</p>
				<p className='text-sm text-stone-500 lg:text-base'>{artist}</p>
			</div>
			<div className='flex flex-row  xl:mx-5'>
				<Link to={`/${slugify(prevImgPath, { lower: true })}`}>
					<img
						src={iconBack}
						alt='previous'
						className='mr-5 h-8 w-8 cursor-pointer'
					/>
				</Link>
				<Link to={`/${slugify(nextImgPath, { lower: true })}`}>
					<img src={iconNext} alt='next' className='h-8 w-8 cursor-pointer' />
				</Link>
			</div>
		</div>
	);
}

export default NavigationPanel;
