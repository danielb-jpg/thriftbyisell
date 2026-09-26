export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Bedding' | 'Bags' | 'Accessories';
  image: string;
  isNew?: boolean;
  isLimited?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
