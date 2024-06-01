'use client';


import { useQuery } from 'react-query';
import axios from 'axios';
import { Product } from '@/interfaces';

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=price&orderBy=DESC');
  return data.products; 
};

export const getAllProduct = () => {
  return useQuery('products', fetchProducts);
};
