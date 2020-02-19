$(document).ready(function(){
	// Change Background Color during hover on item(class = `item`)
	$(".item").hover(function(){
		$(this).css("background","#e5ffe9");
	},function(){
		$(this).css("background", "#ffffff");
	})
	// Change Background Color during hover on item(class = `item_1`)
	$(".item_1").hover(function(){
		$(this).css("background","#e5ffe9");
	},function(){
		$(this).css("background", "#ffffff");
	})	


	// If click the `container_1`,
	$("#container_1>.options").find(".item").click(function(){
		var has_phone_system = $(this).find('input').val();
		$(document).find('#container_1_value').val(has_phone_system);
		$(document).find('#container_1').css("display","none");
		$(document).find('#container_2').css('display','block');
	});

	// If click the `container_2`
	$("#container_2>.options").find(".item").click(function(){
		var amount_phone = $(this).find('input').val();
		$(document).find('#container_2_value').val(amount_phone);
		$(document).find('#container_2').css("display","none");
		$(document).find('#container_3').css('display','block');
	});	

	// If click the `container_3`
	var features = '';
	$('#feature_btn').click(function(){
		var items = $('#container_3>.options').find('.item_1');
		items.each(function(){
			var checked;
			checked = $(this).find('input').prop('checked');
			if(checked == true){
				if(features.length == 0){
					features = $(this).find('input').val();
				}else{
					features = features + ',' + $(this).find('input').val();
				}
			}
		});
		$('#container_3_value').val(features);
		$(document).find('#container_3').css("display","none");
		$(document).find('#container_4').css('display','block');		
	});

	// If click the `container_4`
	$('#supplier_btn').click(function(){
		var postcode = '';
		postcode = $('#postcode').val();
		$('#container_4_value').val(postcode);
	});
	
});