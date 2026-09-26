import { Product, Category } from './types';
import egyptianBeddingImg from './assets/images/egyptian_bedding_1790430398416.jpg';
import leatherToteImg from './assets/images/leather_tote_1790430413439.jpg';
import duvetCoverImg from './assets/images/duvet_cover_1790430430532.jpg';
import crossbodyBagImg from './assets/images/crossbody_bag_1790430447379.jpg';
import silkPillowImg from './assets/images/silk_pillow_1790430459845.jpg';
import goldWatchImg from './assets/images/gold_watch_1790430473897.jpg';

export const CATEGORIES: Category[] = [
  { id: 'Bedding', name: 'Premium Bedding', icon: 'Bed' },
  { id: 'Bags', name: 'Designer Handbags', icon: 'ShoppingBag' },
  { id: 'Accessories', name: 'Lifestyle Accessories', icon: 'Watch' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Luxury Egyptian Cotton Set",
    price: 25000,
    category: "Bedding",
    image: egyptianBeddingImg,
    isNew: true
  },
  {
    id: 2,
    name: "Vintage Leather Tote",
    price: 18500,
    category: "Bags",
    image: leatherToteImg,
    isLimited: true
  },
  {
    id: 3,
    name: "Duvet Cover - Queen Size",
    price: 15000,
    category: "Bedding",
    image: duvetCoverImg
  },
  {
    id: 4,
    name: "Minimalist Crossbody Bag",
    price: 12000,
    category: "Bags",
    image: crossbodyBagImg,
    isNew: true
  },
  {
    id: 5,
    name: "Silk Pillowcase Pair",
    price: 8500,
    category: "Bedding",
    image: silkPillowImg
  },
  {
    id: 6,
    name: "Gold-Tone Watch",
    price: 35000,
    category: "Accessories",
    image: goldWatchImg,
    isLimited: true
  }
];

