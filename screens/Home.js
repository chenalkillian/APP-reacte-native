import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
  // Assurez-vous que le hook useFonts est utilisé à l'intérieur du composant Home
  const [fontsLoaded] = useFonts({
    'Tilte': require('../assets/IBM_Plex_Sans,Jersey_15/IBM_Plex_Sans/IBMPlexSans-Thin.ttf'),
  });

  const data = [
    {
      id: '1',
      title: 'Entretien pour votre Moto',
      onPress: () => navigation.navigate('Entretien'),
      img: require('../assets/Video/duke990.jpg')
    }, {
      id: '2',
      title: 'Actualité à propos de KTM !',
      onPress: () => navigation.navigate('Actualite'),
      img: require('../assets/Video/actualite.jpg')
    },
    {
      id: '3',
      title: 'Voir nos modèles',
      onPress: () => navigation.navigate('Modele'),
      img: require('../assets/Video/modeles.jpg')
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={item.onPress}>
      <View style={styles.item}>
        <Text style={styles.texte}>{item.title}</Text>
        <Image source={item.img} style={styles.img} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Assurez-vous que les polices sont chargées avant de rendre le contenu */}
      {fontsLoaded &&
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
          horizontal={false}
        />
      }
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  texte: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    width: windowWidth,
    marginBottom: 30
  },
  flatList: {
    position: 'relative',
    bottom: 0,
    width: windowWidth,
    paddingTop: 20,
    paddingBottom: 50, // Ajustez cette valeur en fonction de vos besoins
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
    marginBottom: 20
  }
});
