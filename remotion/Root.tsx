import { Composition } from "remotion";
import {
  DURATION_IN_FRAMES,
} from "../types/constants";
import { useCompositionConfig } from "./useCompositionConfig";

export const RemotionRoot: React.FC = () => {
  const { compositions } = useCompositionConfig();

  return (
    <>
      {
        compositions.map(composition => (
          <Composition
            key={composition.id}
            id={composition.id}
            component={composition.component}
            durationInFrames={composition.durationInFrames || DURATION_IN_FRAMES}
            fps={composition.fps}
            width={composition.width}
            height={composition.height}
            defaultProps={{ ...composition.defaultProps }}
          />
        ))
      }

    </>
  );
};
