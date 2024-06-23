import { StyledSceneTitleWrapper, StyledSceneTitleHeader } from "./SceneTitle.styled";

interface SceneTitleProps {
  title: string
}

export const SceneTitle: React.FC<SceneTitleProps> = ({ title }) => {
  return (
    <StyledSceneTitleWrapper>
      <StyledSceneTitleHeader>{title}</StyledSceneTitleHeader>
    </StyledSceneTitleWrapper>

  )
};