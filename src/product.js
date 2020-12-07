class Product{
    constructor(id, name, price, quantity_in_stock, img_url, category, description){
      this.name = name,
      this.price = price,
      this.quantity_in_stock = quantity_in_stock,
      this.img_url = img_url,
      this.category = category,
      this.description = description
      this.id = id
    }
      renderProduct() {
        const container = document.getElementById("products-container")

        let card = document.createElement('div')
        card.setAttribute("id", `product-id-${this.id}`)
        card.setAttribute("style", `width: 18rem;`)
        card.className = "card"
          container.appendChild(card)

        let img = document.createElement('img')
        img.src = this.img_url
        img.className = "productImg card-img-top"
        card.appendChild(img)

        let cardBody = document.createElement('div')
        cardBody.setAttribute("id", `product-id-${this.id}`)
        cardBody.className = "card-body"
          card.appendChild(cardBody)

        let h2 = document.createElement('h2')
        h2.innerText = this.name
        h2.className = "productH2 card-title"
        cardBody.appendChild(h2)

        let collapseDiv = document.createElement("div")
        collapseDiv.className = "collapse-content"
        cardBody.appendChild(collapseDiv)

        let p = document.createElement('p')
        p.setAttribute("id", `collapseContent${this.id}`)
        p.className = "card-text collapse"
        p.innerText = this.description
        collapseDiv.appendChild(p)

        let a = document.createElement("a")
        a.className = 'btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed'
        a.setAttribute("data-toggle", 'collapse')
        a.href = `#collapseContent${this.id}`
        a.innerText = "Read more"
        a.setAttribute("aria-expanded", 'false')
        a.setAttribute("aria-controls", `collapseContent$`)
        collapseDiv.appendChild(a)

        let h4 = document.createElement('h4')
        h4.innerText = `$${this.price}`
        h4.className = "productH4 card-text"
        cardBody.appendChild(h4) 

        let btn = document.createElement('button')
            btn.setAttribute('class', 'add-to-cart-btn btn btn-success')
            btn.setAttribute('id', this.id)
            btn.innerText = "Add To Cart"
            btn.addEventListener('click', (e) => {
              e.preventDefault()
              createLineItem(this);
        })
        cardBody.appendChild(btn)
      }
  }
// products read
function fetchProducts(){
    fetch(`${BASE_URL}/products`)
      .then(resp => resp.json())
      .then(products => {
          for (const product of products){
            let p = new Product(product.id, product.name, product.price, product.quantity_in_stock, product.img_url, product.category, product.description)
              p.renderProduct()
          }
      })
  }

  