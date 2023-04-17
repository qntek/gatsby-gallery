import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Header from '../components/Header';


const Picture = ({data}) => {
  console.log(data);
  return (
    <><Header /></>
  )
}

export const query = graphql`
  query ($id: String) {
    dataJson(id: {eq: $id}) {
      name
      year
      id
      description
      images {
        hero {
          large {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
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
  }
`

export default Picture;