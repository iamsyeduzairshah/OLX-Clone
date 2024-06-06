// const bikes = [
//     {
//       name: "Giant Propel Advanced Pro",
//       price: 6200.00,
//       imageUrl: "el-advanced-pro.jpg"
//     },
//     {
//       name: "Cannondale SuperSix EVO",
//       price: 9000.00,
//       imageUrl: ""
//     },
//     {
//       name: "Bianchi Oltre XR4",
//       price: 11000.00,
//       imageUrl: ""
//     },
//     {
//       name: "Scott Addict RC Ultimate",
//       price: 13000.00,
//       imageUrl: ""
//     },
//     {
//       name: "Cervelo S5",
//       price: 11500.00,
//       imageUrl: ""
//     },
//     {
//       name: "",
//       price: 12500.00,
//       imageUrl: ""
//     },
//     {
//       name: "Colnago V3Rs",
//       price: 12000.00,
//       imageUrl: ""
//     },
//     {
//       name: "Wilier Triestina Zero SLR",
//       price: 10500.00,
//       imageUrl: ""
//     }
//   ];
//   const cars = [
//     {
//       name: "Tesla Model S",
//       price: 79999.99,
//       imageUrl: ""
//     },
//     {
//       name: "BMW 3 Series",
//       price: 41250.00,
//       imageUrl: ""
//     },
//     {
//       name: "Audi A4",
//       price: 39900.00,
//       imageUrl: ""
//     },
//     {
//       name: "Mercedes-Benz C-Class",
//       price: 41500.00,
//       imageUrl: ""
//     },
//     {
//       name: "Lexus IS",
//       price: 38500.00,
//       imageUrl: ""
//     },
//     {
//       name: "Honda Accord",
//       price: 24970.00,
//       imageUrl: ""
//     },
//     {
//       name: "Toyota Camry",
//       price: 24425.00,
//       imageUrl: ""
//     },
//     {
//       name: "Chevrolet Malibu",
//       price: 22395.00,
//       imageUrl: ""
//     }
//   ];
  

  let mobiles = [
    {
      name: "OnePlus 9 Pro",
      price: 969.99,
      imageUrl: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Sony Xperia 1 III",
      price: 1299.99,
      imageUrl: "https://images.unsplash.com/photo-1557690267-fad2f168bb95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Xiaomi Mi 11 Ultra",
      price: 1199.99,
      imageUrl: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Oppo Find X3 Pro",
      price: 1149.99,
      imageUrl: "https://images.unsplash.com/photo-1551355738-1875b6664915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Huawei P50 Pro",
      price: 1049.99,
      imageUrl: "https://images.unsplash.com/photo-1601790471088-dae753045d66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Asus ROG Phone 5",
      price: 999.99,
      imageUrl: "https://images.unsplash.com/photo-1591636293132-1761271fcce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Realme GT 5G",
      price: 649.99,
      imageUrl: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Apple iPhone 12",
      price: 999.99,
      imageUrl: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D"
    },

  ];
  


function addMobiles() {
    for (let i = 0; i < mobiles.length; i++) {
        let mobile = document.querySelector(".mobiles")
        mobile.innerHTML +=`
        <div class="product-item">
          <img src="${mobiles[i].imageUrl}" alt="for sale" class="hover" />
          <div class="first-line">
            <h4>${mobiles[i].price}</h4>
            <img class="hover" src="Images/heart.svg" alt="" />
          </div>
          <div class="name">
            <h5>${mobiles[i].name}</h5>
          </div>
          <div class="info">Karachi,Sindh <br />1 day ago</div>
        </div>
        `
    }
}
addMobiles()