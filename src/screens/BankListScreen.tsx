import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { fetchBanks } from '../services/api';
import { saveBanks, getSavedBanks } from '../utils/storage';
import BankItem from '../components/BankItem';
import { Bank } from '../types/Bank';

const BankListScreen = () => {
    const [banks, setBanks] = useState<Bank[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadBanks = async () => {
        const cachedBanks = await getSavedBanks();
        if (cachedBanks) {
          setBanks(cachedBanks);
          setLoading(false);
        } else {
          const data: Bank[] = await fetchBanks();
          saveBanks(data);
          setBanks(data);
          setLoading(false);
        }
      };
  
      loadBanks();
    }, []);
  
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            testID="loading-indicator"
            size="large" 
            color="#4A90E2" 
        />
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Lista de Bancos</Text>
        <FlatList
          data={banks}
          keyExtractor={(item) => item.bankName}
          renderItem={({ item }) => <BankItem bank={item} />}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f4f8',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4f8',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
      color: '#333',
    },
  });
  
  export default BankListScreen;
  
