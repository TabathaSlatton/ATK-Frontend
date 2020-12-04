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
          container.appendChild(card)

        let img = document.createElement('img')
          img.src = this.img_url
          img.className = "productImg"
          card.appendChild(img)

          // let btn = document.createElement('button')
        // btn.setAttribute('class', 'like-btn')
        // btn.setAttribute('id', toy.id)
        // btn.innerText = "like"
        // btn.addEventListener('click', (e) => {
        //   console.log(e.target.dataset);
        //   likes(e)
        // })

        let h2 = document.createElement('h2')
          h2.innerText = this.name
          card.appendChild(h2)

        let h4 = document.createElement('h4')
          h4.innerText = `$${this.price}`
          card.appendChild(h4)
        
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

  