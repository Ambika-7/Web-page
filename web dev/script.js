// console.log("welcome to our web page!")
// alert("welcome to our web page!")


// script.js

// script.js

// Select all the stars

                // const starContainer = document.getElementById('star-rating');
                // const ratingOutput = document.getElementById('rating-output');
                // let rating = 0;
            
                // // Function to update the rating display
                // function updateStars() {
                //     starContainer.innerHTML = '';
                //     for (let i = 1; i <= 5; i++) {
                //         const star = document.createElement('span');
                //         star.innerHTML = i <= rating ? '★' : '☆'; // Filled star for selected rating, empty star for others
                //         star.style.cursor = 'pointer';
                //         star.style.fontSize = '24px';
                //         star.style.color = i <= rating ? '#FFD700' : '#ccc'; // Gold for selected, grey for unselected
            
                //         // Event listener for each star
                //         star.addEventListener('click', () => {
                //             rating = i;
                //             ratingOutput.innerText = `Your Rating: ${rating}`;
                //             updateStars();
                //         });
                //         starContainer.appendChild(star);
                //     }
                // }
            
                // // Initialize stars on page load
                // updateStars();

                // const starContainer = document.getElementById('star-rating');
                // const ratingOutput = document.getElementById('rating-output');
                // let rating = 0;
            
                // // Function to update the rating display
                // function updateStars() {
                //     starContainer.innerHTML = '';
                //     for (let i = 1; i <= 5; i++) {
                //         const star = document.createElement('span');
                //         star.innerHTML = i <= rating ? '★' : '☆'; // Filled star for selected rating, empty star for others
                //         star.style.cursor = 'pointer';
                //         star.style.fontSize = '24px';
                //         star.style.color = i <= rating ? '#FFD700' : '#ccc'; // Gold for selected, grey for unselected
            
                //         // Event listener for each star
                //         star.addEventListener('click', () => {
                //             rating = i;
                //             ratingOutput.innerText = `Your Rating: ${rating}`;
                //             updateStars();
                //         });
                //         starContainer.appendChild(star);
                //     }
                // }
            
                // // Initialize stars on page load
                // updateStars();


  //               <script>
  //   // Fetch JSON data
  //   fetch('login.json')
  //     .then(response => response.json())
  //     .then(data => displayProducts(data))
  //     .catch(error => console.error('Error fetching products:', error));

  //   // Display products on the page
  //   function displayProducts(products) {
  //     const productList = document.getElementById('product-list');
  //     productList.innerHTML = ''; // Clear previous content

  //     products.forEach(product => {
  //       const productDiv = document.createElement('div');
  //       productDiv.classList.add('product');

  //       productDiv.innerHTML = `
  //         <img src="${product.image}" alt="${product.name}">
  //         <h2>${product.name}</h2>
  //         <p>${product.description}</p>
  //         <p><strong>Price:</strong> $${product.price}</p>
  //       `;

  //       productList.appendChild(productDiv);
  //     });
  //   }
  // </script>



// import "./stylesheet.css";
  
// import data from "./api/data.json";

// console.log(data);


// URL of the JSON data (replace this with the actual path to your JSON file or API endpoint)


// Fetch data from the JSON source


let modebtn = document.querySelector("#mode");
let currMode = "light";

modebtn.addEventListener("click", () => {
  if(currMode == "light"){
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "pink";
  
  } else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  

  console.log(currMode);
});