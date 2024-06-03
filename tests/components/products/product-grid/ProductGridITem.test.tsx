import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Product } from '@/interfaces';
import { useCartStore } from '@/store';
import { ProductGridItem } from '@/app/components/products/product-grid/ProductGridItem';
import '@testing-library/jest-dom';

jest.mock('@/store', () => ({
  useCartStore: jest.fn(),
}));

const mockProduct: Product = {
  id: '1',
  name: 'Product 1',
  price: 100,
  photo: 'https://example.com/product1.jpg',
  description: 'Description for product 1',
  brand: 'Brand 1',
  cretedAt: '2021-09-01',
  updatepAt: '2021-09-01',
};

describe('ProductGridItem', () => {
  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(<ProductGridItem product={mockProduct} />);

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByAltText('Product 1')).toBeInTheDocument();
    expect(getByText('R$100')).toBeInTheDocument();
  });

  it('adds product to cart when button is clicked', () => {
    const addProductToCart = jest.fn();
    (useCartStore as unknown as jest.Mock).mockReturnValue(addProductToCart);

    const { getByRole } = render(<ProductGridItem product={mockProduct} />);
    fireEvent.click(getByRole('button'));

    expect(addProductToCart).toHaveBeenCalledWith({
      ...mockProduct,
      quantity: 1,
    });
    
  });
});
