import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula un retraso antes de navegar a la pantalla principal
    setTimeout(() => {
      navigation.replace('MainApp');  // Reemplaza 'MainApp' con tu componente principal
    }, 3000); // 3 segundos de espera
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/LogoLSM.png')} style={styles.logo} />
      <Text style={styles.title}>LSM MultiApp</Text>
      <Text style={styles.footer}>Powered by AI</Text>
      <Text style={styles.developer}>Lukitas developerPro69</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A4659', // Color de fondo
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Color del texto
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    fontSize: 12,
    color: '#FFFFFF',
  },
  developer: {
    position: 'absolute',
    bottom: 15,
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default SplashScreen;
