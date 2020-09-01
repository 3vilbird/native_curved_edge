/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

import Slide from './Slide';
const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          decelerationRate="fast">
          <Slide label="Something" />
          <Slide label="Something" />
          <Slide label="Something" />
          <Slide label="Something" />
          <Slide label="Something" />
          <Slide label="Something" />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 75,
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: 0.61 * height,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },

  footer: {
    flex: 1,
  },
});

export default App;
