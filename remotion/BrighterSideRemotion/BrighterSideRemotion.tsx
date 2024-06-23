import React, { FC } from "react";
import { Sequence, staticFile, Audio, Img } from "remotion";
import { BrighterSideScene } from "./hooks/useBrighterSiderCompositionConfig";
import { AudioWaveform } from "./components/Waveform/Waveform";
import {
  VisualizerContainer,
  StyledSequenceWrapper,
  StyledLogoAndWaveformRow,
  StyledLogoWrapper,
  StyledLogo,
  StyledPodcastContentWrapper,
  SceneText,
  NotificationText,
  WebsiteText,
  StyledPodcastNameHeader,
} from "./BrighterSide.styled";

import * as robotoLoad from "@remotion/google-fonts/Roboto";
import * as RobotoMonoLoad from "@remotion/google-fonts/RobotoMono";

robotoLoad.loadFont();
RobotoMonoLoad.loadFont();


export const BrighterSideRemotion: FC<Record<string, any>> = ({ scenes }) => {

  return (
    <VisualizerContainer>
      {scenes.map((scene: BrighterSideScene, index: number) => {
        return (
          <Sequence key={index} from={scene.startFrame} durationInFrames={scene.sceneDurationInFrame}>
            <StyledSequenceWrapper>
              <StyledLogoAndWaveformRow>
                <StyledLogoWrapper>
                  <StyledLogo src={staticFile("brighterside_logo.jpeg")} />
                  <StyledPodcastNameHeader>
                    THE BRIGHTER <p>SIDE</p>
                    <span>Podcast</span>
                  </StyledPodcastNameHeader>
                </StyledLogoWrapper>
                {
                  scene.type === "intro" ? <Audio volume={0.02} src={staticFile("brighterside_intro.mp3")} /> : null
                }
                <AudioWaveform audioUrl={scene.audio} />
              </StyledLogoAndWaveformRow>
              <StyledPodcastContentWrapper>
                <SceneText>{scene.text}</SceneText>
                <NotificationText>
                  <p>Every <b>Sunday</b> at <b>9am</b> PST</p>
                  <WebsiteText>
                    by BotBrews.in
                  </WebsiteText>
                </NotificationText>

              </StyledPodcastContentWrapper>
            </StyledSequenceWrapper>
          </Sequence>
        );
      })}
    </VisualizerContainer>
  );
};
