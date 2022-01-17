import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Pagination from '../components/Pagination';
import Separator from '../components/Separator';

const Item = ({title, status, species, gender, source}) => (
  <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Nome: {title}</Text>
      <Text style={styles.title}>Spécie: {species}</Text>
      <Text style={styles.title}>Gênero: {gender}</Text>
      <Text style={styles.title}>Status: {status}</Text>
    </ScrollView>
    <Separator />
    <Image
      style={styles.logo}
      source={{
        uri: `${source}`,
      }}
    />
    <Separator />
  </View>
);

function DetailsScreen({navigation}) {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => response.json())
      .then(response => setCountries(response.results));
  }, [page]);

  /*  console.warn(countries.results); */
  function nextPage() {
    if (page >= 42) {
      console.warn('Não existem mais páginas');
    } else {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page <= 1) {
      console.warn('Primeira página');
    } else {
      setPage(page - 1);
    }
  }

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Item
        title={item.name}
        status={item.status}
        species={item.species}
        gender={item.gender}
        source={item.image}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />

        <FlatList
          style={styles.list}
          data={countries}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  },
  logo: {
    width: 100,
    height: 100,
  },

  background: {
    backgroundColor: '#e8fce9',
    height: 1000,
  },
  list: {
    padding: 10,
    marginBottom: '150%',
    width: 350,
  },
  card: {
    margin: 20,
    borderRadius: 5,
    backgroundColor: 'aliceblue',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#868686',
  },
});

export default DetailsScreen;
