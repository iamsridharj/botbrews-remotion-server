import { BrighterSideRemotion } from "./BrighterSideRemotion/BrighterSideRemotion";
import { useBrighterSideCompositionConfig } from "./BrighterSideRemotion/hooks/useBrighterSiderCompositionConfig";
import { CompositionProps } from "./common.types";
import { BRIGHTER_SIDE_REMOTION } from "./compositons.contants";

interface UseCompositionConfigProps {
  compositions: CompositionProps<any>[];
}


export const useCompositionConfig = (): UseCompositionConfigProps => {
  const {
    durationInFrames: brighterSideCompositionConfig,
    fps: brighterSideFps,
    width: brighterSideWidth,
    height: brighterSideHeight,
    defaultProps: brighterSideDefaultProps
  } = useBrighterSideCompositionConfig();

  const compositions: CompositionProps<any>[] = [
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
