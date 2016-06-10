require(['crypt', './js/jquery-1.11.3.min.js'], function (sha1) {
    <!--Variables Bancomer -->

    var Ds_Merchant_Amount = 50000;
	var Ds_Merchant_Currency = 484;
	var Ds_Merchant_Order = genOrder();
	var Ds_Merchant_MerchantURL ="https://www.alcancevictoriamexico.org/Formularios/pagFormulario.html";
	var Ds_Merchant_TransactionType = 0;
	var Ds_Merchant_ProductDescription = document.getElementById("Concepto").innerHTML;
	var Ds_Merchant_MerchantCode = 4083194;
	var Ds_Merchant_Terminal = 1;
	var Ds_Merchant_UrlOK = "https://www.alcancevictoriamexico.org/aprobado.html";
	var Ds_Merchant_UrlKO = "https://www.alcancevictoriamexico.org/denegado.html";
	var Ds_Merchant_MerchantSignature = sha1(Ds_Merchant_Amount+Ds_Merchant_Order+Ds_Merchant_MerchantCode+Ds_Merchant_Currency+Ds_Merchant_TransactionType+"4lc0n3vct3wq1fh9zm6k");
	
	console.log(Ds_Merchant_Order);
	console.log(Ds_Merchant_Amount);
	console.log(Ds_Merchant_ProductDescription);
	console.log(Ds_Merchant_MerchantCode);
	console.log(Ds_Merchant_MerchantSignature);

	document.getElementById('Merchant_Amount').value = Ds_Merchant_Amount;
	document.getElementById('Merchant_Currency').value = Ds_Merchant_Currency;
	document.getElementById('Merchant_Order').value = Ds_Merchant_Order;
	document.getElementById('Merchant_MerchantURL').value = Ds_Merchant_MerchantURL;
	document.getElementById('Merchant_TransactionType').value = Ds_Merchant_TransactionType;
	document.getElementById('Merchant_ProductDescription').value = Ds_Merchant_ProductDescription;
	document.getElementById('Merchant_MerchantCode').value = Ds_Merchant_MerchantCode;
	document.getElementById('Merchant_Terminal').value = Ds_Merchant_Terminal;
	document.getElementById('Merchant_UrlOK').value = Ds_Merchant_UrlOK;
	document.getElementById('Merchant_UrlKO').value = Ds_Merchant_UrlKO;
	document.getElementById('Merchant_Signature').value = Ds_Merchant_MerchantSignature;


    function genOrder(){
	    var noOrden ="";
	    var opciones = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    var alfaNum = "";
	    var primeros4 = Math.floor((Math.random() * 9999)+1);
	    for(var i = 0; i < 8; i++){
	      alfaNum += opciones.charAt(Math.floor(Math.random() * opciones.length));
	    }
      	noOrden = primeros4+alfaNum;
      return noOrden;
    };    
});