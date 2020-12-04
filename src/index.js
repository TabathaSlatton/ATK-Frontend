// in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () =>{
    console.log("DOM HAS LOADED!!!");
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => loginFormHandler(e))
fetchProducts()
fetchCarts()
fetchCartProducts()
})
const BASE_URL = 'http://localhost:3000'


// {x} read fetch request for products
      // {} update fetch request as users 'check out' to modify quantity


// {} read fetch request for cart
            // add a completed boolean so when 'checking out' order is marked complete and users can view past orders
      // {} write fetch request for cart (no user input, though?)
            // this would have to be co
      // {} update to mark complete
              // should trigger update for quantity/price of each cart_product
              // should trigger the product quantity update

// {} read fetch request for cart_products
      // {} write fetch request for cart_products everytime a product is clicked 
      // {} delete fetch request for cart_products
      // {} update quantity/total 


      // 2 ways
          // calculate total cart quanty/taxes/ect every time a user looks at a page. << slows things down
          // or calculated fields in DB. assigned in create. have in the backend, served with json << better more higher user base

