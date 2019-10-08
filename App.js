/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Alert, Platform} from 'react-native';
import {WebView} from 'react-native-webview';

const App: () => React$Node = () => {
  function onMessage(event) {
    const {title, message} = JSON.parse(event.nativeEvent.data);
    Alert.alert(title, message, [], {cancelable: true});
  }

  const params = 'platform=' + Platform.OS;
  const sourceUri =
    (Platform.OS === 'android' ? 'file:///android_asset/' : '') +
    'Web.bundle/loader.html';
  const injectedJS = `if (!window.location.search) {
      var link = document.getElementById('progress-bar');
      link.href = './site/index.html?${params}';
      link.click();
    }`;

  return (
    <>
      <WebView
        injectedJavaScript={injectedJS}
        source={{uri: sourceUri}}
        javaScriptEnabled={true}
        originWhitelist={['*']}
        allowFileAccess={true}
        onMessage={onMessage}
      />
    </>
  );
};

export default App;
