import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      name: 'Pratik',
      email:'pratik@gmail.com',
      password: bcrypt.hashSync('123456789', 8),
      isAdmin: true
    },
    {
      name: 'Bibash',
      email:'Bibash@gmail.com',
      password: bcrypt.hashSync('1234567890', 8),
      isAdmin: false
    }
  ],
    products: [
        {
          name: 'Free Fire 1',
          slug: 'freefire',
          category: 'Shirts',
          image: '/images/freefire1.jpg',
          price: 70,
          brand: 'Game',
          rating: 4.5,
          numReviews: 8,
          countInStock: 20,
          description: 'A popular shirt',
          isFeatured: true,
          banner: '/images/banner1.png',
        },
        {
            name: 'Free Fire 2',
            slug: 'freerire',
            category: 'Shirts',
            image: '/images/freefire2.jpg',
            price: 80,
            brand: 'game',
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
            isFeatured: true,
            banner: '/images/banner2.png',
          },
          {
            name: 'Pubg 1',
            slug: 'pubg1',
            category: 'Shirts',
            image: '/images/pubg.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A popular shirt',
          },
          {
            name: 'Pubg 2',
            slug: 'pubg2',
            category: 'Pants',
            image: '/images/pubg1.jpg',
            price: 90,
            brand: 'Game',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'Smart looking pants',
          },
          {
            name: 'Fortnight 1',
            slug: 'fortnight1',
            category: 'Pants',
            image: '/images/freefire1.jpg',
            price: 95,
            brand: 'Game',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'A popular pants',
          },
          {
            name: 'Fortnight 2',
            slug: 'fortnight2',
            category: 'Pants',
            image: '/images/freefire2.jpg',
            price: 75,
            brand: 'Game',
            rating: 2.4,
            numReviews: 14,
            countInStock: 20,
            description: 'A popular pants',
          },
    ]
}

export default data;