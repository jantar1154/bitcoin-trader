var money = 1000;

var bitcoinPrice = 950000;
var bitcoinPriceLast = 950000;
var bitcoinChange = 0;

var bitcoinOwned = 0;

setInterval(loop, 5000);


function loop(){
	document.getElementById("btcPrice").innerHTML = Math.round(bitcoinPrice) + ",- Kč"
	document.getElementById("btcChange").innerHTML = (bitcoinChange > 0 ? "+" : "") + Math.round(bitcoinChange) + " Kč"
	
	bitcoinChange = bitcoinPriceLast - bitcoinPrice
	bitcoinPriceLast = bitcoinPrice
	bitcoinPrice += change(2000)
}


function buyBTC(){
	let select = document.getElementById("buyBTCselect").value
	if(money >= select){
		money -= select
		bitcoinOwned += (select/bitcoinPrice)
		document.getElementById("btcOwned").innerHTML = Math.round(bitcoinOwned*10000)/10000 + " BTC"
		document.getElementById("money").innerHTML = money + " Kč"
	}
}

function change(mul){
	let r = Math.round(Math.random() * mul)
	r *= 1 - Math.random() * 2
	return Math.round(r*10)/10
	Document.getElementById("btcPrice").innerHTML = bitcoinPrice + " Kč"
}