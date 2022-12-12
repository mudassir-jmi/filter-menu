let products = {
  data: [
    {
      productName: "Pizza",
      category: "All",
      price: "100",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Pizza",
      category: "Starter",
      price: "49",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Burger",
      category: "Main-Dish",
      price: "99",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Coffee",
      category: "Drinks",
      price: "29",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Cake",
      category: "Disert",
      price: "129",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Salled",
      category: "Starter",
      price: "89",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Cake",
      category: "Disert",
      price: "189",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Cake",
      category: "Disert",
      price: "200",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
    {
      productName: "Salled",
      category: "Starter",
      price: "49",
      image: "img/cheesecurd.jpg",
      cart:"➕",
    },
  ],
};

products.data[0].cart.onclick = openForm();
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "₹" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  // Plus button on card
  let cart = document.createElement('button');
  // open form onclick
  cart.addEventListener('click',openForm);
  cart.classList.add("cart");
  cart.innerText = i.cart;
  container.appendChild(cart);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  document.getElementById("myForm").style.display = "none";
  filterProduct("all");
};

// cart button
const Plus = document.querySelector(".plus"),
min = document.querySelector(".min"),
value = document.querySelector(".value");
let a = 0;
Plus.addEventListener("click", ()=>{
  a++;
  value.innerText = a;
})

min.addEventListener("click",()=> {
  if(a > 1) {
    a--;
   value.innerText = a;
  }
})