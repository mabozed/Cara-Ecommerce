const featuredProducts = [
  {
    id: 1,
    image: './assets/img/products/f1.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 2,
    image: './assets/img/products/f2.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 3,
    image: './assets/img/products/f3.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 4,
    image: './assets/img/products/f4.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 5,
    image: './assets/img/products/f5.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 6,
    image: './assets/img/products/f6.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 7,
    image: './assets/img/products/f7.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 8,
    image: './assets/img/products/f8.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
]

const newArrivals = [
  {
    id: 9,
    image: './assets/img/products/n1.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 10,
    image: './assets/img/products/n2.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 11,
    image: './assets/img/products/n3.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 12,
    image: './assets/img/products/n4.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 13,
    image: './assets/img/products/n5.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 14,
    image: './assets/img/products/n6.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 15,
    image: './assets/img/products/n7.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
  {
    id: 16,
    image: './assets/img/products/n8.jpg',
    desc: 'Cartoon T-Shirts',
    rating: 5,
    price: 99,
    brand: 'adidas',
    quant: 1,
  },
]

const allProducts = featuredProducts.concat(newArrivals)

localStorage.setItem('products', JSON.stringify(allProducts))
