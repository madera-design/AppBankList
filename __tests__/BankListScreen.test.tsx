import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import BankListScreen from '../src/screens/BankListScreen';
import { fetchBanks } from '../src/services/api';
import { saveBanks, getSavedBanks } from '../src/utils/storage';

// Mock de las funciones de la API y el almacenamiento
jest.mock('../src/services/api', () => ({
  fetchBanks: jest.fn(),
}));

jest.mock('../src/utils/storage', () => ({
  saveBanks: jest.fn(),
  getSavedBanks: jest.fn(),
}));

describe('BankListScreen Component', () => {
  const mockBanks = [
    {
      bankName: 'Banco 1',
      description: 'Descripción 1',
      age: 5,
      url: 'https://example.com/logo1.png',
    },
    {
      bankName: 'Banco 2',
      description: 'Descripción 2',
      age: 10,
      url: 'https://example.com/logo2.png',
    },
  ];

  it('shows loading indicator while fetching data', () => {
    const { getByTestId } = render(<BankListScreen />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders list of banks after fetching data', async () => {
    // Simula que la API devuelve datos
    (fetchBanks as jest.Mock).mockResolvedValue(mockBanks);
    (getSavedBanks as jest.Mock).mockResolvedValue(null);

    const { getByText, queryByTestId } = render(<BankListScreen />);

    // Espera a que desaparezca el indicador de carga
    await waitFor(() => expect(queryByTestId('loading-indicator')).toBeNull());

    // Verifica que los bancos se rendericen
    expect(getByText('Banco 1')).toBeTruthy();
    expect(getByText('Descripción 1')).toBeTruthy();
    expect(getByText('Banco 2')).toBeTruthy();
    expect(getByText('Descripción 2')).toBeTruthy();
  });

  it('matches snapshot', async () => {
    (fetchBanks as jest.Mock).mockResolvedValue(mockBanks);
    (getSavedBanks as jest.Mock).mockResolvedValue(null);

    const { toJSON } = render(<BankListScreen />);
    await waitFor(() => expect(toJSON()).toMatchSnapshot());
  });
});