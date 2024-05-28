import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const firebaseConfig = {
  apiKey: "AIzaSyDLu_SNw66YIVs8ruwMGwxnv1DDcxuzbKQ",
  authDomain: "test-1ed88.firebaseapp.com",
  projectId: "test-1ed88",
  storageBucket: "test-1ed88.appspot.com",
  messagingSenderId: "240250228794",
  appId: "1:240250228794:web:ddef4fee8b65752e5d6503",
  measurementId: "G-NCX2XWPCS9"
};
const app = initializeApp(firebaseConfig);

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}> 
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
    
      <View style={styles.container}>
        <Button
          title="Sign In"
          onPress={handleAuthentication}
          color="#DF3131"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
}

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), user => {
      if (user) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const handleAuthentication = async () => {
    const auth = getAuth(app);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } 
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };
  
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/dd/e5/89/dde58960f101023adcef47c77b63fa4d.jpg' }}
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 15,
    elevation: 99,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white'
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 3,
    marginBottom: 20,
    padding: 8,
    borderRadius: 9,
    color: 'white',
    fontSize: 15
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
});

export default App;
