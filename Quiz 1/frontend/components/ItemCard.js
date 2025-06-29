import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import api from '../api/client';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ItemCard({ item, refresh }) {
  const navigation = useNavigation();

  const handleDelete = async () => {
    await api.delete(`/items/${item._id}`);
    refresh();
  };

  return (
    <Card style={{ margin: 10, borderRadius: 12, elevation: 3, backgroundColor: '#f5f5f5' }}>
      <Card.Title
        title={item.nama_barang}
        titleStyle={{ fontWeight: 'bold', color: '#333' }}
        left={(props) => <MaterialCommunityIcons {...props} name="package-variant" size={30} color="#666" />}
      />
      <Card.Content>
        <Text style={{ color: '#555', marginBottom: 5 }}>💰 Harga : Rp {item.harga.toLocaleString()}</Text>
        <Text style={{ color: '#555', marginBottom: 5 }}>📦 Stok : {item.stok}</Text>
        <Text style={{ color: '#555' }}>🏷️ Kategori : {item.kategori}</Text>
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end', gap: 10 }}>
        <Button
          icon="pencil"
          mode="contained"
          onPress={() => navigation.navigate('Edit Barang', { item })}
          buttonColor="#FFA500"
          textColor="#000" >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          onPress={handleDelete}
          buttonColor="#d32f2f"
          textColor="#fff" >
          Hapus
        </Button>
      </Card.Actions>
    </Card>
  );
}
