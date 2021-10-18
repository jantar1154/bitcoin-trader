var money = 1000;

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
	
	bitcoinPrice += change(4000)
	dogePrice += change(20)
	ethPrice += change(1500)
	
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
		document.getElementById("btcOwned").innerHTML = Math.round(bitcoinOwned * 10000)/10000 + " BTC"
	}
}


function buyDOGE(){
	let select = document.getElementById("buyDOGEselect").value
	if(money >= select){
		subMoney(select)
		dogeOwned += (select / dogePrice)
		document.getElementById("dogeOwned").innerHTML = Math.round(dogeOwned * 10000)/10000 + " Đ"
	}
}


function buyETH(){
	let select = document.getElementById("buyETHselect").value
	if(money >= select){
		subMoney(select)
		ethOwned += (select / ethPrice)
		document.getElementById("ethOwned").innerHTML = Math.round(ethOwned * 10000)/10000 + " ETH"
	}
}


function sellBTC(){
	let select = document.getElementById("sellBTCselect").value
	if (bitcoinPrice * dogeOwned >= select){
		addMoney(select)
		bitcoinOwned -= (select / bitcoinPrice)
		document.getElementById("btcOwned").innerHTML = Math.round(bitcoinOwned * 10000)/10000 + " BTC"
	}else{
		console.log("nemožno prodat")
	}
}


function sellDOGE(){
	let select = document.getElementById("sellDOGEselect").value
	if (dogePrice * dogeOwned >= select){
		addMoney(select)
		dogeOwned -= (select / dogePrice)
		document.getElementById("dogeOwned").innerHTML = Math.round(dogeOwned * 10000)/10000 + " Đ"
	}else{
		console.log("nemožno prodat")
	}
}


function sellETH(){
	let select = document.getElementById("sellETHselect").value
	if (ethPrice * ethOwned >= select){
		addMoney(select)
		ethOwned -= (select / ethPrice)
		document.getElementById("ethOwned").innerHTML = Math.round(ethOwned * 10000)/10000 + " ETH"
	}else{
		console.log("nemožno prodat")
	}
}


function addMoney(add){
	money += (add * 1)
	document.getElementById("money").innerHTML = money + "Kč"
}


function subMoney(sub){
	money -= sub
	document.getElementById("money").innerHTML = money + "Kč"
}


function change(mul){
	let r = Math.round(Math.random() * mul)
	r *= 1 - Math.random() * 2
	return Math.round(r * 10) / 10
}