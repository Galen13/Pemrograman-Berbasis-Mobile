// frontend/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import ItemListScreen from './screens/ItemListScreen';
import AddItemScreen from './screens/AddItemScreen';
import EditItemScreen from './screens/EditItemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DaftarBarang">
          {/* Ubah judul di sini agar lebih rapi */}
          <Stack.Screen name="DaftarBarang" component={ItemListScreen} options={{ title: 'TokoKu' }} />
          
          {/* Pastikan nama ini juga cocok */}
          <Stack.Screen name="TambahBarang" component={AddItemScreen} options={{ title: 'Tambah Barang' }} />
          
          {/* UBAH BAGIAN INI: tambahkan spasi pada 'name' */}
          <Stack.Screen name="Edit Barang" component={EditItemScreen} options={{ title: 'Edit Barang' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}