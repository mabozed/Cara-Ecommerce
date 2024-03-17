const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
const badgeDom = document.querySelector('.shop-badge')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}

function DrawUI(arr, classDom) {
  let productUI = arr
    .map((item) => {
      return `<div class="pro-item col-12 col-md-6 col-lg-3">
        <img src="${item.image}" alt="${item.desc}" />
        <div class="des">
          <span>${item.brand}</span>
          <h5>${item.desc}</h5>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <h4>$${item.price}</h4>
        </div>
        <a href="#">
          <i class="fa-solid fa-shopping-cart cart" onclick="getItem(${item.id})"></i>
        </a>
      </div>`
    })
    .join(' ')

  classDom.innerHTML = productUI
  changeBadge()
}

function getItem(id) {
  localStorage.setItem('productId', id)
  window.location.href = 'sproduct.html'
}

if (JSON.parse(localStorage.getItem('productsInCart')).length >= 1) {
  badgeDom.style.display = 'inline'
} else {
  badgeDom.style.display = 'none'
}
