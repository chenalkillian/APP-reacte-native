import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react'









const Entretien = ({navigation}) => {  
    const data = [
        {
            id: 1,
            title: 'Changement d\'uile et du filtre à huile',
          onPress: () => navigation.navigate('Video',{id:1}),
          img: require('../assets/Video/huile.jpg')
        }, {
            id: 2,
            title: 'Contrôle de la pression des pneus et de leur usure',
            onPress: () => navigation.navigate('Video',{id:2}),
            img: require('../assets/Video/pneu.jpg')
    
          },
           {
            id: 3,
            title: 'Entretien du système de freinage',
            onPress: () => navigation.navigate('Video',{id:3}),
            img: require('../assets/Video/frein.jpg')
    
          },
          {
           id: 4,
           title: 'Nettoyage  de la moto  ',
           onPress: () => navigation.navigate('Video',{id:4}),
           img: require('../assets/Video/lavage.webp')
    
         },
          {
            id: 5,
            title: 'Inspection et lubrification des câbles',
            onPress: () => navigation.navigate('Video',{id:5}),
            img: require('../assets/Video/cable.jpg')
     
          },
          {
            id: 6,
            title: 'Vérification des niveaux de liquide',
            onPress: () => navigation.navigate('Video',{id:6}),
            img: require('../assets/Video/niveau.jpg')
     
          },
          {
            id: 7,
            title: 'Remplacement régulier des filtres à air',
            onPress: () => navigation.navigate('Video',{id:7}),
            img: require('../assets/Video/filtre.jpg')
     
          },
          {
            id: 8,
            title: 'État de la batterie',
            onPress: () => navigation.navigate('Video',{id:8}),
            img: require('../assets/Video/batterie.jpg')
     
          },{
            id: 9,
            title: 'Conservation adéquate de votre moto, été comme hiver',
            onPress: () => navigation.navigate('Video',{id:9}),
            img: require('../assets/Video/bache.jpg')
     
          },
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
    <View style={styles.page}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.flatList}
      horizontal={false}
    />
  </View>
  )
}

export default Entretien

const styles = StyleSheet.create({
    texte: {
      textAlign: 'center',
      fontSize: 18,
      color: 'white'
    },
    page: {
      backgroundColor: 'black',
      flex: 1
    },
    flatList: {
      flex: 1,
      padding: 20,
      marginBottom:20,
      
    },
    img: {
      width: 300,
      height: 200,
      borderRadius: 50,
      marginBottom: 20,
  
    },
    item: {
      alignItems: 'center',
      marginBottom: 20,
    },
  });
  