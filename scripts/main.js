require(['crypt', 'jquery'], function (sha1, $) {
   console.log(document);
   console.log($);
    <!--Variables Bancomer -->

    $(document).ready(function() {
    	var Ds_Merchant_Amount = document.getElementById("totalPagar").innerHTML;
	    var Ds_Merchant_Currency = 484;
	    var Ds_Merchant_Order = genOrder();
	    var Ds_Merchant_MerchantURL ="https://www.alcancevictoriamexico.org/registro.html";
	    var Ds_Merchant_TransactionType = 0;
	    var Ds_Merchant_ProductDescription = document.getElementById("header_1").innerHTML;
	    var Ds_Merchant_MerchantCode = 4083194;
	    var Ds_Merchant_Merchant_Terminal = 1;
	    var Ds_Merchant_UrlOK = "https://www.alcancevictoriamexico.org/aprobado.html";
	    var Ds_Merchant_UrlKO = "https://www.alcancevictoriamexico.org/denegado.html";
	    
	    var Ds_Merchant_MerchantSignature = sha1(Ds_Merchant_Amount+Ds_Merchant_Order+Ds_Merchant_MerchantCode+Ds_Merchant_Currency+Ds_Merchant_TransactionType+"4lc0n3vct3wq1fh9zm6k");
		console.log(Ds_Merchant_Order);
		console.log(Ds_Merchant_Amount);
		console.log(Ds_Merchant_ProductDescription);
		console.log(Ds_Merchant_MerchantCode);
		console.log(Ds_Merchant_MerchantSignature);	

		 $("#sendBancomer").click(function(){
		 	console.log("ENTRE!");
            $.ajax({
                type:"POST",
				url: "https://ecom.eglobal.com.mx/VPBridgeWeb/servlets/TransactionStartBridge",
                data:{
                	Ds_Merchant_Amount : Ds_Merchant_Amount,
					Ds_Merchant_Currency : Ds_Merchant_Currency,
					Ds_Merchant_Order : Ds_Merchant_Order,
					Ds_Merchant_MerchantURL : Ds_Merchant_MerchantURL,
					Ds_Merchant_TransactionType: Ds_Merchant_TransactionType,
					Ds_Merchant_ProductDescription : Ds_Merchant_ProductDescription,
					Ds_Merchant_MerchantCode : Ds_Merchant_MerchantCode,
					Ds_Merchant_Merchant_Terminal : Ds_Merchant_Merchant_Terminal,
					Ds_Merchant_UrlOK : Ds_Merchant_UrlOK,
					Ds_Merchant_UrlKO : Ds_Merchant_UrlKO,
					Ds_Merchant_MerchantSignature : Ds_Merchant_MerchantSignature
                }
            })
		 });
	});
    


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
    }



    
});
