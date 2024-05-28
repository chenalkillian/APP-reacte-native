import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import React from 'react'
const windowWidth = Dimensions.get('window').width;



const Modele = ({navigation}) => {




const SX = [
  {
    id: 1,
    title: '2024 KTM 85 SX 19/16',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-85-sx-1916.html"}),
        img: require('../assets/SX/img1.png')

  }, {
      id: 2,
      title: '2024 KTM 85 17/14',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-85-17-14.html"}),
      img: require('../assets/SX/img2.png')

    },
    {
      id: 3,
      title: '2024 KTM 300 SX',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-300-sx.html"}),
                img: require('../assets/SX/img3.png')


    },
    {
      id: 4,
      title: '2024 KTM 65 SX',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-65-sx.html"}),
          img: require('../assets/SX/img4.png')

    },
    {
      id:5,
      title: '2024 KTM 250 SX',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-250-sx.html"}),
          img: require('../assets/SX/img5.png')

    },
    {
      id: 6,
      title: '2024 KTM 125 SX',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-125-sx.html"}),
          img: require('../assets/SX/img6.png')

    },
    {
      id: 7,
      title: '2024 KTM 50 SX FACTORY EDITION',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-50-sx-factoryedition.html"}),
          img: require('../assets/SX/img7.png')

    },
    {
      id: 8,
      title: '2024 KTM 50 SX',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/mx/2-temps/2024-ktm-50-sx.html"}),
          img: require('../assets/SX/img8.png')

    }
];




//data Brabus
const BRABUS = [
  {
    id: 1,
    title: 'BRABUS 1300 R MASTERPIECE EDITION',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/brabus/brabus-1300-r-masterpieceedition.html"}),

        img: require('../assets/BRABUS/img1.png')

  }, {
      id: 2,
      title: '2023 BRABUS 1300 R EDITION',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/brabus/2023-brabus-1300redition.html"}),
      img: require('../assets/BRABUS/img2.png')

    }
];

//data TRAVEL
const TRAVEL = [
  {
    id: 1,
    title: '2024 KTM 1290 SUPER ADVENTURE R',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-1290-superadventurer.html"}),

        img: require('../assets/TRAVEL/img1.png')

  }, {
      id: 2,
      title: '2024 KTM 1290 SUPER ADVENTURE S',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-1290-superadventures.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 3,
      title: '2024 KTM 890 ADVENTURE R RALLY',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-890-adventurerrally.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 4,
      title: '2024 KTM 890 ADVENTURE R',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-890-adventurer.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 5,
      title: '2024 KTM 890 ADVENTURE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-890-adventure.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 6,
      title: '2024 KTM 790 ADVENTURE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-790-adventure.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 7,
      title: '2024 KTM 690 ENDURO R',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-690-enduror.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 8,
      title: '2024 KTM 390 ADVENTURE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-390-adventure.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }, {
      id: 9,
      title: '2024 KTM 390 ADVENTURE SW',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/travel/2024-ktm-390-adventuresw.html"}),
      img: require('../assets/TRAVEL/img2.png')

    }
];




//data NAKED BIKE

const NAKEDBIKE= [
  {
    id: 1,
    title: '2024 KTM 1390 SUPER DUKE R EVO',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2024-ktm-1390-superdukerevo.html"}),

        img: require('../assets/NAKEDBIKE/img1.png')

  }, {
      id: 2,
      title: '2024 KTM 1390 SUPER DUKE R',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2024-ktm-1390-superduker.html"}),
      img: require('../assets/NAKEDBIKE/img2.png')

    }, {
      id: 3,
      title: '2024 KTM 990 DUKE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2024-ktm-990-duke.html"}),
      img: require('../assets/NAKEDBIKE/img3.png')

    }, {
      id: 4,
      title: '2024 KTM 790 DUKE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2024-ktm-790-duke.html"}),
      img: require('../assets/NAKEDBIKE/img4.png')

    }, {
      id: 5,
      title: '2024 KTM 390 DUKE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2024-ktm-390-duke.html"}),
      img: require('../assets/NAKEDBIKE/img5.png')

    }, {
      id: 6,
      title: '2024 KTM 125 DUKE',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2024-ktm-125-duke.html"}),
      img: require('../assets/NAKEDBIKE/img6.png')

    }, {
      id: 7,
      title: '2023 KTM 890 DUKE GP',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2023-ktm-890-dukegp.html"}),
      img: require('../assets/NAKEDBIKE/img7.png')

    }, {
      id: 8,
      title: '2023 KTM 890 DUKE R',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/naked-bike/2023-ktm-890-duker.html"}),
      img: require('../assets/NAKEDBIKE/img8.png')

    },
];





//data SUPERSPORT

const SUPERSPORT = [
  {
    id: 1,
    title: '2024 KTM RC 8C',
        onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/supersport/2024-ktm-rc-8c.html"}),

        img: require('../assets/SUPERSPORT/img1.png')

  }, {
      id: 2,
      title: '2024 KTM RC 390',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/supersport/2024-ktm-rc-390.html"}),
      img: require('../assets/SUPERSPORT/img2.png')

    }, {
      id: 3,
      title: '2024 KTM RC 125',
      onPress: () => navigation.navigate('DetailModele',{site:"https://www.ktm.com/fr-fr/models/supersport/2024-ktm-rc-125.html"}),
      img: require('../assets/SUPERSPORT/img3.png')

    }
];



 // Fonction de rendu pour la liste SX
 const renderSXItem = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
    <View style={styles.item}>
      <Text style={styles.texte}>{item.title}</Text>
      <Image source={item.img} style={styles.img} />
    </View>
  </TouchableOpacity>
);

