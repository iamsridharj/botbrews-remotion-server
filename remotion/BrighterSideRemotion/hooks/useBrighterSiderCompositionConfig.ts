import { useEffect, useState, useCallback } from "react";
import { continueRender, delayRender } from "remotion";

import { CompositionProps } from "../../common.types";
import { BRIGHTER_SIDE_REMOTION } from "../../compositons.contants";
import { BrighterSideRemotion } from "../BrighterSideRemotion";
import { useBrighterSideApi } from "./api/useBrighterSideApi";
import { calculateSceneDuration } from "../../utils/calculateSceneDuration";

export interface BrighterSideScene {
  text: string;
  audio: string;
  code?: string;
  type: string;
  backgroundImage?: string;
  startFrame?: number;
  sceneDurationInFrame: number; // Ensure this is always a number
  metadata: {
    introTitle?: string;
    sceneTitle?: string;
    overlayGifs?: Record<string, string>;
  };
}

const FPS = 60;

export const useBrighterSideCompositionConfig = (): CompositionProps => {
  const [videoTitle, setVideoTitle] = useState('');
  const [durationInFrames, setDurationInFrames] = useState<number>(0);
  const [scenes, setScenes] = useState<BrighterSideScene[]>([]);
  const { getJsonData } = useBrighterSideApi();
  const [handle] = useState(() => delayRender());

  const calculateFrames = async (audio: string, additionalFrames: number = 0): Promise<number> => {
    const duration = await calculateSceneDuration(audio) || 0;
    return (duration * FPS) + additionalFrames;
  };

  const createScene = async (text: string, audio: string, type: string, startFrame: number, additionalFrames: number, metadata: Record<string, any>): Promise<BrighterSideScene> => {
    const sceneDurationInFrame = await calculateFrames(audio, additionalFrames);
    return {
      text,
      audio,
      type,
      startFrame,
      sceneDurationInFrame,
      metadata,
    };
  };

  const init = useCallback(async () => {
    try {
      const response = await getJsonData();
      if (!response?.sections.length) return;

      let totalDurationInFrames = 0;
      let currentFrame = 0;
      const updatedScenes: BrighterSideScene[] = [];

      // Process intro
      const introScene = await createScene(response.intro.text, response.intro.audio, "intro", currentFrame, 2 * FPS, { sceneTitle: "Introduction" });
      updatedScenes.push(introScene);
      currentFrame += introScene.sceneDurationInFrame;
      totalDurationInFrames += introScene.sceneDurationInFrame;

      // Process sections
      for (const section of response.sections) {
        const sectionScene = await createScene(section.content, section.audio, "section", currentFrame, section.pause_duration * FPS, { sceneTitle: section.title });
        updatedScenes.push(sectionScene);
        currentFrame += sectionScene.sceneDurationInFrame;
        totalDurationInFrames += sectionScene.sceneDurationInFrame;
      }

      // Process closing
      const closingScene = await createScene(response.closing.thanks, response.closing.audio, "outro", currentFrame, 2 * FPS, { sceneTitle: "Closing" });
      updatedScenes.push(closingScene);
      totalDurationInFrames += closingScene.sceneDurationInFrame;

      setScenes(updatedScenes);
      setDurationInFrames(Math.round(totalDurationInFrames));
      setVideoTitle(response.title);
      continueRender(handle);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error appropriately here (e.g., show a notification to the user)
    }
  }, [getJsonData, handle]);

  return {
    id: BRIGHTER_SIDE_REMOTION,
    component: BrighterSideRemotion,
    durationInFrames,
    fps: FPS,
    width: 1920,
    height: 1080,
    defaultProps: {
      scenes,
      videoTitle,
      init
    },
  };
};
