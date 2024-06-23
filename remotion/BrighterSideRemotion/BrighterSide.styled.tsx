import { AbsoluteFill, Img } from "remotion";
import styled from "styled-components";

export const VisualizerContainer = styled(AbsoluteFill)`
  background-color: #16213e;
  color: #e0e0e0;
  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SceneBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SceneText = styled.div`
  color: #e0e0e0;
  padding: 50px 50px;
  font-size: 40px;
  text-align: center;
  font-size: 2rem;
  margin-top: 10px;
  font-family: "Nunito Sans", sans-serif;
  flex: 1;
`;

export const SceneContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SceneContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  background-color: #1a1a2e;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  max-height: 400px;
`;

export const StyledSequenceWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #c68902;
`;

export const StyledLogoAndWaveformRow = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  gap:500px
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLogo = styled(Img)`
  height: 80%;
  border-radius: 30px;
`;

export const StyledPodcastContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex: 1;
`;

export const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
  > p {
    font-size: 50px;
    margin: 0px;
  }
`;

export const WebsiteText = styled.div`
  font-size: 30px;
  margin: 10px;  
`