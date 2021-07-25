import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import AppContainer from '@Navigations';
import store from './src/common/stores';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
