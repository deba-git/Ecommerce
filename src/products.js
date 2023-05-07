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
      productName: "Redmi Note 12 Pro 5G",
      price: 24999,
      productImage: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672740784.31939923!500x500.jpg',
      category: 'Smartphone',
   },
   {
      id: 3,
      productName: "Galaxy F14 5G",
      price: 14999,
      productImage: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-e146bzghins/gallery/in-galaxy-f-sm-e146bzghins-sm-e---bzggins-thumb-536047037?$172_172_PNG$',
      category: 'Smartphone',
   },
   {
      id: 4,
      productName: "Galaxy A14 5G",
      price: 10999,
      productImage: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bdriins/gallery/in-galaxy-a14-5g-sm-a146-446757-sm-a146bdriins-thumb-534859418?$172_172_PNG$',
      category: 'Smartphone',
   },
   {
      id: 5,
      productName: " Samsung WindFree AC",
      price:  55242,
      productImage: 'https://images.samsung.com/is/image/samsung/p6pim/in/ar18cy5amwknna/gallery/in-ar9500-ac-windfree-448326-ar18cy5amwknna-thumb-534999069?$252_252_PNG$', // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 6,
      productName: "Voltas Split AC, 0.75 Ton",
      price: 40999,
      productImage: 'https://www.myvoltas.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/a/part02_3.png', // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 7,
      productName: "Voltas All Weather AC",
      price: 63999,
      productImage: 'https://www.myvoltas.com/pub/media/catalog/product/cache/2720ddd53d430d4ecc4dfa5da0667ee1/b/a/base06_1.png', // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 8,
      productName: " LG Convertible 6-in-1",
      price: 50999,
      productImage: 'https://www.lg.com/in/images/split-ac/md07565744/gallery/RS-Q18PNXE-D-01.jpg', // TODO: add image
      category: 'Air conditioner',
   },
   {
      id: 9,
      productName: "MI TV 4.5X",
      price: 18999,
      productImage: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1587610315.20344354.png?width=400&height=400', // TODO: add image
      category: 'TV',
   },
   {
      id: 10,
      productName: "Double Door Refrigerator",
      price: 78490,
      productImage: 'https://www.lg.com/in/images/refrigerators/md06236176/GC-B569BLCF-Refrigerators-Front-View-Thumb-350.jpg', // TODO: add image
      category: 'Refrigerator',
   },
   {
      id: 11,
      productName: "French Door",
      price: 334949,
      productImage: 'https://www.lg.com/in/images/refrigerators/md07529192/GR-X31FMQHL-Refrigerators-Food-Front-Light-On-350.jpg', // TODO: add image
      category: 'Refrigerator',
   },
   {
      id: 12,
      productName: "Xiomi SmartTv 5A",
      price: 21999,
      productImage: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1663152515.13515115.jpg?width=400&height=400', // TODO: add image
      category: 'TV',
   },
   {
      id: 13,
      productName: "MI TV 4X",
      price: 34999,
      productImage: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1587610315.20344354.png?', // TODO: add image
      category: 'TV',
   },
   {
      id: 14,
      productName: "Samsung Refrigerator",
      price: 26490,
      productImage: '//images.samsung.com/is/image/samsung/p6pim/in/rt28t3743s8-hl/gallery/in-top-mount-freezer-rt28t3743bshl-rt28t3743s8-hl-534486971?$650_519_PNG$', // TODO: add image
      category: 'Refrigerator',
   },
   {
      id: 15,
      productName: "Samsung 215L Digi-Touch Cool",
      price: 26490,
      productImage: 'https://images.samsung.com/is/image/samsung/p6pim/in/rr23c2f249u-hl/gallery/in-digi-touch-cool%E2%84%A2-449819-rr23c2f249u-hl-535136824?$2052_1641_PNG$', // TODO: add image
      category: 'Refrigerator',
   },
];

export const CATEGORIES = ['All'].concat(uniq(PRODUCTS.map(product => product.category)));