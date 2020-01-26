const STORAGE_KEY = "com.jdc.cl4.products"

function getProductsFromStorage() {
    let products = []

    let productsString = localStorage.getItem(STORAGE_KEY)
    if(productsString) {
        products = JSON.parse(productsString)
    }

    return products
}

function saveProductsToStorage(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

function saveProduct() {

    // get product from view
    let product = {
        category : document.getElementById('category').value,
        name : document.getElementById('name').value,
        price : document.getElementById('price').value,
        size : document.getElementById('size').value,
        color : document.getElementById('color').value,
        description: document.getElementById('description').value 
    }

    // add to array
    let products = getProductsFromStorage()

    products.push(product)

    // save to local storage
    saveProductsToStorage(products)

    // load products page
    window.location = "/products.html"
}

function loadProducts() {

    let products = getProductsFromStorage()

    let tbody = document.getElementById("products")
    let lastChild = tbody.lastElementChild

    while(lastChild) {
        tbody.removeChild(lastChild)
        lastChild = tbody.lastElementChild
    }

    for(let i =0; i < products.length; i++) {
        let product = products[i]
        // tr
        let row = document.createElement("tr")
        tbody.append(row)
        
        for(let field in product) {
            let cell = document.createElement("td")
            cell.innerText = product[field]
            row.append(cell)
        }

        let cell = document.createElement("td")
        let link = document.createElement("a")
        link.setAttribute("onClick", `deleteProduct(${i}); return false;`)
        link.innerText = "Delete"
        cell.append(link)
        row.append(cell)
    }
}

function deleteProduct(index) {

    let products = getProductsFromStorage()

    let toRemove = products[index]

    if(toRemove) {
        products = products.filter(p => p != toRemove)
        saveProductsToStorage(products)
    }

    loadProducts()
}