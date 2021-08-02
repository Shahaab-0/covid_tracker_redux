import React from 'react';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import ReduxThunk from 'redux-thunk';
import reducer from './src/reducer';
import {applyMiddleware, createStore} from 'redux';

const App = () => {
  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
