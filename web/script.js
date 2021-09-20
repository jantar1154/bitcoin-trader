var bitcoinPrice = 950000;

setInterval(loop, 10000);

function loop(){
	Document.getElementById("btcPrice").innerHTML = bitcoinPrice + " Kč";
}