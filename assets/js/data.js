const featuredProducts = [
  {
    id: 1,
    image: './assets/img/products/f1.jpg',
    desc: 'Summer T-Shirts',
    rating: 5,
    price: 99,
    brand: 'Ralph Lauren',
    quant: 1,
  },
  {
    id: 2,
    image: './assets/img/products/f2.jpg',
    desc: 'Tree Pattern T-Shirts',
    rating: 4.5,
    price: 102,
    brand: 'Ralph Lauren',
    quant: 1,
  },
  {
    id: 3,
    image: './assets/img/products/f3.jpg',
    desc: 'Spring T-Shirts',
    rating: 4,
    price: 88,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 4,
    image: './assets/img/products/f4.jpg',
    desc: 'Flower Pattern T-Shirts',
    rating: 5,
    price: 120,
    brand: 'Louis Vuitton',
    quant: 1,
  },
  {
    id: 5,
    image: './assets/img/products/f5.jpg',
    desc: 'Purple T-Shirts',
    rating: 4.5,
    price: 110,
    brand: 'Burberry',
    quant: 1,
  },
  {
    id: 6,
    image: './assets/img/products/f6.jpg',
    desc: 'Two-piece T-Shirts',
    rating: 4,
    price: 150,
    brand: 'Prada',
    quant: 1,
  },
  {
    id: 7,
    image: './assets/img/products/f7.jpg',
    desc: 'Summer pants',
    rating: 3.5,
    price: 75,
    brand: 'Versace',
    quant: 1,
  },
  {
    id: 8,
    image: './assets/img/products/f8.jpg',
    desc: 'Summer Women T-Shirts',
    rating: 4,
    price: 85,
    brand: 'Versace',
    quant: 1,
  },
]

const newArrivals = [
  {
    id: 9,
    image: './assets/img/products/n1.jpg',
    desc: 'Sky-blue shirt',
    rating: 3,
    price: 70,
    brand: 'Armani',
    quant: 1,
  },
  {
    id: 10,
    image: './assets/img/products/n2.jpg',
    desc: 'Gray shirt',
    rating: 3.5,
    price: 72,
    brand: 'Armani',
    quant: 1,
  },
  {
    id: 11,
    image: './assets/img/products/n3.jpg',
    desc: 'White shirt',
    rating: 4.5,
    price: 65,
    brand: 'Armani',
    quant: 1,
  },
  {
    id: 12,
    image: './assets/img/products/n4.jpg',
    desc: 'Military shirt',
    rating: 5,
    price: 95,
    brand: 'Armani',
    quant: 1,
  },
  {
    id: 13,
    image: './assets/img/products/n5.jpg',
    desc: 'blue shirt',
    rating: 4,
    price: 92,
    brand: 'Armani',
    quant: 1,
  },
  {
    id: 14,
    image: './assets/img/products/n6.jpg',
    desc: 'Sky-blue pants',
    rating: 4.5,
    price: 62,
    brand: 'Hugo Boss',
    quant: 1,
  },
  {
    id: 15,
    image: './assets/img/products/n7.jpg',
    desc: 'Beige shirt',
    rating: 4,
    price: 77,
    brand: 'Calvin Klein',
    quant: 1,
  },
  {
    id: 16,
    image: './assets/img/products/n8.jpg',
    desc: 'Black shirt',
    rating: 3,
    price: 50,
    brand: 'Calvin Klein',
    quant: 1,
  },
]

const allProducts = featuredProducts.concat(newArrivals)

if (allProducts.length > 0) {
  localStorage.setItem('products', JSON.stringify(allProducts))
} else {
  localStorage.setItem('products', JSON.stringify([]))
}
