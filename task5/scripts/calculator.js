document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed.")
})

function calculatePrice() {
    let product = document.getElementById('selectProduct')
    let count = document.getElementById('countProducts')
    let display = document.getElementById('display-calc')

    display.value = parseInt(product.value) * parseInt(count.value)
}