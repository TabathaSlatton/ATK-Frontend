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

      let h2 = document.createElement('h2')
      let product_h2 = document.querySelector(`#product-id-${this.product_id} .productH2`)
        h2 = product_h2.cloneNode(true)
        cart_product_card.appendChild(h2) 
      
      let h4 = document.createElement('h4')
      let product_h4 = document.querySelector(`#product-id-${this.product_id} .productH4`)
        h4 = product_h4.cloneNode(true)
        cart_product_card.appendChild(h4) 
      
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

function createCartProduct(product_id){
  let quantity = 1;
  let cart = document.getElementById('cart-card');
  debugger
  let cart_id = 1; 

  let cart_product = {
    quantity: quantity,
    cart_id: cart_id,
    product_id: product_id
  }

  debugger
  e.preventDefault()
  const configObj = {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(cart_product)
  }
  fetch(`${BASE_URL}/cart_products`, configObj)
      .then(resp => resp.json())
      .then(json => {
        renderCartProduct(json)
      })
}