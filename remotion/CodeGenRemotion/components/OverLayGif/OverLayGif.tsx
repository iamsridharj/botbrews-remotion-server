// OverLayGif.tsx
import React, { FC } from "react";
import { GifImage } from "./GifImage";

interface OverLayGifProps {
  gifs: {
    bottomLeft?: string;
    bottomRight?: string;
    topLeft?: string;
    topRight?: string;
    center?: string;
  };
}

export const OverLayGif: FC<OverLayGifProps> = ({ gifs }) => {
  console.log({ gifs })
  return (
    <>
      {gifs.bottomLeft && <GifImage src={gifs.bottomLeft} position="bottomLeft" />}
      {gifs.bottomRight && <GifImage src={gifs.bottomRight} position="bottomRight" />}
      {gifs.topLeft && <GifImage src={gifs.topLeft} position="topLeft" />}
      {gifs.topRight && <GifImage src={gifs.topRight} position="topRight" />}
      {gifs.center && <GifImage src={gifs.center} position="center" />}
    </>
  );
};
