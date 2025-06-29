import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import apiClient from '../api/client';

const EditItemScreen = ({ route, navigation }) => {
  // Ambil seluruh objek 'item' dari parameter route
  const { item } = route.params; 
  
  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [kategori, setKategori] = useState('');

  // useEffect sekarang digunakan untuk mengisi form saat komponen pertama kali render
  useEffect(() => {
    if (item) {
      setNamaBarang(item.nama_barang);
      setHarga(String(item.harga));
      setStok(String(item.stok));
      setKategori(item.kategori);
    }
  }, [item]);


  const handleUpdate = async () => {
    if (!namaBarang || !harga || !stok || !kategori) {
      alert('Semua field harus diisi!');
      return;
    }
    try {
      // Gunakan item._id untuk endpoint API
      await apiClient.put(`/items/${item._id}`, {
        nama_barang: namaBarang,
        harga: Number(harga),
        stok: Number(stok),
        kategori: kategori
      });
      navigation.goBack();
    } catch (error) {
      console.error("Gagal memperbarui barang:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput label="Nama Barang" value={namaBarang} onChangeText={setNamaBarang} style={styles.input} />
      <TextInput label="Harga" value={harga} onChangeText={setHarga} keyboardType="numeric" style={styles.input} />
      <TextInput label="Stok" value={stok} onChangeText={setStok} keyboardType="numeric" style={styles.input} />
      <TextInput label="Kategori" value={kategori} onChangeText={setKategori} style={styles.input} />
      <Button mode="contained" onPress={handleUpdate} style={styles.button}>
        Perbarui
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: 'white' },
    input: { marginBottom: 16 },
    button: { marginTop: 8 }
});

export default EditItemScreen;