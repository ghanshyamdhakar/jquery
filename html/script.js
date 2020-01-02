$(document).ready(function(){
	$(".button-primary").click(function(){
		var abc=[$('.form-input').val()];
		$(".heading-class").append('<h2>'+abc+'<button type="button" onclick="removeElement(this)">X</button></h2>');
		var len=$("h2").length;
		$(".select-heading").append($("<option value="+len+">").text(abc));
		$(".form-select-heading").append($("<option value="+len+">").text(abc));
	});
	$(".subheading-save").click(function(){
		$(".select-heading").each(function(){
			var ab=$(".select-heading").val();
			var cd=$(".subheading-input").val();
			$('h2:nth-child('+ab+')').append('<h6>'+cd+'<button onclick="removeElement(this)">X</button></h6>');
		});
	});
	$(".form-select-heading").change(function(){
		var heading=$(this).val()
		$('.form-select-subheading option').remove();
		$('.form-select-subheading').append('<option value="">select sub-heading</option>');
		var shc=$('h2:nth-child('+heading+') h6').length;
		$('h2:nth-child('+heading+') h6').each(function(ab){
			var curr_h=$(this).text().replace("X",'');
			ab=ab+1;
			$('.form-select-subheading').append('<option value="'+ab+'">'+curr_h+'</option>');
		});
	});
	$(".form-save").click(function(){
		var hcount=$(".form-select-heading").val();
		var shcount=$('h2:nth-child('+hcount+') h6').length;
		console.log(shcount);
		var fh=$(".form-select-heading").val();
		var fsh=parseInt($(".form-select-subheading").val());
		var fst=$(".form-select-input").val();
		var label=$(".form-control-label").val();
		var name=$(".form-control-name").val();
		var ph=$(".form-control-placeholder").val();
		var clas=$(".form-control-class").val();
		var value=$(".form-control-value").val();
		var options=$(".form-control-options").val();
		var disabled=$(".form-control-disabled").val();
		var req=$(".form-control-required").val();
		var read=$(".form-control-readonly").val();
		fsh=fsh+1;
		if (fst=='textarea') {
			$('h2:nth-child('+fh+') h6:nth-child('+fsh+')').append('<label>'+label+'</label><br><textarea placeholder="'+ph+'" class="'+clas+'" name="'+name+'">');
		}
		else if(fst=='select'){
			var opts=options.split(',');
			var selecth=$('<select class="'+clas+'" name="'+name+'">');
			$(opts).each(function(av,va){
				$('<option value="'+av+'" name="'+name+'">'+va+'</option>').appendTo(selecth);
			});
			selecth.appendTo('h2:nth-child('+fh+') h6:nth-child('+fsh+')');
		}
		else if(fst=='checkbox'){
			var opts=options.split(',')
			$(opts).each(function(av,va){
				$('h2:nth-child('+fh+') h6:nth-child('+fsh+')').append('<label>'+va+'</label><input type="'+fst+'" value="'+va+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'">');
			});
		}
		else if(fst=='radio'){
			var opts=options.split(',');
			$(opts).each(function(av,va){
				$('h2:nth-child('+fh+') h6:nth-child('+fsh+')').append('<label>'+va+'</label><input type="'+fst+'" value="'+va+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'">');
			});
		}
		else{
			$('h2:nth-child('+fh+') h6:nth-child('+fsh+')').after('<label>'+label+'</label><br><input type="'+fst+'" value="'+value+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'">');
		}
	});
});
function removeElement(thiss){
	$(thiss).parent().remove();
	return false;
}