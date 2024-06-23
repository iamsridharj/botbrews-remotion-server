import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { FC } from "react";
import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components";

interface AudioWaveformProps {
  audioUrl: string;
}

const WaveformContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;  /* Align items to the bottom */
  justify-content: center;
  height: 150px; /* Set a fixed height for the container */
`;

const WaveformBar = styled.div<{ height: number }>`
  width: 20px;
  margin: 5px;
  height: ${({ height }) => height}px;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  align-self: flex-end;
  transition: height 0.1s ease-in-out;

  &:nth-child(even) {
    background-color: #fff;
  }
`;

const AudioWaveformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const AudioWaveform: FC<AudioWaveformProps> = ({ audioUrl }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audioUrl);

  if (!audioData) {
    return null;
  }

  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 16,
  });

  const maxAmplitude = Math.max(...visualization);
  const normalizedVisualization = visualization.map((v, index) => {
    const distanceFromCenter = Math.abs(index - (visualization.length - 1) / 2);
    return maxAmplitude - distanceFromCenter * (maxAmplitude / (visualization.length / 2));
  });
  // const normalizedVisualization = visualization.map((v) => (v / maxAmplitude) * 100);

  return (
    <AudioWaveformWrapper>
      <Audio src={audioUrl} />
      <WaveformContainer>
        {normalizedVisualization.map((v, index) => (
          <WaveformBar
            key={index}
            height={300 * v}
          />
        ))}
      </WaveformContainer>
    </AudioWaveformWrapper>
  );
};

