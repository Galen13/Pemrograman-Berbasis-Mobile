import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import apiClient from '../api/client';

const AddItemScreen = ({ navigation }) => {
  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('');

  const handleSave = async () => {
    if (!namaBarang || !harga || !stok || !kategori) {
      alert('Semua field harus diisi!');
      return;
    }
    try {
      await apiClient.post('/items', {
        nama_barang: namaBarang,
        harga: Number(harga),
        stok: Number(stok),
        kategori: kategori
      });
      navigation.goBack();
    } catch (error) {
      console.error("Gagal menyimpan barang:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput label="Nama Barang" value={namaBarang} onChangeText={setNamaBarang} style={styles.input} />
      <TextInput label="Harga" value={harga} onChangeText={setHarga} keyboardType="numeric" style={styles.input} />
      <TextInput label="Stok" value={stok} onChangeText={setStok} keyboardType="numeric" style={styles.input} />
      <TextInput label="Kategori" value={kategori} onChangeText={setKategori} style={styles.input} />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Simpan
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { marginBottom: 16 },
  button: { marginTop: 8 }
});

export default AddItemScreen;