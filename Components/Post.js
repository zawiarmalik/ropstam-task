import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {fontColors, fontFamilies} from './colors';

const Posts = props => (
  <View style={[styles.container]}>
    <View>
      <Text style={styles.upperText}>{props.data}</Text>
      <Text style={styles.bodyText}>{props.data}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: fontColors.dullWhite,
    marginTop: 10,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  upperText: {
    fontSize: 16,
    color: fontColors.black,
    marginBottom: 10,
    fontFamily: fontFamilies.bold,
  },
  bodyText: {
    fontSize: 14,
    color: fontColors.black,
    marginBottom: 10,
    fontFamily: fontFamilies.regular,
  },
});

export default Posts;
