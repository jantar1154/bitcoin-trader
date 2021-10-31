var money = 10000;

var bitcoinPrice = 950000;
var bitcoinPriceLast = 950000;
var bitcoinChange = 0;

var dogePrice = 4.5;
var dogePriceLast = 4.5;
var dogeChange = 0;

var ethPrice = 75000;
var ethPriceLast = 75000;
var ethChange = 0;

var bitcoinOwned = 0;
var dogeOwned = 0;
var ethOwned = 0;

setInterval(loop, 2000)

function loop(){
	
	bitcoinChange = bitcoinPriceLast - bitcoinPrice
	dogeChange = dogePriceLast - dogePrice
	ethChange = ethPriceLast - ethPrice
	
	bitcoinPriceLast = bitcoinPrice
	dogePriceLast = dogePrice
	ethPriceLast = ethPrice
	
	bitcoinPrice += change(4000) + 1000
	dogePrice += change(20) + 1
	ethPrice += change(1500) + 500
	
	dogePrice = Math.max(1.5, dogePrice);
	
	document.getElementById("btcPrice").innerHTML = Math.round(bitcoinPrice) + ",- Kč"
	document.getElementById("dogePrice").innerHTML = Math.round(dogePrice * 10) / 10 + ",- Kč"
	document.getElementById("ethPrice").innerHTML = Math.round(ethPrice * 10) / 10 + ",- Kč"

	document.getElementById("btcChange").innerHTML = (bitcoinChange > 0 ? "+" : "") + Math.round(bitcoinChange * 10) / 10 + " Kč"
	document.getElementById("dogeChange").innerHTML = (dogeChange > 0 ? "+" : "") + Math.round(dogeChange * 10) / 10 + " Kč"
	document.getElementById("ethChange").innerHTML = (ethChange > 0 ? "+" : "") + Math.round(ethChange * 10) / 10 + " Kč"

}


function buyBTC(){
	let select = document.getElementById("buyBTCselect").value
	if(money >= select){
		subMoney(select)
		bitcoinOwned += (select / bitcoinPrice)
		document.getElementById("btcOwned").innerHTML = Math.round(bitcoinOwned * 10000) / 10000 + " BTC"
	}
}


function buyDOGE(){
	let select = document.getElementById("buyDOGEselect").value
	if(money >= select){
		subMoney(select)
		dogeOwned += (select / dogePrice)
		document.getElementById("dogeOwned").innerHTML = Math.round(dogeOwned * 10000) / 10000 + " Đ"
	}
}


function buyETH(){
	let select = document.getElementById("buyETHselect").value
	if(money >= select){
		subMoney(select)
		ethOwned += (select / ethPrice)
		document.getElementById("ethOwned").innerHTML = Math.round(ethOwned * 10000) / 10000 + " ETH"
	}
}


function sellBTC(){
    addMoney(bitcoinOwned * bitcoinPrice)
    bitcoinOwned = 0
    document.getElementById("btcOwned").innerHTML = "0 BTC"
}


function sellDOGE(){
    addMoney(dogeOwned * dogePrice)
    dogeOwned = 0
    document.getElementById("dogeOwned").innerHTML = "0 Đ"
}


function sellETH(){
    addMoney(ethOwned * ethPrice)
    ethOwned = 0
    document.getElementById("ethOwned").innerHTML = "0 ETH"
}


function addMoney(add){
	money += (add * 1)
	document.getElementById("money").innerHTML = Math.round(money) + " Kč"
}


function subMoney(sub){
	money -= sub
	document.getElementById("money").innerHTML = Math.round(money) + " Kč"
}


function change(mul){
	let r = Math.round(Math.random() * mul)
	r *= 1 - Math.random() * 2
	return Math.round(r * 10) / 10
}
