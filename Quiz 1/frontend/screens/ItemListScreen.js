import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import apiClient from '../api/client';
import ItemCard from '../components/ItemCard'; // <-- Import ItemCard

const ItemListScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await apiClient.get('/items');
      setItems(response.data);
    } catch (error) {
      console.error("Gagal mengambil data barang:", error);
    }
  };

  // useFocusEffect akan memanggil fetchItems setiap kali layar ini ditampilkan
  useFocusEffect(
    useCallback(() => {
      fetchItems();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          // Gunakan komponen ItemCard di sini
          <ItemCard item={item} refresh={fetchItems} />
        )}
        contentContainerStyle={styles.list}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('TambahBarang')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8' // Latar belakang abu-abu muda
  },
  list: {
    paddingVertical: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default ItemListScreen;