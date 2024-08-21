import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Aquí puedes hacer el fetch para buscar los supermercados en base al searchQuery
    // Por ejemplo:
    // fetch(`https://api.ejemplo.com/supermercados?query=${searchQuery}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Maneja los resultados de búsqueda aquí
    //   })
    //   .catch(error => {
    //     console.error('Error al buscar:', error);
    //   });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Búsqueda</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={require('../assets/icons/bell.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Buscar supermercados..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <Image source={require('../assets/icons/search.png')} style={styles.icon} /> {/*icono de busqueda*/}
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.categoryTitle}>Categorías:</Text>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require('../assets/icons/supermarket.png')} style={styles.icon} />
          <Text style={styles.categoryText}>Supermercado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require('../assets/icons/icecream.png')} style={styles.icon} />
          <Text style={styles.categoryText}>Heladería</Text>
        </TouchableOpacity>
      </View>

      {/* Aquí irían los resultados de la búsqueda */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#183153',
    paddingVertical: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  loginText: {
    color: '#183153',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchBarInput: {
    flex: 1,
    color: '#183153',
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 10,
  },
  categoryTitle: {
    color: '#183153',
    fontSize: 18,
    marginTop: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  categoryText: {
    color: '#183153',
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#183153',
  },
});
