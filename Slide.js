import React from 'react';
import {View, Text, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const Slide = ({label}) => {
  return (
    <View style={{width}}>
      <Text>{label}</Text>
    </View>
  );
};

export default Slide;
