import { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/animenewlogo.png')} 
        style={styles.image}
      />
      <ActivityIndicator size={'large'} color='black' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    position: 'absolute',
    top: 200,
    borderRadius: 30,
    borderWidth: 2, 
    borderColor: 'black', 
  },
});

export default Splash;
