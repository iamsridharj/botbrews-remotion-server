import React, { FC } from "react";
import { CodeTutScene } from "./hooks/useCodeGenCompositionConfig";
import { Sequence, Audio, AbsoluteFill } from "remotion";
import { MediaBackgroundContainer } from "./components/MediaBackgroundContainer/MediaBackgroundContainer";
import { CodeBlock } from "./components/CodeBlock/CodeBlock";
import { SceneTitle } from "./components/SceneTitle/SceneTitle";
import { OverLayGif } from "./components/OverLayGif/OverLayGif";

export const CodeGenRemotion: FC<Record<string, any>> = ({ scenes }) => {

  const generateChildren = (scene: CodeTutScene) => (
    <>
      {
        scene?.metadata?.sceneTitle && (
          <SceneTitle
            title={scene?.metadata?.sceneTitle}
          />
        )
      }
      {
        scene.code && (
          <CodeBlock codeString={scene.code} />
        )
      }
    </>
  )

  return (
    <AbsoluteFill style={{
      backgroundColor: "black"
    }}>
      {
        scenes.map((scene: CodeTutScene) => (
          <Sequence from={scene.startFrame} durationInFrames={scene.sceneDurationInFrame}>
            {
              scene.backgroundImage ? (
                <MediaBackgroundContainer backgroundMedia={scene.backgroundImage || ""} >
                  {
                    generateChildren(scene)
                  }
                </MediaBackgroundContainer>
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                  }}>
                  {
                    generateChildren(scene)
                  }
                </div>)
            }

            <OverLayGif gifs={scene.metadata?.overlayGifs || {}} />

            <Audio src={scene.audio} />
          </Sequence>
        ))
      }
    </AbsoluteFill>

  );
};
