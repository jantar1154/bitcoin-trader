var bitcoinPrice = 950000;
var bitcoinPriceLast = 0;
var bitcoinChange = 0;

setInterval(loop, 10000);

function loop(){
	document.getElementById("btcPrice").innerHTML = bitcoinPrice + ",- Kč";
	document.getElementById("btcChange").innerHTML = bitcoinChange + ",- Kč";
	
	bitcoinChange = Math.round(bitcoinPriceLast - bitcoinPrice, 1);
	bitcoinPriceLast = bitcoinPrice;
	bitcoinPrice += change(1000);
}

function change(mul){
	let r = Math.round(Math.random() * mul);
	r *= 1 - Math.random() * 2;
	return Math.round(r);
}