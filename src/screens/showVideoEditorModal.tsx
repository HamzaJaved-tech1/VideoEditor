import React from 'react';
import {Image} from 'react-native';
import {
  AlignmentMode,
  AudioClip,
  CanvasAction,
  Configuration,
  Tool,
  VideoEditorModal,
} from 'react-native-videoeditorsdk';

export const ShowVideoEditorModalExample = ({
  visible,
  onFinish,
}: {
  visible: boolean;
  onFinish: () => void;
}) => {
  // Sources of the local audio clips.
  const audioSources = [require('../assets/audio.mp3')];

  // The processed `AudioClip`s.
  var audioClips: AudioClip[] = [];

  // Convert the sources to valid `AudioClip`s.
  audioSources.forEach(source => {
    const uri = Image.resolveAssetSource(source).uri;
    const prefix = '/assets/';

    // Generate the identifier based on the prefix.
    const identifier = uri.substring(
      uri.indexOf(prefix) + prefix.length,
      uri.indexOf('.mp3'),
    );
    console.log('file uri', uri);
    console.log('identifier', identifier);
    const audioClip: AudioClip = {
      identifier: identifier,
      audioURI: uri,
    };
    audioClips.push(audioClip);
  });

  // Create a `Configuration` object.
  const configuration: Configuration = {
    watermark: {
      watermarkURI: require('../assets/logoWhite.png'),
      alignment: AlignmentMode.TOP_RIGHT,
      size: 0.2,
      inset: 0.05,
    },
    audio: {
      // In order to showcase the tool, we need to add some audio clips for
      // the audio tool.
      categories: [
        {
          identifier: 'audio',
          name: 'Song',
          items: [
            {
              identifier: 'audio',
              audioURI: require('../assets/audio.mp3'),
            },
          ],
        },
      ],
    },
  };

  return (
    // Create the video editor modal and handle the export as well as any occuring errors.
    <VideoEditorModal
      // Add a video from the assets directory.
      video={require('../assets/video.mp4')}
      configuration={configuration}
      // Determine whether the editor should be visible or not.
      visible={visible}
      onExport={result => {
        // The user exported a new video successfully and the newly generated video is located at `result.video`.
        console.log(result.video);
        onFinish();
      }}
      onCancel={() => {
        // The user tapped on the cancel button within the editor.
        onFinish();
      }}
      onError={error => {
        // There was an error generating the video.
        console.log(error);
        onFinish();
      }}></VideoEditorModal>
  );
};
