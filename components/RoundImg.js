import React from 'react';

export default function RoundImg({ src, radius, alt }) {
  return <img src={src} style={{ borderRadius: radius }} alt={alt || src} />;
}
