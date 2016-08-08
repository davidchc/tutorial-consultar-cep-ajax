$(document).ready(function(){
	$("input[name=cep]").blur(function(){
		var cep = $(this).val().replace(/[^0-9]/, '');
		if(cep){
			var url = 'https://correiosapi.apphb.com/cep/' + cep;
			 $.ajax({
                    url: url,
                    dataType: 'jsonp',
                    crossDomain: true,
                    contentType: "application/json",
					success : function(json){
						if(json.logradouro){
							$("input[name=rua]").val(json.logradouro);
							$("input[name=bairro]").val(json.bairro);
							$("input[name=cidade]").val(json.cidade);
							$("input[name=uf]").val(json.estado);
						}
					}
			});
		}
					
	});
	
});