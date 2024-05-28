import {  StatusBar, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenticatedScreen from './screens/AuthenticatedScreen';
import Home from './screens/Home';
import Entretien from './screens/Entretien';
import VideoScreen from './screens/Video';
import Modele from './screens/Modele';
import DetailModele from './screens/Detailmodele';
import Actualite from './screens/Actualite';
import DetailActu from './screens/Detailactu';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();





function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f4511e" />
      <Stack.Navigator
        screenOptions={{ headerShadowVisible:false,
          headerStyle: {
            backgroundColor: '#f4511e',
            height: StatusBar.currentHeight + 50,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}>
          <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
         
        }}
        component={AuthenticatedScreen}
      />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{headerShown:false,
            title: 'Welcome to KTM',
          }}
        />
        <Stack.Screen name="Entretien" component={Entretien} />
        <Stack.Screen name="Video" component={VideoScreen} />
        <Stack.Screen name="Modele" component={Modele} />
        <Stack.Screen name="DetailModele" component={DetailModele} />
        <Stack.Screen name="Actualite" component={Actualite} />
        <Stack.Screen name="DetailActu" component={DetailActu} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});

export default App;
