import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Button from '../components/Button';

const DetailScreen = ({ route, navigation }) => {
  const { id, title, description, image } = route.params;
  
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: image }} 
        style={styles.image} 
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.id}>ID: {id}</Text>
        <Text style={styles.description}>{description}</Text>
        
        <Text style={styles.detailText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
          nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor 
          nisl nisl sit amet magna. Fusce gravida, eros vel pulvinar vulputate, 
          nisl nisl consectetur purus, eget porttitor nisl nisl sit amet magna.
        </Text>
        
        <View style={styles.specs}>
          <View style={styles.specItem}>
            <Text style={styles.specTitle}>Spesifikasi</Text>
            <Text style={styles.specValue}>Nilai 1</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specTitle}>Kualitas</Text>
            <Text style={styles.specValue}>Tinggi</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specTitle}>Rating</Text>
            <Text style={styles.specValue}>4.5/5</Text>
          </View>
        </View>
        
        <Button 
          title="Kembali ke Beranda" 
          onPress={() => navigation.navigate('Home')} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  id: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
  },
  detailText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
    marginBottom: 15,
  },
  specs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  specItem: {
    alignItems: 'center',
  },
  specTitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  specValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;