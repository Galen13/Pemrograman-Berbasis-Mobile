import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import ImageCarousel from '../components/ImageCarousel';

const HomeScreen = ({ navigation }) => {
  const carouselImages = [
    { id: '1', uri: 'https://th.bing.com/th/id/OIP.h-A3QMdom7wMc41_6d6cCgHaDx?cb=iwc1&rs=1&pid=ImgDetMain' },
    { id: '2', uri: 'https://via.placeholder.com/350x150' },
    { id: '3', uri: 'https://via.placeholder.com/350x150' },
  ];

  const items = [
    { id: '1', title: 'Item 1', description: 'Deskripsi item 1 yang menarik', image: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Item 2', description: 'Deskripsi item 2 yang menarik', image: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Item 3', description: 'Deskripsi item 3 yang menarik', image: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Item 4', description: 'Deskripsi item 4 yang menarik', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <View style={styles.container}>
      <Header title="Aplikasi Mobile" />
      
      <ScrollView>
        <ImageCarousel images={carouselImages} />
        
        <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>👤</Text>
            </View>
            <Text style={styles.menuText}>Profil</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Settings')}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>⚙️</Text>
            </View>
            <Text style={styles.menuText}>Pengaturan</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>📋</Text>
            </View>
            <Text style={styles.menuText}>Daftar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>📊</Text>
            </View>
            <Text style={styles.menuText}>Statistik</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>Item Terbaru</Text>
        
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => 
              navigation.navigate('Detail', { 
                id: item.id,
                title: item.title,
                description: item.description,
                image: item.image
              })
            }
          >
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },
  menuItem: {
    width: '22%',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconText: {
    fontSize: 24,
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default HomeScreen;