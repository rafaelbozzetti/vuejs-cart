


Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: ` 
    <div class="product">
      <div class="product-image">
        <img :src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p :class="{ underline: !inStock, '' : inStock}"  > Em Estoque</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details"> {{ detail }}</li>
        </ul>

        <button class="btn btn-primary" v-on:click="addToCart" :disabled="!inStock" >
          Comprar
        </button>        

        <div v-for="(variant, index) in variants" class="box"
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor}" 
             @mouseover="updateProduct(index)">
            {{ variant.variantColor }} 
        </div> 
      </div>
    </div>
  `,
  data() {
    return {
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
      ]
    }
  },
  methods: {
    addToCart: function() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
    },
    shipping() {
      if(this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
});


var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
});