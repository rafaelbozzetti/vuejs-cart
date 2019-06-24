

var app = new Vue({
  el: '#app',
  data: {
    product: 'Camiseta',
    image: './assets/camiseta.png',
    inStock: true,
    details: ["80% algod", "20% poliester"],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    }
  }
});