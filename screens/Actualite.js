import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

const Actualite = ({navigation}) => {



const data =[
    {

    id:1,
    img:require('../assets/actualite/img1.jpg'),
    date:'21 mars 2024',
    title:'KTM EXPRESSES THANKS TO TOBY PRICE AS PARTNERSHIP CONCLUDES',
    paragraph:'Red Bull KTM Factory Racing would like to thank two-time Dakar Rally Champion Toby Price for the many achievements and results he earned with the team over the past nine seasons, as his contract concludes.',
    onPress: () => navigation.navigate('DetailActu',{id:1}),
    

},
{

    id:2,
    img:require('../assets/actualite/img2.jpg'),
    date:'17 mars 2024',
    title:'CHASE SEXTON AND TOM VIALLE CLAIM TRIPLE CROWN PODIUMS IN INDIANAPOLIS',
    paragraph:'Red Bull KTM Factory Racing\'s Chase Sexton and Tom Vialle both earned podium results in tonight\'s 10th round of the 2024 AMA Supercross Championship at the Indianapolis Triple Crown, with Sexton racing to third overall in 450SX',
    onPress: () => navigation.navigate('DetailActu',{id:2}),
},
{

    id:3,
    img:require('../assets/actualite/img3.jpg'),
    date:'10 mars 2024',
    title:'SOLID AND STEADY START FOR RED BULL KTM AT 2024 MXGP OPENER IN ARGENTINA',
    paragraph:'World Championship winners and MX2 class defending #1s, Red Bull KTM Factory Racing, launched the 2024 MXGP season with Andrea Adamo scoring a top five finish in the dark sandy volcanic soil of Neuquen for the Grand Prix of Argentina and the first round of twenty in the new campaign.',
    onPress: () => navigation.navigate('DetailActu',{id:3}),


},


]







    
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={item.onPress}>
      <View style={styles.item}>
         <Image source={item.img} style={styles.img} />
        <Text style={styles.texte}>{item.title}</Text>
        <Text style={styles.texte2}>More ....</Text>

       
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
  );
}

export default Actualite



const styles = StyleSheet.create({
    texte: {
      textAlign: 'center',
      fontSize: 15,
      color: 'white',
      marginBottom:10
    },  texte2: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginBottom:50,
        color:'red'
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
      width: '100%',
      height:250,
      borderRadius: 50,
      marginBottom: 20,
  
    },
    item: {
      alignItems: 'center',
      marginBottom: 20,
    },
  });
  