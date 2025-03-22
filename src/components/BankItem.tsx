import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Bank } from '../types/Bank';

const BankItem = ({ bank }: { bank: Bank })  => {
  return (
    <View style={styles.card}>
      <Image 
        testID="bank-image" 
        source={{ uri: bank.url }} 
        style={styles.image} 
        resizeMode="contain"
       />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{bank.bankName}</Text>
        <Text style={styles.description}>{bank.description}</Text>
        <Text style={styles.age}>Años en servicio: {bank.age}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  age: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#777',
    marginTop: 6,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
});

export default BankItem;
