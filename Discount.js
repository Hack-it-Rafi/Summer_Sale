document.getElementById('secret-input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const couponButton = document.getElementById('coupon_button');
    if(text === 'SELL200'){
        couponButton.removeAttribute('disabled');
    }
    else{
        couponButton.setAttribute('disabled', true);
    }
    
})
const couponButton = document.getElementById('coupon_button');
couponButton.addEventListener('click', function(){
    // console.log('clicked');
    document.getElementById('secret-input').value = '';
    const textTotalPrice = document.getElementById('total_price');
    const textDiscount = document.getElementById('discount_price');
    const textTotal = document.getElementById('Total');
    totalPrice = parseFloat(textTotalPrice.innerText);

    let discount = totalPrice * 0.2;
    discount = discount.toFixed(2);
    let total = totalPrice - discount;
    total = total.toFixed(2);

    textDiscount.innerText = discount;
    textTotal.innerText = total;

})