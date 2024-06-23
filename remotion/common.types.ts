import { FC } from "react";

export interface CompositionProps<T = Record<string, any>> {
  id: string;
  component: FC<T>;
  durationInFrames: number;
  fps: number;
  width: number;
  height: number;
  defaultProps: T;
}
