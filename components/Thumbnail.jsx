import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import slugify from "slugify";
const Thumbnail = ({ image, picName, artistName }) => {
  const path = slugify(picName, { lower: true });
  return (
    <Link to={`/${path}`}>
      <div className="relative rounded overflow-hidden">
        <GatsbyImage
          className="z-0 w-full"
          image={getImage(image)}
          alt={picName}
        />
        <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-hero-background hover:bg-hero-hover active:bg-hero-hover ease-linear duration-200"></div>
        <div className="absolute bottom-8 left-6 right-6 z-20">
          <p className="text-3xl font-bold text-white">{picName}</p>
          <p className="text-2x1 font-bold text-neutral-400">{artistName}</p>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
