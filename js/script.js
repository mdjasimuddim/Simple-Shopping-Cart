function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;

    if(isIncrease == true){
        newProductCount = productCount + 1;
    } if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount;
    let productTotal=0;
    if(product == "laptop"){
        productTotal = newProductCount * 245000;
    }else{
        productTotal = newProductCount * 125000;
    }
    document.getElementById(product+'-total').innerText = productTotal;
    handleCheckout();
}
// console.log('hello')
function handleCheckout()
{
    const laptopCount = parseInt(document.getElementById('laptop').value);
    const phoneCount = parseInt(document.getElementById('phone').value);

    const totalPrice = laptopCount * 245000 + phoneCount * 125000;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = tax;


    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}
function checkOut(){
    alert('Thank you for purchasing us');
    location.reload();
}