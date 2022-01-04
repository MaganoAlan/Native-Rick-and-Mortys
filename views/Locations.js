import React, {useEffect, useState} from 'react';

import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Separator from '../components/Separator';

const Item = ({title, type, dimension}) => (
  <View style={styles.card}>
    <Text>Local: {title}</Text>
    <Text>Tipo: {type}</Text>
    <Text>Dimensão: {dimension}</Text>
    <Separator />
  </View>
);

function Locations({navigation}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(response => setCountries(response));
  }, []);

  /*  console.warn(countries.results); */

  const renderItem = ({item}) => (
    <Item title={item.name} type={item.type} dimension={item.dimension} />
  );
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.container}>Locais</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <FlatList
          style={styles.list}
          data={countries.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    textAlign: 'center',
  },
  background: {
    backgroundColor: '#e8fce9',
    height: 1000,
  },
  local: {
    padding: 5,
    marginLeft: 70,
    textAlign: 'center',
  },
  list: {
    marginBottom: 550,
  },
  card: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'aliceblue',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#868686',
    padding: 10,
    alignItems: 'center',
  },
});

export default Locations;
