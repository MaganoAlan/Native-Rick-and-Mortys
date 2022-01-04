import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Separator from '../components/Separator';

const Item = ({title, date, episode}) => (
  <View style={styles.card}>
    <Text>Título: {title}</Text>
    <Text>Episódio: {episode}</Text>
    <Text>Data: {date}</Text>
    <Separator />
  </View>
);

function Cases({navigation}) {
  const [cases, setCases] = useState([]);
  const [text, setText] = useState('');

  const renderItem = ({item}) => (
    <Item title={item.name} date={item.air_date} episode={item.episode} />
  );
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(response => setCases(response));
  }, []);
  //console.warn(cases);

  /* <Button title="pesquisar" onPress={() => setPais(text)} /> */

  return (
    <SafeAreaView style={styles.background}>
      <View>
        {/*  <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Digite o país"
        /> */}

        <Separator />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />

        <FlatList
          style={styles.list}
          data={cases.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e8fce9',
    height: 1000,
  },
  list: {
    padding: 10,
    marginLeft: 30,
    marginBottom: 500,
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

export default Cases;
