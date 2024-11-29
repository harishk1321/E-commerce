const products = [
  {
    name: 'Laptop',
    description: 'High-performance laptop for gaming and work',
    price: 1000,
    image: 'images/laptop.jpg',
  },
  {
    name: 'Headphones',
    description: 'Noise-canceling wireless headphones',
    price: 200,
    image: 'images/headphones.jpg',
  },
  {
    name: 'Smartphone',
    description: 'Latest model with high-end features',
    price: 800,
    image: 'images/smartphone.jpg',
  },
    {
      name: 'TV',
    description: 'Smart Remote with HD Ready Blueetooth v5.0',
    price: 1500,
    image: 'images/headphones.jpg',
    },
    {
      name: 'earpods',
    description: 'Noise-canceling wireless Earphones',
    price: 400,
    image: 'images/headphones.jpg',
    },
    {
      name: 'Refrigerator',
    description: 'Powerful cooling and Long lasting freshness',
    price: 2000,
    image: 'images/headphones.jpg',
    },
]
];

const productGrid = document.getElementById('products');

const renderProducts = () => {
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productGrid.appendChild(productDiv);
  });
};

const addToCart = (productName) => {
  alert(`${productName} added to cart!`);
};

window.onload = renderProducts;
