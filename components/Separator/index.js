import React from 'react';
import {View, StyleSheet} from 'react-native';

function Separator() {
  return <View style={styles.view} />;
}

const styles = StyleSheet.create({
  view: {
    padding: 8,
  },
});

export default Separator;
