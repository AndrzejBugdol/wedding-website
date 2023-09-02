import React from 'react';
import Image from 'next/image';

type Location = {
  src: string;
  alt: string;
  name: string;
  description: string;
  mapsLink: string;
};
function Location({ src, alt, name, description, mapsLink }: Location) {
  return (
    <div>
      <Image src={src} alt={alt}></Image>
      <div>
        <h4>{name}</h4>
        <h4>{description}</h4>
      </div>
      <a href={mapsLink} target='_blank'>
        Mapy google
      </a>
    </div>
  );
}

export default Location;
