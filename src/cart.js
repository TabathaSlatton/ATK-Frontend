// create fetch request


// read fetch request
// products read
function fetchCarts(){
    fetch(`${BASE_URL}/carts`)
      .then(resp => resp.json())
      .then(carts => {
        console.log(carts)
          for (const cart of carts){
            let c = new cart()
            console.log(c)
                      // this is where I'll render carts on the page
          }
      })
  }


// delete fetch request