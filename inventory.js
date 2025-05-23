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

    if(inventoryProduct && inventoryPrice && inventoryStock){
            if (!(inventoryProduct in inventoryDatabase)) {
                inventoryDatabase[inventoryProduct] = new productDatabase(inventoryProduct, inventoryPrice, inventoryStock);
            }else{
                alert('This product already exists')
                return
            }    
    }else{
        alert('Make sure all data is filled.');
        return
    }

    let productDisplay = document.createElement('div');
    productDisplay.setAttribute('class', 'product-display')
    productDisplay.setAttribute('id', `${inventoryProduct}`)

    let display = document.querySelector('.display');
    display.appendChild(productDisplay);

    productDisplay.innerHTML = `
        <h4>${inventoryProduct}</h4>
        <p>&#8358 ${inventoryPrice}</p>
        <p>${inventoryStock} units</p>
        <button class="delete ${productDisplay.id}">Delete</button>
    `;

    document.getElementById('inventory-product').value = '';
    document.getElementById('inventory-price').value = '';
    document.getElementById('inventory-stock').value = '';

    let deleteButtons = productDisplay.querySelectorAll('.delete');
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            if(confirm('Are you sure you want to delete this inventry?')){
                deleteButton.parentElement.remove();
                delete inventoryDatabase[deleteButton.parentElement.id]
            }
        })
    })
    
}