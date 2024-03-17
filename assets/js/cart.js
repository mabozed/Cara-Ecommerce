let productsDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')
let tableDom = document.querySelector('.p-table')

function drawCartProducts(allProducts) {
  if (allProducts.length === 0) {
    tableDom.style.display = 'none'
    noProductsDom.innerHTML = `<p>There is no products in cart !!</p>`
    badgeDom.style.display = 'none'
  }
  if (allProducts.length != 0) {
    let productUI = allProducts
      .map((item) => {
        return `<tr>
                    
                    <td><a onclick="removeItemFromCart(${
                      item.id
                    })" ><i class="fas fa-trash-alt"></i></a>
                        <a onclick="addquantity(${
                          item.id
                        })" ><i class="fa fa-arrow-circle-up"></i></a>
                        <a onclick="losequantity(${
                          item.id
                        })" ><i class="fa fa-arrow-circle-down"></i></a></td>
                    <td><img src=${item.image} alt=""></td>
                    <td><h5>${item.desc}</h5></td>
                    <td>${item.price}</td>
                    <td class='quant'>${item.quant}</td>
                    <td class='p-total'>${item.quant * item.price}</td>
                </tr>`
      })
      .join('')
    productsDom.innerHTML = productUI
  }
}
drawCartProducts(JSON.parse(localStorage.getItem('productsInCart')))

function addquantity(id) {
  let allElements = JSON.parse(localStorage.getItem('productsInCart'))
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].id === id) {
      allElements[i].quant += 1
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(allElements))
  drawCartProducts(allElements)
  changeBadge()
}
function losequantity(id) {
  let allElements = JSON.parse(localStorage.getItem('productsInCart'))
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].id === id && allElements[i].quant > 1) {
      allElements[i].quant -= 1
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(allElements))
  drawCartProducts(allElements)
  changeBadge()
}

function removeItemFromCart(id) {
  let allElements = JSON.parse(localStorage.getItem('productsInCart'))
  let updatedArr = allElements.filter((item) => item.id !== id)
  localStorage.setItem('productsInCart', JSON.stringify(updatedArr))
  drawCartProducts(updatedArr)
}
