import { BrighterSideRemotion } from "./BrighterSideRemotion/BrighterSideRemotion";
import { useBrighterSideCompositionConfig } from "./BrighterSideRemotion/hooks/useBrighterSiderCompositionConfig";
import { CodeGenRemotion } from "./CodeGenRemotion/CodeGenRemotion";
import { useCodeGenCompositionConfig } from "./CodeGenRemotion/hooks/useCodeGenCompositionConfig";
import { CompositionProps } from "./common.types";
import { CODE_GEN_COMPOSITION, BRIGHTER_SIDE_REMOTION } from "./compositons.contants";

interface UseCompositionConfigProps {
  compositions: CompositionProps<any>[];
}


export const useCompositionConfig = (): UseCompositionConfigProps => {
  const { durationInFrames, fps, width, height, defaultProps } = useCodeGenCompositionConfig();
  const {
    durationInFrames: brighterSideCompositionConfig,
    fps: brighterSideFps,
    width: brighterSideWidth,
    height: brighterSideHeight,
    defaultProps: brighterSideDefaultProps
  } = useBrighterSideCompositionConfig();

  const compositions: CompositionProps<any>[] = [
    {
      id: CODE_GEN_COMPOSITION,
      component: CodeGenRemotion,
      durationInFrames,
      fps,
      width,
      height,
      defaultProps
    },
    {
      id: BRIGHTER_SIDE_REMOTION,
      component: BrighterSideRemotion,
      durationInFrames: brighterSideCompositionConfig,
      fps: brighterSideFps,
      width: brighterSideWidth,
      height: brighterSideHeight,
      defaultProps: brighterSideDefaultProps
    }
  ];

  return { compositions };
}
