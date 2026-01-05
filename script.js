const drinks = [
  {
    name: "Matcha Latte",
    img:"./imgs/Matchaa.jpg",
    price: 450,
    description: "Smooth green tea latte with a rich, earthy flavor."
  },
  {
    name: "Cappuccino",
    img: "./imgs/Cappuccino.jpg",
    price: 380,
    description: "Classic Italian coffee topped with creamy milk foam."
  },
  {
    name: "Espresso",
    img: "./imgs/Espresso.jpg",
    price: 300,
    description: "Strong and bold coffee shot for instant energy."
  },
  {
    name: "Iced Coffee",
    img: "./imgs/Iced\ Coffee.jpg",
    price: 350,
    description: "Chilled coffee served over ice, refreshing and smooth."
  },
  {
    name: "Orange Juice",
    img: "./imgs/Orange\ Juice.jpg",
    price: 250,
    description: "Freshly squeezed oranges with natural sweetness."
  },
  {
    name: "Mango Juice",
    img: "./imgs/Mango\ Juice.jpg",
    price: 280,
    description: "Sweet and tropical mango drink, full of flavor."
  },

  {
    name: "Lemonade",
    img: "./imgs/Lemonade.jpg",
    price: 220,
    description: "Cool and tangy lemon drink, perfect for summer."
  },
  {
    name: "Green Tea",
    img: "./imgs/Green\ Tea.jpg",
    price: 200,
    description: "Light and healthy tea with a calming taste."
  }
];

var add = ''

drinks.forEach(function(dets){
    console.log("helloo")
    add = add +`    <div class="card">
          <img src="${dets.img}" alt="">
        <div class="details">
          <h1>${dets.name}</h1>
          <h2>Price: ${dets.price}</h2>
        </div>
        <p>${dets.description}</p>
      </div>
`
})

var main = document.querySelector('main')
main.innerHTML = add