// Fonction de rendu pour la liste BRABUS
const renderBrabusItem = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
    <View style={styles.item}>
      <Text style={styles.texte}>{item.title}</Text>
      <Image source={item.img} style={styles.img} />
    </View>
  </TouchableOpacity>
);


// Fonction de rendu pour la liste Travel
const renderTravelItem = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
    <View style={styles.item}>
      <Text style={styles.texte}>{item.title}</Text>
      <Image source={item.img} style={styles.img} />
    </View>
  </TouchableOpacity>
);



// Fonction de rendu pour la liste NakedBike
const renderNakedBikeItem = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
    <View style={styles.item}>
      <Text style={styles.texte}>{item.title}</Text>
      <Image source={item.img} style={styles.img} />
    </View>
  </TouchableOpacity>
);




// Fonction de rendu pour la liste NakedBike
const renderSUPERSPORTItem = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
    <View style={styles.item}>
      <Text style={styles.texte}>{item.title}</Text>
      <Image source={item.img} style={styles.img} />
    </View>
  </TouchableOpacity>
);

return (
  <ScrollView style={styles.page2}>
    <View style={styles.page}>
      <Text style={styles.titre}>Modele SX !</Text>
      <FlatList
        data={SX}
        renderItem={renderSXItem}
        keyExtractor={item => item.id.toString()} // Convertir l'ID en chaîne de caractères
        style={styles.flatList}
        horizontal={true}
      />

      <Text style={styles.titre}>Modele BRABUS !</Text>
      <FlatList
        data={BRABUS}
        renderItem={renderBrabusItem} // Utiliser la fonction de rendu pour BRABUS
        keyExtractor={item => item.id.toString()} // Convertir l'ID en chaîne de caractères
        style={styles.flatList}
        horizontal={true}
      />




<Text style={styles.titre}>Modele TRAVEL !</Text>
      <FlatList
        data={TRAVEL}
        renderItem={renderTravelItem} // Utiliser la fonction de rendu pour BRABUS
        keyExtractor={item => item.id.toString()} // Convertir l'ID en chaîne de caractères
        style={styles.flatList}
        horizontal={true}
      />






<Text style={styles.titre}>Modele Naked Bike !</Text>
      <FlatList
        data={NAKEDBIKE}
        renderItem={renderNakedBikeItem} // Utiliser la fonction de rendu pour BRABUS
        keyExtractor={item => item.id.toString()} // Convertir l'ID en chaîne de caractères
        style={styles.flatList}
        horizontal={true}
      />



<Text style={styles.titre}>Modele SUPERSPORT !</Text>
      <FlatList
        data={SUPERSPORT}
        renderItem={renderSUPERSPORTItem} // Utiliser la fonction de rendu pour BRABUS
        keyExtractor={item => item.id.toString()} // Convertir l'ID en chaîne de caractères
        style={styles.flatList}
        horizontal={true}
      />



    </View>
  </ScrollView>
);
}
export default Modele


const styles = StyleSheet.create({
  titre: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    color:'red',
    
  }, texte: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  },
  page: {
    backgroundColor: 'black',
    flex: 1
  },
  flatList: {
    flex: 1,
    padding: 20,
    
    
  },
  img: {
    width:windowWidth,
    height:300,
    borderRadius: 50,
    marginBottom: 20,
    marginRight:50,
    left:-10

  },
  item: {
    alignItems: 'center',
    marginBottom: 20,
  },  page2: {
    backgroundColor: 'black',
    flex: 1,
  },
});
