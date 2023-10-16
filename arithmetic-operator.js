var subtotal = (13 + 1) * 5;

var shipping = 0.5 * (13  + 1);

var total = suntotal + shipping;

var elSub = document.getElementById('subtotal');

var elShip = document.getElementById('shipping');

var elTotal = document.getElementById('total');
elTotal.textContent = total;