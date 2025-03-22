import React from 'react';
import { render } from '@testing-library/react-native';
import BankItem from '../src/components/BankItem';
import { Bank } from '../src/types/Bank';

describe('BankItem Component', () => {
  const mockBank: Bank = {
    bankName: 'Banco de Prueba',
    description: 'Descripción de prueba',
    age: 10,
    url: 'https://example.com/logo.png',
  };

  it('renders correctly with bank data', () => {
    const { getByText, getByTestId } = render(<BankItem bank={mockBank} />);

    // Verifica que el nombre del banco se renderice
    expect(getByText('Banco de Prueba')).toBeTruthy();

    // Verifica que la descripción se renderice
    expect(getByText('Descripción de prueba')).toBeTruthy();

    // Verifica que los años en servicio se rendericen
    expect(getByText('Años en servicio: 10')).toBeTruthy();

    // Verifica que la imagen se renderice con la URL correcta
    const image = getByTestId('bank-image');
    expect(image.props.source.uri).toBe('https://example.com/logo.png');
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<BankItem bank={mockBank} />);
    expect(toJSON()).toMatchSnapshot();
  });
});