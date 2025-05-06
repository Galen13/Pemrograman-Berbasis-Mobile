import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Button from '../components/Button';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nama Lengkap</Text>
          <Text style={styles.infoValue}>John Doe</Text>
        </View>
        <View style={styles.separator} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Alamat Email</Text>
          <Text style={styles.infoValue}>johndoe@example.com</Text>
        </View>
        <View style={styles.separator} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nomor Telepon</Text>
          <Text style={styles.infoValue}>+62 812 3456 7890</Text>
        </View>
        <View style={styles.separator} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Alamat</Text>
          <Text style={styles.infoValue}>Jl. Contoh No. 123, Jakarta</Text>
        </View>
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Statistik</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Pesanan</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Review</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Edit Profil" 
          onPress={() => alert('Edit profil')} 
        />
        <Button 
          title="Kembali ke Beranda" 
          onPress={() => navigation.navigate('Home')} 
          style={{ backgroundColor: '#9e9e9e', marginTop: 10 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.8,
  },
  infoSection: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  statsSection: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    margin: 10,
    marginBottom: 30,
  },
});

export default ProfileScreen;