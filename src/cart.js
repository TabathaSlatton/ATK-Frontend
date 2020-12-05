class Cart{
    constructor(id, user_id, completed = false){
      this.id = id,
      this.user_id = user_id,
      this.completed = completed
    }
      renderCart() {
        const container = document.getElementById("cart-container")

        let cart_card = document.createElement('div')
        cart_product_card.setAttribute("id", "cart-card")
        cart_card.dataset.id = this.id
        container.appendChild(cart_card) 

        let h1 = document.createElement('h1')
          h1.innerText = "Cart: "
          cart_card.appendChild(h1) 

        let cart_product_card = document.createElement('div')
        cart_product_card.setAttribute("id", "cart-products-card")
        cart_card.appendChild(cart_product_card)


      }
  }

// products read
function fetchCarts(){
    fetch(`${BASE_URL}/carts`)
      .then(resp => resp.json())
      .then(carts => {
        console.log(carts)
          for (const cart of carts){
            let c = new Cart(cart.id, cart.user_id, cart.completed)
              c.renderCart()
          }
      })
  }