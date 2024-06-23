// GifImage.tsx
import React, { FC } from "react";
import { Gif } from "@remotion/gif";

interface GifImageProps {
  src: string;
  position: "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "center";
}

const getPositionStyles = (position: string) => {
  switch (position) {
    case "bottomLeft":
      return { bottom: "5%", left: "5%" };
    case "bottomRight":
      return { bottom: "5%", right: "5%" };
    case "topLeft":
      return { top: "5%", left: "5%" };
    case "topRight":
      return { top: "5%", right: "5%" };
    case "center":
      return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    default:
      return {};
  }
};

export const GifImage: FC<GifImageProps> = ({ src, position }) => {
  const positionStyles = getPositionStyles(position);

  return (
    <Gif
      src={src}
      style={{
        position: "absolute",
        width: "calc(70% + 100px)", // Adjust size as needed
        height: "auto", // Maintain aspect ratio
        maxHeight: "25vh", // Ensure it doesn't exceed viewport height
        maxWidth: "25vw", // Ensure it doesn't exceed viewport width
        objectFit: "cover",
        borderRadius: "20px",
        ...positionStyles,
      }}
      fit="contain"
      playbackRate={1}
    />
  );
};
