

var app = new Vue({
  el: '#app',
  data: {
    product: 'Camiseta',
    image: './assets/camiseta.png',
    inStock: true,
    details: ["80% algod", "20% poliester"],
    variants: [
      {
        "variantId": 2231,
        "variantColor": 'white',
        "variantImage": './assets/camiseta.png'        
      },    
      {
        "variantId": 2234,
        "variantColor": 'green',
        "variantImage": './assets/camiseta-verde.png'        
      },
      {
        "variantId": 2235,
        "variantColor": 'blue',
        "variantImage": './assets/camiseta-azul.png'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    }
  }
});