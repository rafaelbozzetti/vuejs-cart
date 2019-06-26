

var app = new Vue({
  el: '#app',
  data: {
    brand: 'Couch',
    product: 'Camiseta',
    selectedVariant: 0,
    details: ["80% algod", "20% poliester"],
    variants: [
      {
        "variantId": 2231,
        "variantColor": 'white',
        "variantImage": './assets/camiseta.png',
        "variantQuantity": 1
      },    
      {
        "variantId": 2234,
        "variantColor": 'green',
        "variantImage": './assets/camiseta-verde.png',
        "variantQuantity": 12
      },
      {
        "variantId": 2235,
        "variantColor": 'blue',
        "variantImage": './assets/camiseta-azul.png',
        "variantQuantity": 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' // ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
});