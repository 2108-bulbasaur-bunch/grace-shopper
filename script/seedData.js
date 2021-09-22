const itemData = [
  {
    quantity: 1,
    purchasePrice: 2525
  },
  {
    quantity: 2,
    purchasePrice: 1025,
  },
  {
    quantity: 8,
    purchasePrice: 650,
  },
  {
    quantity: 1,
    purchasePrice: 1500,
  },
  {
    quantity: 3,
    purchasePrice: 850,
  },
  {
    quantity: 1,
    purchasePrice: 2525,
  },
  {
    quantity: 2,
    purchasePrice: 500,
  },
  {
    quantity: 4,
    purchasePrice: 375,
  },
  {
    quantity: 1,
    purchasePrice: 820,
  },
  {
    quantity: 3,
    purchasePrice: 515,
  },
  {
    quantity: 3,
    purchasePrice: 650,
  },
  {
    quantity: 8,
    purchasePrice: 275,
  },
  {
    quantity: 12,
    purchasePrice: 325,
  },
  {
    quantity: 4,
    purchasePrice: 650,
  },
  {
    quantity: 1,
    purchasePrice: 650,
  },


]

const orderData = [
  {
    completed: true,
    purchaseDate: 2021-09-21,
  },
  {
    completed: true,
    purchaseDate: 2021-09-20,
  },
  {
    completed: true,
    purchaseDate: 2021-09-19,
  },
  {
    completed: false,
    purchaseDate: 2021-09-18,
  },
  {
    completed: true,
    purchaseDate: 2021-09-17,
  },
  {
    completed: false,
    purchaseDate: 2021-09-16,
  },
  {
    completed: false,
    purchaseDate: 2021-09-17,
  },
]

const userData = [
  {
    firstName: "Ava",
    lastName: "Choi",
    password: "gggghhhh",
    email: "ava@email.com",
    shippingAddress: "12 w 34th st apt 506 New York NY 10001",
    isAdmin: true
  },
  {
    firstName: "Sarah",
    lastName:"Sheppard",
    password: "aaaaasssss",
    email: "cutiepie@gmail.com",
    shippingAddress: "44 e 67th st apt 1004 New York NY 10007",
    isAdmin: true
  },
  {
    firstName: "Grace",
    lastName: "Peng",
    password: "adsasdkj",
    email: "buttercup@gmail.com",
    shippingAddress: "167 w 74th st New York NY 10004",
    isAdmin: true
  },
  {
    firstName: "Mike",
    lastName: "Johnson",
    password: "adsfasdjjas",
    email:"honeybun@gmail.com",
    shippingAddress: "39-02 Union St, Queens, NY 11354",
    isAdmin: false
  },
  {
    firstName: "Carl",
    lastName: "Jones",
    password: "asdfajslkdnaw",
    email: "sugarpie@gmail.com",
    shippingAddress: "167 W 74th St, New York, NY 10023",
    isAdmin: false
  },
  {
    firstName: "Patricia",
    lastName: "Marks",
    password: "ewaperituq",
    email: "sweatpea@gmail.com",
    shippingAddress: "2167 Frederick Douglass Blvd, New York, NY 10026",
    isAdmin: false
  },
  {
    firstName: "Peter",
    lastName: "Hans",
    password: "xmcnvzxc",
    email: "peterk@gmail.com",
    shippingAddress: "308 E 78th St, New York, NY 10075",
    isAdmin: false
  }
]

