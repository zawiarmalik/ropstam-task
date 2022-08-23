import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {fontColors} from './colors';

const Loader = () => (
  <View style={[styles.horizontal]}>
    <ActivityIndicator size="large" color={fontColors.black} />
  </View>
);

const styles = StyleSheet.create({
  horizontal: {
    flex: 1,
    backgroundColor: 'rgba(26, 26, 26, 0.6)',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Loader;
