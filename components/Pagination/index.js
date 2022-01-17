import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Pagination({nextPage, prevPage, page}) {
  return (
    <SafeAreaView>
      <Text style={styles.text}>{`Página ${page} de 42`}</Text>
      <View style={styles.container}>
        <Button onPress={prevPage} title="<" />
        <Button title=">" onPress={nextPage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Pagination;
