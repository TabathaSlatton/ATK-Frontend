class LineItem{
    constructor(id, user_id, completed = false, quantity, product_id){
      this.id = id,
      this.user_id = user_id,
      this.completed = completed,
      this.quantity = quantity,
      this.product_id = product_id
    }

      renderLineItem(product) {
        const container = document.getElementById("cart-cards")
        const product_id = this.id
        
        let card = document.createElement("div")
            card.className = "card mb-3"
            card.setAttribute("style", "width: 100%")
        container.appendChild(card)


        let row = document.createElement("div")
            row.className = "row no-gutters"
        card.appendChild(row)

        let col = document.createElement("div")
            col.className = "col-md-4"
        card.appendChild(col)

            let img = document.createElement("img")
                img.src = `${product.img_url}`
                img.className = "card-img"
                img.setAttribute("style", "height: 100%")
                col.appendChild(img)

        let col2 = document.createElement("div")
            col2.className = "col-md-8"
        card.appendChild(col2)

        let cardBody = document.createElement("div")
            cardBody.className = "card-body"
            col2.appendChild(cardBody)

        let name = document.createElement("h5")
            name.innerText = `${product.name}`
            name.className = "card-title"
            cardBody.appendChild(name)
           
        let quantity = document.createElement('p');
                quantity.innerText = `Quantity: ${this.quantity}`
                quantity.className = "card-text"
            cardBody.appendChild(quantity)

        let price = document.createElement('h6');
            let product_price = product.price * this.quantity
                price.innerText = `Item Total Price: $${product_price}`
                price.className = "card-text"
            cardBody.appendChild(price)

        const del = document.createElement("button")
            del.innerText = "Remove"
            del.dataset.action = "Delete"
            del.setAttribute('class', 'btn btn-danger btn-sm')

            card.appendChild(del)
                card.addEventListener("click", (e) => {
                    if (e.target.dataset.action === "Delete") {
                        const configObj = {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify(card)
                        }
                        fetch(`${BASE_URL}/line_items/${product_id}`, configObj)
                            .then(resp => resp.json())
                            e.target.parentElement.remove()
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
            const cartHeading = document.getElementById("cart-section")
                cartHeading.innerHTML = 
                `<section id="cart-heading" class="p-5">
                <div class="dark-overlay">
                    <div class="row">
                        <div class="col">
                        <div class="container pt-5">
                            <h1><div id="user-info-container"></div></h1>
                            <h1 class="d-none d-md-block" style="font-family: Brush Script MT, cursive; font-size: 300%">Cart</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                `
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