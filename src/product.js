class Product{
    constructor(id, name, price, quantity_in_stock, img_url, category, description){
      this.name = name,
      this.price = price,
      this.quantity_in_stock = quantity_in_stock,
      this.img_url = img_url,
      this.category = category,
      this.description = description
      this.id = id

      renderProduct(product) {
        let h2 = document.createElement('h2')
        h2.innerText = toy.name
        let img = document.createElement('img')
        img.setAttribute('src', toy.image)
        img.setAttribute('class', 'toy-avatar')
        let p = document.createElement('p')
        p.innerText = `${toy.likes} likes`
        let btn = document.createElement('button')
        btn.setAttribute('class', 'like-btn')
        btn.setAttribute('id', toy.id)
        btn.innerText = "like"
        btn.addEventListener('click', (e) => {
          console.log(e.target.dataset);
          likes(e)
        })
        let divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        divCard.append(h2, img, p, btn)
        divCollect.append(divCard)
      }
    }
  }

// products read
function fetchProducts(){
    fetch(`${BASE_URL}/products`)
      .then(resp => resp.json())
      .then(products => {
        console.log(products)
          for (const product of products){
            let p = new Product(product.id, product.name, product.price, product.quantity_in_stock, product.img_url, product.category, product.description)
              renderProduct(p)
                      // this is where I'll render products on the page
          }
      })
  }

  