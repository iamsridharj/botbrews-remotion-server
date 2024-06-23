import { ReactNode } from "react";
import { StyledMediaBackgrounContainer } from "./MediaBackgroundContainer.styled";

interface MediaBackgroundContainerProps {
  backgroundMedia: string;
  children: ReactNode
}
export const MediaBackgroundContainer: React.FC<MediaBackgroundContainerProps> = ({ backgroundMedia, children }) => {
  return (
    <StyledMediaBackgrounContainer backgroundMedia={backgroundMedia}>
      {children}
    </StyledMediaBackgrounContainer>
  )
};
