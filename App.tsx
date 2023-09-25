// App.js
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Menu from './src/Menu.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Menu />
      </SafeAreaView>
    </>
  );
};

export default App;
