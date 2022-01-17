import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Separator from '../components/Separator';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.container}>API Rick and Mortys</Text>
        <Button
          title="Personagens"
          onPress={() => navigation.navigate('Personagens')}
        />
        <Separator />
        <Button
          title="Episódios"
          onPress={() => navigation.navigate('Episódios')}
        />
        <Separator />
        <Button
          title="Localidades"
          onPress={() => navigation.navigate('Localidades')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    color: '#000',
    textAlign: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  background: {
    backgroundColor: '#e8fce9',
    height: 1000,
  },
});

export default HomeScreen;
