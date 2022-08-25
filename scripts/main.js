const cart = [];

function displayProduct(){
    let totalPrice = 0;
    const totalAdded = document.getElementById('total-added');
    totalAdded.innerText = cart.length;
    
    const cartContainet = document.getElementById('table-body');
    cartContainet.textContent = '';

    for(i = 0; i < cart.length ; i++){
    totalPrice += cart[i].pdPrice

     console.log(totalPrice)
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <th>${i+1}</th>
      <td>${cart[i].pdName}</td>
      <td>${cart[i].pdPrice}</td>
      `
      cartContainet.appendChild(tr);
    }

    const tr = document.createElement('tr');
      tr.innerHTML = `
      <th></th>
      <td>Total price</td>
      <td>${totalPrice}</td>
      `
      cartContainet.appendChild(tr);
}

function addToCart(element){
  const pdName = element.parentNode.parentNode.children[0].innerText;

  const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;
  const pd = {
    pdName : pdName,
    pdPrice : parseInt(pdPrice)
  }
  cart.push(pd)
  
  displayProduct()
}