class CartProduct{
  constructor(id, quantity, cart_id, product_id){
    this.id = id,
    this.quantity = quantity,
    this.cart_id = cart_id,
    this.product_id = product_id

  }
    renderCartProduct() {
      const container = document.getElementById("cart-products-card")

      let cart_product_card = document.createElement('div')
        cart_product_card.setAttribute("class", "cart-product-card")
        container.appendChild(cart_product_card) 
      
      
      let img = document.createElement('img')
        let product_img = document.querySelector(`#product-id-${this.product_id} .productImg`)
          img = product_img.cloneNode(true)
          cart_product_card.appendChild(img) 

      
      // let cart_product_card = document.createElement('div')
      //   cart_product_card.setAttribute("id", "cart-product-card")
      //   cart_card.appendChild(cart_product_card)
      
    }
}

// products read
function fetchCartProducts(){
  fetch(`${BASE_URL}/cart_products`)
    .then(resp => resp.json())
    .then(cart_products => {
        for (const cart_product of cart_products){
          let c = new CartProduct(cart_product.id, cart_product.quantity, cart_product.cart_id, cart_product.product_id)
            c.renderCartProduct()
        }
    })
}

