import { uniq } from './helpers/utils';
import product1 from './image/samsung.jpg';


export const PRODUCTS = [
   {
      id: 1,
      productName: "Samsung Note 20",
      price: 15999,
      productImage: 'https://stg-images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863401',
      category: 'Smartphone',
   },
   {
      id: 2,
      productName: "Samsung Phone",
      price: 1999,
      productImage: product1,
      category: 'Smartphone',
   },
   {
      id: 3,
      productName: "Samsung Phone",
      price: 18999,
      productImage: product1,
      category: 'Smartphone',
   },
   {
      id: 4,
      productName: "Samsung Phone",
      price: 10999,
      productImage: product1,
      category: 'Smartphone',
   },
   {
      id: 5,
      productName: "Samsung AC",
      price: 1999,
      productImage: product1, // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 6,
      productName: "Samsung AC",
      price: 18999,
      productImage: product1, // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 7,
      productName: "Samsung AC",
      price: 10999,
      productImage: product1, // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 8,
      productName: "Samsung AC",
      price: 1999,
      productImage: product1, // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 9,
      productName: "Samsung TV",
      price: 18999,
      productImage: product1, // TODO: add image
      category: 'TV',
   },
   {
      id: 10,
      productName: "Samsung TV",
      price: 10999,
      productImage: product1, // TODO: add image
      category: 'TV',
   },
   {
      id: 11,
      productName: "Samsung TV",
      price: 1999,
      productImage: product1, // TODO: add image
      category: 'TV',
   },
   {
      id: 12,
      productName: "Samsung TV",
      price: 18999,
      productImage: product1, // TODO: add image
      category: 'TV',
   },
   {
      id: 13,
      productName: "Samsung TV",
      price: 10999,
      productImage: product1, // TODO: add image
      category: 'TV',
   },
   {
      id: 14,
      productName: "Samsung Refrigerator",
      price: 10999,
      productImage: product1, // TODO: add image
      category: 'Refrigerator',
   },
];

export const CATEGORIES = ['All'].concat(uniq(PRODUCTS.map(product => product.category)));