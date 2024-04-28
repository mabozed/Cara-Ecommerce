let products = allProducts
let productId = localStorage.getItem('productId')
let singleDom = document.querySelector('.single')
let productDetails = products.find((item) => item.id == productId)

singleDom.innerHTML = `
             <div class="single-pro-img">
        <img
          src="${productDetails.image}"
          width="100%"
          id="Mainimg"
          alt=""
        />
      </div>

      <div class="single-pro-details">
        <h4>${productDetails.desc}</h4>
        <h2>$${productDetails.price}</h2>
        <h5>${productDetails.brand}</h5>
        <h4>Product Details</h4>
        <p
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod cum officia rem. Explicabo, veritatis? Unde?</p>
        <button class="normal" onclick="addToCart(${productDetails.id})">Add To Cart</button>
      </div>`

let addedItem = localStorage.getItem('productsInCart')
  ? JSON.parse(localStorage.getItem('productsInCart'))
  : []

function addToCart(id) {
  let chosenItem = products.find((item) => item.id === id)

  addedItem = [...addedItem, chosenItem]
  let uniqProducts = uniqArr(addedItem, 'id')
  console.log(uniqProducts)
  localStorage.setItem('productsInCart', JSON.stringify(uniqProducts))
  badgeDom.style.display = 'inline'
  badgeSmDom.style.display = 'inline'
}

function uniqArr(arr, filterType) {
  let uniq = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item])

  return uniq
}
