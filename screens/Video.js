import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Video } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

const VideoScreen = ({ route }) => {

  const data = [
    {
        id: 1,
        title: 'Changement d\'uile et du filtre à huile',
      onPress: () => navigation.navigate('Video',{id:1}),
      video: require('../assets/Video/filtrevideo.mp4')
    }, {
        id: 2,
        title: 'Contrôle de la pression des pneus et de leur usure',
        onPress: () => navigation.navigate('Video',{id:2}),
        video: require('../assets/Video/pneuvideo.mp4')

      },
       {
        id: 3,
        title: 'Entretien du système de freinage',
        onPress: () => navigation.navigate('Video',{id:3}),
        video: require('../assets/Video/purgefrein.mp4')

      },
      {
       id: 4,
       title: 'Nettoyage  de la moto  ',
       onPress: () => navigation.navigate('Video',{id:4}),
       video: require('../assets/Video/nettoyage.mp4')

     },
      {
        id: 5,
        title: 'Inspection et lubrification des câbles',
        onPress: () => navigation.navigate('Video',{id:5}),
        video: require('../assets/Video/cablevideo.mp4')
 
      },
      {
        id: 7,
        title: 'Remplacement régulier des filtres à air',
        onPress: () => navigation.navigate('Video',{id:7}),
        video: require('../assets/Video/filtrevideo.mp4')
 
      },
      {
        id: 8,
        title: 'État de la batterie',
        onPress: () => navigation.navigate('Video',{id:8}),
        video: require('../assets/Video/batterievideo.mp4')
 
      },{
        id: 9,
        title: 'Conservation adéquate de votre moto, été comme hiver',
        onPress: () => navigation.navigate('Video',{id:9}),
        video: require('../assets/Video/bachevid.mp4')
 
      },
  ];



  const { id } = route.params;


  const video = data.find(item => item.id === id);

  const [status, setStatus] = React.useState({});

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setStatus({ shouldPlay: false });
      };
    }, [])
  );

  if (!video) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{video.title}</Text>
      <Video
        source={video.video}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay={status.shouldPlay}
        onPlaybackStatusUpdate={status => setStatus(status)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign:'center'
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default VideoScreen;
