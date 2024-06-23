import { useEffect, useState } from "react";
import { continueRender, delayRender } from "remotion";

import { CompositionProps } from "../../common.types";
import { CODE_GEN_COMPOSITION } from "../../compositons.contants";
import { CodeGenRemotion } from "../CodeGenRemotion";
import { useCodeGenApi } from "./api/useCodeGenApi";
import { calculateSceneDuration } from "../../utils/calculateSceneDuration";

export interface CodeTutScene {
  text: string;
  audio: string;
  code?: string;
  backgroundImage?:string;
  startFrame?: number;
  sceneDurationInFrame?: number;
  metadata: {
    introTitle?: string;
    sceneTitle?: string;
    overlayGifs?: Record<string, string>
  }
}

const FPS = 30

export const useCodeGenCompositionConfig = (): CompositionProps => {
  const [durationInFrames, setDurationInFrames] = useState<number>(0);
  const [scenes, setScenes] = useState<CodeTutScene[]>([]);
  const { getJsonData } = useCodeGenApi();
  const [handle] = useState(() => delayRender());

  const init = async () => {
    try {
    const response = await getJsonData();

    if (!response?.scenes.length) return;

    let totalDurationInFrames = 0;
    let currentFrame = 0;

    const updatedScenes = [];

    for (const scene of response?.scenes) {
      const audioDurationInFrame = (await calculateSceneDuration(scene.audio) || 0) * FPS;
      let startFrame = Math.round(currentFrame);
      let endFrame = Math.round(currentFrame + audioDurationInFrame);
      currentFrame = endFrame;
      updatedScenes.push({
        ...scene,
        duration: audioDurationInFrame,
        startFrame: startFrame,
        sceneDurationInFrame: endFrame - startFrame,
      });
      totalDurationInFrames += audioDurationInFrame;
    }

    setScenes(updatedScenes);
    setDurationInFrames(Math.round(totalDurationInFrames));
    continueRender(handle);
  }catch (error) {
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
    id: CODE_GEN_COMPOSITION,
    component: CodeGenRemotion,
    durationInFrames,
    fps: FPS,
    width: 1280,
    height: 720,
    defaultProps: {
      scenes
    }
  });
};
