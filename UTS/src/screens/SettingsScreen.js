import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);
  const [dataSync, setDataSync] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Umum</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifikasi</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#767577", true: "#a46aee" }}
            thumbColor={notifications ? "#6200ee" : "#f4f3f4"}
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Mode Gelap</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#767577", true: "#a46aee" }}
            thumbColor={darkMode ? "#6200ee" : "#f4f3f4"}
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Layanan Lokasi</Text>
          <Switch
            value={locationServices}
            onValueChange={setLocationServices}
            trackColor={{ false: "#767577", true: "#a46aee" }}
            thumbColor={locationServices ? "#6200ee" : "#f4f3f4"}
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Sinkronisasi Data</Text>
          <Switch
            value={dataSync}
            onValueChange={setDataSync}
            trackColor={{ false: "#767577", true: "#a46aee" }}
            thumbColor={dataSync ? "#6200ee" : "#f4f3f4"}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Akun</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Edit Profil</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Ubah Kata Sandi</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Privasi</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Tentang Aplikasi</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Bantuan</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.menuItemText}>Kembali ke Beranda</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
      
      <Text style={styles.versionText}>Versi 1.0.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemArrow: {
    fontSize: 20,
    color: '#888',
  },
  logoutButton: {
    margin: 10,
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 20,
  },
});

export default SettingsScreen;