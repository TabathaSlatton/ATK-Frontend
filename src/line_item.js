class LineItem{
    constructor(id, user_id, completed = false, quantity, product_id){
      this.id = id,
      this.user_id = user_id,
      this.completed = completed,
      this.quantity = quantity,
      this.product_id = product_id
    }

      renderLineItem(product) {
        console.log(product)
        const container = document.getElementById("cart-container")

        let tr = document.createElement('tr');
            container.appendChild(tr)

        let item = document.createElement('td');
            let img = document.createElement("img")
                img.src = `${product.img_url}`
                item.appendChild(img)
            let name = document.createElement("p")
                name.innerText = `${product.name}`
                item.appendChild(name)
            tr.appendChild(item)


        let price = document.createElement('td');
            let product_price = product.price * this.quantity
                price.innerText = product_price
            tr.appendChild(price)

        let quantity = document.createElement('td');
                quantity.innerText = this.quantity
            tr.appendChild(quantity)
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