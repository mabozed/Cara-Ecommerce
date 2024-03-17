let productsForTotal = JSON.parse(localStorage.getItem('productsInCart'))
const totalPay = document.querySelector('.total-pay')
const cartInfo = document.querySelector('.cart-info')
const empCart = document.querySelector('.emp-cart')
let ftotal = 0

if (productsForTotal.length === 0) {
  ftotal = 0
} else {
  for (let i = 0; i < productsForTotal.length; i++) {
    ftotal += productsForTotal[i].quant * productsForTotal[i].price
  }
}

function drawCartProducts() {
  if (JSON.parse(localStorage.getItem('productsInCart')).length === 0) {
    empCart.innerHTML = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <span class="my-0 ml-3 p-title">no products in your cart</span>
                            </div>
                        </li>`
  }
  let products = JSON.parse(localStorage.getItem('productsInCart'))
  totalPay.innerHTML = '$' + ftotal

  let productUI = products
    .map((item) => {
      return `<li class="list-group-item lh-condensed mb-2">
                        <div class='d-flex justify-content-between align-items-center'>
                            <img src=${item.image} alt="" width ='50px' >
                            <p class="my-0 ml-3 p-title">${item.desc}</p>
                            <p class="my-0 badge badge-secondary p-2 d-flex justify-content-center align-items-center">${item.quant}</p></div>

                    </li>`
    })
    .join('')
  cartInfo.innerHTML = productUI
}
drawCartProducts()