const productData = [
  {
    name: "Strawberry Shortcake",
    price: 1025,
    quantity: 20,
    imageUrl: "https://live.staticflickr.com/7215/6904795572_7d46f1e1e2_b.jpg",
    description:
      "Cupcake ipsum dolor sit amet oat cake tootsie roll marzipan. Jujubes croissant marshmallow apple pie cheesecake. Tart macaroon oat cake biscuit tootsie roll. Candy canes oat cake topping pie candy.",
  },
  {
    name: "Chocolate Fantasy",
    price: 850,
    quantity: 13,
    imageUrl: "https://live.staticflickr.com/4150/5064794605_866d037308_b.jpg",
    description:
      "Marzipan bonbon biscuit powder chupa chups chocolate pastry cotton candy topping. Toffee jujubes pastry liquorice candy canes muffin. Jelly-o brownie icing macaroon jelly-o gummies croissant chocolate bar fruitcake.",
  },
  {
    name: "Apple Cider Donuts",
    price: 400,
    quantity: 50,
    imageUrl: "https://live.staticflickr.com/4151/5224664021_32fa2785bd.jpg",
    description:
      "Marshmallow jelly beans shortbread toffee lollipop macaroon. Donut cheesecake cotton candy caramels cake gingerbread donut jelly-o muffin. Dragée oat cake marshmallow chocolate cake candy wafer soufflé.",
  },
  {
    name: "Baklava",
    price: 375,
    quantity: 23,
    imageUrl:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/16/41/baklava.jpg",
    description:
      "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
  },
  {
    name: "Banoffee Pie",
    price: 650,
    quantity: 1,
    imageUrl:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/15/23/980x694/gallery-1433538911-banoffee-pie.jpg",
    description:
      "Gummi bears chocolate cake candy canes apple pie ice cream. Ice cream pastry sesame snaps jelly-o bear claw jelly jelly beans cake. Biscuit cotton candy gummies croissant donut.",
  },
  {
    name: "Gulab Jamun",
    price: 550,
    quantity: 54,
    imageUrl:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/16/41/india-gulab-jamun.jpg",
    description:
      "Cupcake ipsum dolor sit amet oat cake tootsie roll marzipan. Jujubes croissant marshmallow apple pie cheesecake. Tart macaroon oat cake biscuit tootsie roll. Candy canes oat cake topping pie candy.",
  },
  {
    name: "Bread Pudding",
    price: 425,
    quantity: 18,
    imageUrl: "https://live.staticflickr.com/3051/2812129223_f380e9f78f_b.jpg",
    description:
      "Marzipan bonbon biscuit powder chupa chups chocolate pastry cotton candy topping. Toffee jujubes pastry liquorice candy canes muffin. Jelly-o brownie icing macaroon jelly-o gummies croissant chocolate bar fruitcake.",
  },
  {
    name: "Rice Pudding",
    price: 435,
    quantity: 25,
    imageUrl: "https://live.staticflickr.com/1919/43801037610_56b1de2c09_b.jpg",
    description:
      "Marshmallow jelly beans shortbread toffee lollipop macaroon. Donut cheesecake cotton candy caramels cake gingerbread donut jelly-o muffin. Dragée oat cake marshmallow chocolate cake candy wafer soufflé.",
  },
  {
    name: "Flan",
    price: 515,
    quantity: 44,
    imageUrl: "https://live.staticflickr.com/157/412109682_d0d9061ee3_b.jpg",
    description:
      "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
  },
  {
    name: "Key Lime Pie",
    price: 820,
    quantity: 12,
    imageUrl: "https://live.staticflickr.com/6017/5941648290_898fbcbce3_b.jpg",
    description:
      "Gummi bears chocolate cake candy canes apple pie ice cream. Ice cream pastry sesame snaps jelly-o bear claw jelly jelly beans cake. Biscuit cotton candy gummies croissant donut.",
  },
  {
    name: "Mochi",
    price: 650,
    quantity: 85,
    imageUrl: "https://live.staticflickr.com/5013/5405990686_a0d3943f18.jpg",
    description:
      "Cupcake ipsum dolor sit amet oat cake tootsie roll marzipan. Jujubes croissant marshmallow apple pie cheesecake. Tart macaroon oat cake biscuit tootsie roll. Candy canes oat cake topping pie candy.",
  },
  {
    name: "Blueberry Pie",
    price: 780,
    quantity: 8,
    imageUrl: "https://live.staticflickr.com/3241/2607537730_5eb3e2cf59.jpg",
    description:
      "Marzipan bonbon biscuit powder chupa chups chocolate pastry cotton candy topping. Toffee jujubes pastry liquorice candy canes muffin. Jelly-o brownie icing macaroon jelly-o gummies croissant chocolate bar fruitcake.",
  },
  {
    name: "King Cake",
    price: 2525,
    quantity: 5,
    imageUrl: "https://live.staticflickr.com/7064/6824455002_61b4124f6b_b.jpg",
    description:
      "Marzipan bonbon biscuit powder chupa chups chocolate pastry cotton candy topping. Toffee jujubes pastry liquorice candy canes muffin. Jelly-o brownie icing macaroon jelly-o gummies croissant chocolate bar fruitcake.",
  },
  {
    name: "Pan au Chocolate",
    price: 250,
    quantity: 31,
    imageUrl: "https://live.staticflickr.com/4178/33934326290_90caf92514_b.jpg",
    description:
      "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
  },
  {
    name: "Tiramisu",
    price: 650,
    quantity: 12,
    imageUrl: "https://live.staticflickr.com/4121/4770627308_be88bb83a6_b.jpg",
    description:
      "Gummi bears chocolate cake candy canes apple pie ice cream. Ice cream pastry sesame snaps jelly-o bear claw jelly jelly beans cake. Biscuit cotton candy gummies croissant donut.",
  },
  {
    name: "Banana Pudding",
    price: 550,
    quantity: 30,
    imageUrl: "https://live.staticflickr.com/4121/4770627308_be88bb83a6_b.jpg",
    description:
      "Cupcake ipsum dolor sit amet oat cake tootsie roll marzipan. Jujubes croissant marshmallow apple pie cheesecake. Tart macaroon oat cake biscuit tootsie roll. Candy canes oat cake topping pie candy.",
  },
  {
    name: "Macarons",
    price: 275,
    quantity: 71,
    imageUrl: "https://live.staticflickr.com/5050/5267826325_3ca56611a2_b.jpg",
    description:
      "Marzipan bonbon biscuit powder chupa chups chocolate pastry cotton candy topping. Toffee jujubes pastry liquorice candy canes muffin. Jelly-o brownie icing macaroon jelly-o gummies croissant chocolate bar fruitcake.",
  },
  {
    name: "Cupcake",
    price: 325,
    quantity: 45,
    imageUrl: "https://live.staticflickr.com/1109/1035503826_d3eebb6c7c_b.jpg",
    description:
      "Marshmallow jelly beans shortbread toffee lollipop macaroon. Donut cheesecake cotton candy caramels cake gingerbread donut jelly-o muffin. Dragée oat cake marshmallow chocolate cake candy wafer soufflé.",
  },
  {
    name: "Cheesecake",
    price: 1500,
    quantity: 18,
    imageUrl: "https://live.staticflickr.com/3165/2395337982_b18ee7cd19_b.jpg",
    description:
      "Cookie soufflé bonbon cookie topping icing soufflé toffee brownie. Cotton candy tiramisu gingerbread jujubes lollipop danish cookie. Croissant gummi bears jelly beans cookie marshmallow jujubes bonbon biscuit cookie. Jujubes powder halvah muffin macaroon chocolate chocolate bar gingerbread.",
  },
  {
    name: "Fruit Tart",
    price: 650,
    quantity: 20,
    imageUrl:
      "https://preppykitchen.com/wp-content/uploads/2016/04/Fruit-tart-2019-feature.jpg",
    description:
      "Marzipan bonbon biscuit powder chupa chups chocolate pastry cotton candy topping. Toffee jujubes pastry liquorice candy canes muffin. Jelly-o brownie icing macaroon jelly-o gummies croissant chocolate bar fruitcake.",
  },
  {
    name: "Creme Brulee",
    price: 1025,
    quantity: 20,
    imageUrl:
      "https://www.nuggetmarket.com/media/images/13/02/creme-brulee-square.jpg",
    description:
      "Marshmallow jelly beans shortbread toffee lollipop macaroon. Donut cheesecake cotton candy caramels cake gingerbread donut jelly-o muffin. Dragée oat cake marshmallow chocolate cake candy wafer soufflé.",
  },
];


module.exports = {productData, itemData, userData, orderData}
