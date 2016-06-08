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

	

    $(document).ready(function() {
		 $("#continuaBancomer").click(function(){
		 	console.log("ENTRE!");
            
            formularioDatos.target = document.getElementById('framePortal');	
            
            $.ajax({
                type:"POST",
				url: "https://ecom.eglobal.com.mx/VPBridgeWeb/servlets/TransactionStartBridge",
                async: true,
                crossDomain: true,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                cache:false,
                data:{
                	Ds_Merchant_Amount : Ds_Merchant_Amount,
					Ds_Merchant_Currency : Ds_Merchant_Currency,
					Ds_Merchant_Order : Ds_Merchant_Order,
					Ds_Merchant_MerchantURL : Ds_Merchant_MerchantURL,
					Ds_Merchant_TransactionType: Ds_Merchant_TransactionType,
					Ds_Merchant_ProductDescription : Ds_Merchant_ProductDescription,
					Ds_Merchant_MerchantCode : Ds_Merchant_MerchantCode,
					Ds_Merchant_Terminal : Ds_Merchant_Terminal,
					Ds_Merchant_UrlOK : Ds_Merchant_UrlOK,
					Ds_Merchant_UrlKO : Ds_Merchant_UrlKO,
					Ds_Merchant_MerchantSignature : Ds_Merchant_MerchantSignature
                },
		 		success: function(data){
		 			data = $.parseJSON(data);
		 			if(data.status == 'true'){
		 				console.log("envio");
		 			}
		 		},
            });
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