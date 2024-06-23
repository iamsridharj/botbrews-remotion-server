import { getAudioDurationInSeconds } from "@remotion/media-utils";

export const calculateSceneDuration = async(audio: string) => {
  if(!audio) 
    return
  return await getAudioDurationInSeconds(audio);
}
