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
        var td = document.createElement('td');
        var td = document.createElement('td');
        var td = document.createElement('td');

        

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