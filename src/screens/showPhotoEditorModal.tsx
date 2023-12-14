import React from 'react';
import {PhotoEditorModal} from 'react-native-photoeditorsdk';

export const ShowPhotoEditorModalExample = ({
  visible,
  onFinish,
}: {
  visible: boolean;

  onFinish: () => void;
}) => {
  return (
    // Create the photo editor modal and handle the export as well as any occuring errors.
    <PhotoEditorModal
      // Add a photo from the assets directory.
      image={require('../assets/bgfoodimg.png')}
      // Determine whether the editor should be visible or not.
      visible={visible}
      onExport={result => {
        // The user exported a new photo successfully and the newly generated photo is located at `result.image`.
        console.log(result.image);
        onFinish();
      }}
      onCancel={() => {
        // The user tapped on the cancel button within the editor.
        onFinish();
      }}
      onError={error => {
        // There was an error generating the photo.
        console.log(error);
        onFinish();
      }}></PhotoEditorModal>
  );
};
