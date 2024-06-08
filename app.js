// these are the array of objects .the main data .
const bikes = [
  {
    name: "Giant Propel",
    price: 6200,
    imageUrl:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Cannondale",
    price: 9000,
    imageUrl:
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Bianchi ",
    price: 11000,
    imageUrl:
      "https://images.unsplash.com/photo-1610100177133-cb4788574137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Scott Addict",
    price: 13000,
    imageUrl:
      "https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Cervelo S5",
    price: 11500,
    imageUrl:
      "https://images.unsplash.com/photo-1622185135825-d34b40aa03ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    name: "BMW z10R",
    price: 12500,
    imageUrl:
      "https://images.unsplash.com/photo-1568816642854-e5a99030f9af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Colnago V3Rs",
    price: 12000,
    imageUrl:
      "https://images.unsplash.com/photo-1627062598433-016841c1f1e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    name: "Wilier Triestina",
    price: 10500,
    imageUrl:
      "https://images.unsplash.com/photo-1622547918989-02ebc7a89eb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGJpa2VzfGVufDB8fDB8fHww",
  },
];

const cars = [
  {
    name: "Tesla Model S",
    price: 7900,
    imageUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "BMW 3 Series",
    price: 41250,
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Audi A4",
    price: 39900,
    imageUrl:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Mercedes-Benz C-Class",
    price: 41500,
    imageUrl:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Lexus IS",
    price: 38500,
    imageUrl:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Honda Accord",
    price: 24970,
    imageUrl:
      "https://images.unsplash.com/photo-1555353540-64580b51c258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Toyota Camry",
    price: 24425,
    imageUrl:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Chevrolet Malibu",
    price: 22395,
    imageUrl:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8MHx8fDA%3D",
  },
];

const mobiles = [
  {
    name: "OnePlus 9 Pro",
    price: 96000,
    imageUrl:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sony Xperia 1 III",
    price: 12000,
    imageUrl:
      "https://images.unsplash.com/photo-1557690267-fad2f168bb95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Xiaomi Mi 11 Ultra",
    price: 11000,
    imageUrl:
      "https://images.unsplash.com/photo-1598327106026-d9521da673d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Oppo Find X3 Pro",
    price: 1100,
    imageUrl:
      "https://images.unsplash.com/photo-1551355738-1875b6664915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Huawei P50 Pro",
    price: 1000,
    imageUrl:
      "https://images.unsplash.com/photo-1601790471088-dae753045d66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Asus ROG Phone 5",
    price: 900,
    imageUrl:
      "https://images.unsplash.com/photo-1591636293132-1761271fcce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Realme GT 5G",
    price: 600,
    imageUrl:
      "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Apple iPhone 12",
    price: 1000,
    imageUrl:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const laptops = [
  {
    name: "Dell XPS 13",
    price: 100,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681566925246-cc584a44d7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "MacBook Pro ",
    price: 2300,
    imageUrl:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "HP Spectre",
    price: 1400,
    imageUrl:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lenovo ThinkPad",
    price: 1600,
    imageUrl:
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Asus ZenBook 14",
    price: 10000,
    imageUrl:
      "https://images.unsplash.com/photo-1566647387313-9fda80664848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Microsoft Surface",
    price: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1584433305355-9cb73387fc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Acer Swift 5",
    price: 10000,
    imageUrl:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Pixelbook Go",
    price: 6000,
    imageUrl:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Samsung Book Flex",
    price: 12000,
    imageUrl:
      "https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D",
  },
];

// these are the functions it will run on reload and on click on "view more".
function addLaptops() {
  for (let i = 0; i < laptops.length; i++) {
    let product = document.querySelector(".laptops");
    product.innerHTML += `
        <div class="product-item">
          <img src="${laptops[i].imageUrl}" alt="for sale" class="hover" />
          <div class="first-line">
            <h4>${laptops[i].price}</h4>
            <img class="hover "id="cart-img" src="Images/cart.png" alt=""  onclick="addToCart(laptops[${i}])" />
          </div>
          <div class="name">
            <h5>${laptops[i].name}</h5>
          </div>
          <div class="info">Karachi,Sindh <br />1 day ago</div>
        </div>
        `;
  }
}
addLaptops();

function addBikes() {
  for (let i = 0; i < bikes.length; i++) {
    let product = document.querySelector(".bikes");
    product.innerHTML += `
          <div class="product-item">
            <img src="${bikes[i].imageUrl}" alt="for sale" class="hover" />
            <div class="first-line">
              <h4>${bikes[i].price}</h4>
              <img class="hover " id="cart-img"src="Images/cart.png" alt=""  onclick="addToCart(bikes[${i}])"/>
            </div>
            <div class="name">
              <h5>${bikes[i].name}</h5>
            </div>
            <div class="info">Karachi,Sindh <br />1 day ago</div>
          </div>
          `;
  }
}
addBikes();

function addMobiles() {
  for (let i = 0; i < mobiles.length; i++) {
    let product = document.querySelector(".mobiles");
    product.innerHTML += `
          <div class="product-item">
            <img src="${mobiles[i].imageUrl}" alt="for sale" class="hover" />
            <div class="first-line">
              <h4>${mobiles[i].price}</h4>
              <img class="hover" id="cart-img" src="Images/cart.png" alt=""  onclick="addToCart(mobiles[${i}])"/>
            </div>
            <div class="name">
              <h5>${mobiles[i].name}</h5>
            </div>
            <div class="info">Karachi,Sindh <br />1 day ago</div>
          </div>
          `;
  }
}
addMobiles();

function addCars() {
  for (let i = 0; i < cars.length; i++) {
    let product = document.querySelector(".cars");
    product.innerHTML += `
          <div class="product-item">
            <img src="${cars[i].imageUrl}" alt="for sale" class="hover" />
            <div class="first-line">
              <h4>${cars[i].price}</h4>
              <img class="hover " id="cart-img"src="Images/cart.png" alt="" onclick="addToCart(cars[${i}])"/>
            </div>
            <div class="name">
              <h5>${cars[i].name}</h5>
            </div>
            <div class="info">Karachi,Sindh <br />1 day ago</div>
          </div>
          `;
  }
}
addCars();

// selecting divs and making main cart array 
let totalDiv = document.querySelector(".total")
let cartItems = document.querySelector(".cart-items");
let cart = []

// this is the main function and will run on click.
function addToCart(el) {
  let value = cart.includes(el)
  if (value) {
    el.qty += 1;
    updateCart(cart)
    total(cart)
  }
  else {
    el.qty = 1;
    cart.push(el)
    updateCart(cart)
    total(cart)
  }
}

// this function is updating cart items page by adding 
function updateCart(cart) {
  cartItems.innerHTML = ''
  for (let i = 0; i < cart.length; i++) {
    cartItems.innerHTML += `
    <div class="cart-item">
              <img src="${cart[i].imageUrl}">
              <div class="item-details">
                  <h2>${cart[i].name}</h2>
                  <p>Price:${cart[i].price}</p>
                  <p>Quantity:${cart[i].qty}</p>
              </div>
          </div>
  `;
  }
}

// this function is counting total amount of "cart array" by multiplying QTY by Price. 
function total(cart) {
  let totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i].qty * cart[i].price;
    totalDiv.innerHTML = `Your Total is ${totalValue}`
  }
}