document.addEventListener('DOMContentLoaded', () => {
    fetch('./api/data.json')
      .then(response => response.json())
      .then(data => displayProducts(data))
      .catch(error => console.error('Error fetching JSON:', error));
  
    function displayProducts(products) {
      console.log(products);
      const productList = document.getElementById('product-list');
      productList.innerHTML = ''; // Clear previous content
      console.log(productList);
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
  
        // Add an <img> element for the product image
        productDiv.innerHTML = `
          <h2>${product.name}</h2>
          <img src="${product.image_url}" alt="${product.name}" width="500" />
          <p>${product.description}</p>
          <p><strong>Price:</strong> $${product.price}</p>
        `;
  
        productList.appendChild(productDiv);
      });
    }
  });