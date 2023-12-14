/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Component} from 'react';
import {Platform, NativeModules} from 'react-native';
// import {PESDK} from 'react-native-photoeditorsdk';
import {ShowPhotoEditorModalExample} from './src/screens/showPhotoEditorModal';
import {ShowVideoEditorModalExample} from './src/screens/showVideoEditorModal';
const {VideoEditorModule} = NativeModules;
const screenHeight = Dimensions.get('window').height;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isPhotoModalVisible, setPhotoModalVisible] = useState(false);
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [errorText, setErrorText] = useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            height: screenHeight,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/assets/logoWhite.png')}
              style={{
                marginBottom: 30,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 40,
              marginTop: 40,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Video and Photo Editor
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              title="Video"
              onPress={() => {
                setIsVideoModalVisible(true);
              }}
            />
            <Button
              title="Photo"
              onPress={() => {
                setPhotoModalVisible(true);
              }}
            />
          </View>
        </View>
        <ShowPhotoEditorModalExample
          visible={isPhotoModalVisible}
          onFinish={() => {
            setPhotoModalVisible(false);
          }}
        />

        <ShowVideoEditorModalExample
          visible={isVideoModalVisible}
          onFinish={() => {
            setIsVideoModalVisible(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
