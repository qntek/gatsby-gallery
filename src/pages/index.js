import * as React from 'react';
import Header from '../components/Header';
import { graphql } from 'gatsby';
import Thumbnail from '../components/Thumbnail';
import '../styles/index.css';

const IndexPage = ({data}) => {
	const [isSlideShow, setIsSlideShow] = React.useState(false);

	const thumbnails = data.allDataJson.nodes.map((node) => {
		return <Thumbnail image={node.images.thumbnail.childImageSharp.gatsbyImageData} picName={node.name} artistName={node.artist.name} key={node.id} />;
	})
	
	return (
		<div >
			<Header isSlideShow={isSlideShow} setIsSlideShow={setIsSlideShow} />
			<div>{thumbnails}</div>
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
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        name
      }
    }
  }
`

export default IndexPage;

export const Head = () => <title>Home Page</title>;
