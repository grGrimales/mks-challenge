import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Product } from '@/interfaces';
import { ProductGrid } from '@/app/components/products/product-grid/ProductGrid';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    photo: 'https://example.com/product1.jpg',
    description: 'Description for product 1',
    brand: 'Brand 1',
    cretedAt: '2021-09-01',
    updatepAt: '2021-09-01',

  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    photo: 'https://example.com/product2.jpg',
    description: 'Description for product 2',
    brand: 'Brand 2',
    cretedAt: '2021-09-01',
    updatepAt: '2021-09-01',

  },
];

describe('ProductGrid', () => {
  it('renders the products correctly', () => {

    console.log('mockProducts', )
     const { getByText, getByAltText } = render(<ProductGrid products={mockProducts} />);

    expect(getByText('Product 1')).toBeInTheDocument();

     expect(getByAltText('Product 1')).toBeInTheDocument();

     expect(getByText('R$100')).toBeInTheDocument();
  });
});
