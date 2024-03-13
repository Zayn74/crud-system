var productNameInput = document.getElementById('productName'); //carries the whole input
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var addButton = document.getElementById('addBtn');
var updateButton = document.getElementById('upBtn');


var productsContainer = [];

if (localStorage.getItem("products") != null) {
    productsContainer = JSON.parse(localStorage.getItem("products"))
    productDisplay(productsContainer)
}

function addProduct() {
    var product =
    {
        brand: productNameInput.value, //.value to catch the input user added
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    productDisplay(productsContainer);
    clearForm();
};
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function productDisplay(productsContainer) {
    var holder = ``;
    for (i = 0; i < productsContainer.length; i++) {
        holder += ` <tr>
                    <td>${productsContainer[i].brand}</td>
                    <td>${productsContainer[i].price}</td>
                    <td>${productsContainer[i].category}</td>
                    <td>${productsContainer[i].desc}</td>
                    <td><button onclick="setFormForUpdate(${i})" class="btn btn-warning btn-sm">Update</button></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>

                </tr>`
    }
    document.getElementById('tableBody').innerHTML = holder;
}


function deleteProduct(productIndex) {
    productsContainer.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    productDisplay(productsContainer);
}


function serachProduct(term) {
    var matchedProduct = [];
    for (i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].brand.toLowerCase().includes(term.toLowerCase()) === true) {
            matchedProduct.push(productsContainer[i]);
        }
    }
    productDisplay(matchedProduct);
}

function setFormForUpdate(i) {
    addButton.classList.replace('d-block', 'd-none');
    updateButton.classList.replace('d-none', 'd-block');
    productNameInput.value = productsContainer[i].brand;
    productPriceInput.value = productsContainer[i].price;
    productCategoryInput.value = productsContainer[i].category;
    productDescInput.value = productsContainer[i].desc;
}
function updatedProduct(upd) {


}