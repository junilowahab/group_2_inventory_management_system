let submitInventoryButton = document.getElementById('submit');

submitInventoryButton.addEventListener('click', addInventoryDetailsToDatabase);

let inventoryDatabase = {};

function addInventoryDetailsToDatabase(e){
    let inventoryProduct = document.getElementById('inventory-product').value;
    let inventoryPrice = parseFloat(document.getElementById('inventory-price').value);
    let inventoryStock = parseInt(document.getElementById('inventory-stock').value);

    e.preventDefault();
    let productDatabase = function(product, price, stock){
        this.product = product;
        this.price = price;
        this.stock = stock;
    }

    inventoryDatabase[inventoryProduct] = new productDatabase(inventoryProduct, inventoryPrice, inventoryStock);
    console.log(inventoryDatabase);
}