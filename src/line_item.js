class LineItem{
    constructor(id, user_id, completed = false, quantity, product_id){
      this.id = id,
      this.user_id = user_id,
      this.completed = completed,
      this.quantity = quantity,
      this.product_id = product_id
    }

      renderLineItem(product) {
        const container = document.getElementById("cart-container")

        let tr = document.createElement('tr');
            container.appendChild(tr)

        let item = document.createElement('td');
            let img = document.createElement("img")
                img.src = `${product.img_url}`
                img.className = "img-thumbnail"
                item.appendChild(img)
            let name = document.createElement("p")
                name.innerText = `${product.name}`
                item.appendChild(name)
            tr.appendChild(item)

        let quantity = document.createElement('td');
                quantity.innerText = this.quantity
            tr.appendChild(quantity)

            let price = document.createElement('td');
            let product_price = product.price * this.quantity
                price.innerText = product_price
            tr.appendChild(price)

            const del = document.createElement("button")
            del.innerText = "Remove from Cart"
            del.dataset.action = "delete"
            tr.appendChild(del)
        
          tr.addEventListener("click", function(e) {
              if (e.target.dataset.action === "delete") {
                // needs to actually do something 
                e.target.parentElement.remove();
              }
        })
        
      }
    }
// products read
function fetchLineItems(){
    fetch(`${BASE_URL}/line_items`)
      .then(resp => resp.json())
      .then(line_items => {
          for (const item of line_items){
            let c = new LineItem(item.id, item.user_id, item.completed, item.quantity, item.product_id)
              c.renderLineItem(item.product)
          }
      })
  }


  function createLineItem(product){
    let quantity = 1;
    let user_id = 1;
  
    let line_item = {
      quantity: quantity,
      user_id: user_id,
      product_id: product.id,
    }
      const configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(line_item)
    }
    fetch(`${BASE_URL}/line_items`, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
             debugger
            let c = new LineItem(json.id, json.user_id, json.completed, json.quantity, json.product_id)
             c.renderLineItem(product)

        })
  }