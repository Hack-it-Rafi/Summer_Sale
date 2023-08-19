function cardFunction(data){
    // console.log(data.childNodes[3].childNodes[3].innerText);
    const itemName = data.childNodes[3].childNodes[3].innerText;
    // console.log(itemName);
    const addElement = document.getElementById('addHere');
    const count = addElement.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count+1} ${itemName}`
    if(count+1<10){
        addElement.appendChild(p);
    }
    const textPrice = data.childNodes[3].childNodes[5].childNodes[1].childNodes[0].innerText;
    const price = parseFloat(textPrice);

    const totalPriceElement = document.getElementById('total_price');
    const textTotalPrice = totalPriceElement.innerText;
    totalPrice = parseFloat(textTotalPrice);
    if(count+1<10){
        totalPrice += price;
    }

    totalPrice = totalPrice.toFixed(2);
    totalPriceElement.innerText = totalPrice;

    const textTotal = document.getElementById('Total');
    textTotal.innerText = totalPrice;

    if(totalPrice>=200){
        document.getElementById('secret-input').removeAttribute('disabled');
    }
    if(totalPrice>0){
        document.getElementById('purchaseButton').removeAttribute('disabled');
    }
}
