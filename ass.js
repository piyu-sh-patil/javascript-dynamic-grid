console.log('script loaded');

var productList = [
    {
        id: "1",
        name1: "Men Navy Blue Solid Sweatshirt",
        preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",

        isAccessory: false,
        brand: "United Colors of Benetton",
        price: 2599
    },
    {
        "id": "2",
        "name1": "Men Black MAMGP T7 Sweat Sporty Jacket",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",

        isAccessory: false,
        "brand": "Puma",
        "price": 7999
    },
    {
        "id": "3",
        "name1": "Men Black Action Parkview Lifestyle Shoes",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",

        isAccessory: false,
        "brand": "Hush Puppies",
        "price": 6999
    },
    {
        "id": "4",
        "name1": "Women Black Solid Lightweight Leather Jacket",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",

        isAccessory: false,
        "brand": "BARESKIN",
        "price": 9999
    },
    {
        "id": "5",
        "name1": "Women Blue Solid Shirt Dress",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",

        "isAccessory": false,
        "brand": "SASSAFRAS",
        "price": 5200
    },
    {
        "id": "6",
        "name1": "Unisex Silver-Toned Series 3 Smart Watch",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",

        "isAccessory": true,
        "brand": "Apple",
        "price": 31999
    },
    {
        "id": "7",
        "name1": "Unisex Black & Green Reflex 2.0 Smart Band",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",

        "isAccessory": true,
        "brand": "Fastrack",
        "price": 1999
    },
    {
        "id": "8",
        "name1": "Unisex Black Galaxy Fit Fitness Band",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",

        "isAccessory": true,
        "brand": "Samsung",
        "price": 9990
    },
    {
        "id": "9",
        "name1": "Gear IconX Black Cord-free Fitness Earbuds",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",

        "isAccessory": true,
        "brand": "Samsung",
        "price": 13990
    },
    {
        "id": "10",
        "name1": "White 2nd Gen AirPods with Charging Case",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",

        isAccessory: true,
        "brand": "Apple",
        "price": 14999
    }
];

var dynamic = document.querySelector('#list1');
for (var i = 0; i < productList.length; i++) {
    if (productList[i].isAccessory == 0) {
        // console.log('got it');
        var fetch = document.querySelector('#list1').innerHTML;

        dynamic.innerHTML = ` <div class="list-item" id=${i}">
      
     
      <img class="display-img" src="${productList[i].preview}" alt="" >
      <h4 class="title">${productList[i].name1}</h4>
      <p class="brand">${productList[i].brand}</p>
      <p class="price">Rs.${productList[i].price}</p>
  </div>` + fetch;

    }
}


var dynamic1 = document.querySelector('#list2');
for (var i = 0; i < productList.length; i++){
    if (productList[i].isAccessory == 1) {
        var ftch = document.querySelector('#list2').innerHTML;

        dynamic1.innerHTML = ` <div class="list-item" id=${i}">


<img class="display-img" src="${productList[i].preview}" alt="" >
<h4 class="title">${productList[i].name1}</h4>
<p class="brand">${productList[i].brand}</p>
<p class="price"> Rs.${productList[i].price}</p>
</div>` + ftch;
    }}
