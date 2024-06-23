import { useEffect, useState } from "react";
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
  sceneDurationInFrame?: number;
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

  const init = async () => {
    try {
      const response = await getJsonData();
      if (!response?.sections.length) return;

      let totalDurationInFrames = 0;
      let currentFrame = 0;

      const updatedScenes = [];


      // Process intro
      const introDurationInFrames = (await calculateSceneDuration(response.intro.audio) || 0) * FPS + 2 * FPS;
      updatedScenes.push({
        text: response.intro.text,
        audio: response.intro.audio,
        type: "intro",
        startFrame: 0,
        sceneDurationInFrame: introDurationInFrames,
        metadata: {
          sceneTitle: "Introduction",
        },
      });
      currentFrame += introDurationInFrames;
      totalDurationInFrames += introDurationInFrames;

      // Process sections
      for (const section of response.sections) {
        const audioDurationInFrames = (await calculateSceneDuration(section.audio) || 0) * FPS + section.pause_duration * FPS;
        let startFrame = Math.round(currentFrame);
        let endFrame = Math.round(currentFrame + audioDurationInFrames);
        currentFrame = endFrame;
        updatedScenes.push({
          text: section.content,
          audio: section.audio,
          type: "section",
          duration: audioDurationInFrames,
          startFrame: startFrame,
          sceneDurationInFrame: endFrame - startFrame,
          metadata: {
            sceneTitle: section.title,
          },
        });
        totalDurationInFrames += audioDurationInFrames;
      }

      // Process closing
      const closingDurationInFrames = (await calculateSceneDuration(response.closing.audio) || 0) * FPS + 2 * FPS;
      updatedScenes.push({
        text: response.closing.thanks,
        audio: response.closing.audio,
        startFrame: currentFrame,
        type: "outro",
        sceneDurationInFrame: closingDurationInFrames,
        metadata: {
          sceneTitle: "Closing",
        },
      });
      totalDurationInFrames += closingDurationInFrames;

      setScenes(updatedScenes);
      setDurationInFrames(Math.round(totalDurationInFrames));
      setVideoTitle(response.title);
      continueRender(handle);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error appropriately here (e.g., show a notification to the user)
    }
  };

  useEffect(() => {
    try {
      init();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return ({
    id: BRIGHTER_SIDE_REMOTION,
    component: BrighterSideRemotion,
    durationInFrames,
    fps: FPS,
    width: 1920,
    height: 1080,
    defaultProps: {
      scenes, 
      videoTitle
    }
  });
};
