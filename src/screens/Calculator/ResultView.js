import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ScreensCalculatorResultView = ({ price }) => (
  <View>
    <Text style={styles.resultContainer}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  resultContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 45,
  },
});

export default ScreensCalculatorResultView;
