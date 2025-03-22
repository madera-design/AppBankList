import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveBanks = async (banks: any) => {
  try {
    await AsyncStorage.setItem('banks', JSON.stringify(banks));
  } catch (error) {
    console.error('Error saving banks:', error);
  }
};

export const getSavedBanks = async () => {
  try {
    const data = await AsyncStorage.getItem('banks');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving banks:', error);
    return null;
  }
};
