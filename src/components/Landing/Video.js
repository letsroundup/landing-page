import React from 'react';

const Video = ({ src, alt, className, slate }) => (
  <video autoPlay loop muted className={className} alt={alt} poster={slate}>
    <source src={src} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos,
    but don't worry, you can <a href={src}>download it</a>
    and watch it with your favorite video player!
  </video>
);

export default Video;
