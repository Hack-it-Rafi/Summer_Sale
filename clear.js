document.getElementById('home-button').addEventListener('click', function(){
    const itemElement = document.getElementById('addHere');
    itemElement.innerHTML = '';

    const textTotalPrice = document.getElementById('total_price');
    const textDiscount = document.getElementById('discount_price');
    const textTotal = document.getElementById('Total');

    textTotalPrice.innerText = '00.00';
    textDiscount.innerText = '00.00';
    textTotal.innerText = '00.00';
})