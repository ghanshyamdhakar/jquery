$(document).ready(function(){
	var doc=[];
	if (localStorage.getItem('formdata')) {
		doc=JSON.parse(localStorage.getItem('formdata'));
		$(doc).each(function(ke,vl){
			$("main").append('<section><h2>'+vl.title+'<button type="button" onclick="removeElement(this)">X</button><i class="fa fa-arrows" style="font-size:36px"></i></h2></section>');
			$("main section h2 button:last-child").addClass("button-margin");
			$("main").addClass("main-class");
			$("main section").parent().sortable();
			$(".select-heading").append('<option value="'+(ke+1)+'">'+vl.title+'</option>');
			$(".form-select-heading").append('<option value="'+(ke+1)+'">'+vl.title+'</option>');
			$(vl.subheading).each(function(kes,vll){
				$(".form-select-heading").change(function(){
					$('main section:nth-child('+(ke+1)+') div h6').each(function(){
						$(".form-select-subheading").append('<option value="'+(kes+1)+'">'+vll.title+'</option>');
					});
				});
				$('main section:nth-child('+(ke+1)+')').append('<div><h6>'+vll.title+'<button onclick="removeElement(this)">X</button></h6></div>');
				$(vll.form).each(function(kea,vllu){
					if (vllu.input=='select') {
						var opts=vllu.options.split(',');
						var selecthd=$('<select class="'+vllu.class+'" name="'+vllu.name+'">');
						$(opts).each(function(oke,ov){
							if(vllu.value==ov){
								$('<option value="'+oke+'" selected="selected">'+ov+'</option>').appendTo(selecthd);
							}
							else{
								$('<option value="'+oke+'">'+ov+'</option>').appendTo(selecthd);
							}
						});
						selecthd.appendTo('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+')');
					}
					else if (vllu.input=='checkbox'){
						var checkbx=vllu.options.split(',');
						var checklist=$('<p>');
						$(checkbx).each(function(kch,valch){
							if(vllu.value==valch){
								$('<label>'+valch+'</label><input type="'+vllu.input+'" value="'+kch+'" placeholder="'+vllu.placeholder+'" class="'+vllu.class+'" name="'+vllu.name+'" checked="checked">').appendTo(checklist);
							}
							else{
								$('<label>'+valch+'</label><input type="'+vllu.input+'" value="'+kch+'" placeholder="'+vllu.placeholder+'" class="'+vllu.class+'" name="'+vllu.name+'">').appendTo(checklist);
							}
						});
						checklist.appendTo('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+')');
					}
					else if (vllu.input=='radio'){
						var radi=vllu.options.split(',');
						var radiolis=$('<p>');
						$(radi).each(function(kra,valra){
							if(vllu.value==valra){
								$('<label>'+valra+'</label><input type="'+vllu.input+'" value="'+valra+'" placeholder="'+vllu.placeholder+'" class="'+vllu.class+'" name="'+vllu.name+'" checked="checked">').appendTo(radiolis);
							}
							else{
								$('<label>'+valra+'</label><input type="'+vllu.input+'" value="'+valra+'" placeholder="'+vllu.placeholder+'" class="'+vllu.class+'" name="'+vllu.name+'">').appendTo(radiolis);
							}
						});
						radiolis.appendTo('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+')');
					}
					else if (vllu.input=='textarea'){
						$('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+')').append('<p><label>'+vllu.label+'</label><textarea value="'+vllu.value+'" placeholder="'+vllu.placeholder+'" class="'+vllu.class+'" name="'+vllu.name+'"></textarea></p>');
					}
					else{
						$('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+')').append('<p><label>'+vllu.label+'</label><input type="'+vllu.input+'" value="'+vllu.value+'" placeholder="'+vllu.placeholder+'" class="'+vllu.class+'" name="'+vllu.name+'"></p>');
					}
					if(vllu.disabled==true){
						var inpt=vllu.input;
						if(vllu.input=='text' || vllu.input== 'button' || vllu.input=='radio' || vllu.input=='email' || vllu.input=='number' || vllu.input=='image' || vllu.input=='color' || vllu.input=='password' || vllu.input=='checkbox' || vllu.input=='hidden' || vllu.input=='search' || vllu.input=='range' || vllu.input=='submit' || vllu.input=='reset' || vllu.input=='url' || vllu.input=='tel' || vllu.input=='file'){
							inpt='input';
						}
						$('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+') p:last-child '+inpt).attr('disabled', "disabled");
					}
					if(vllu.disabled==true){
						var inpt=vllu.input;
						if(vllu.input=='text' || vllu.input== 'button' || vllu.input=='radio' || vllu.input=='email' || vllu.input=='number' || vllu.input=='image' || vllu.input=='color' || vllu.input=='password' || vllu.input=='checkbox' || vllu.input=='hidden' || vllu.input=='search' || vllu.input=='range' || vllu.input=='submit' || vllu.input=='reset' || vllu.input=='url' || vllu.input=='tel' || vllu.input=='file'){
							inpt='input';
						}
						$('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+') '+inpt).attr("disabled", "disabled");
					}
					if(vllu.required==true){
						var inpt=vllu.input;
						if(vllu.input=='text' || vllu.input== 'button' || vllu.input=='radio' || vllu.input=='email' || vllu.input=='number' || vllu.input=='image' || vllu.input=='color' || vllu.input=='password' || vllu.input=='checkbox' || vllu.input=='hidden' || vllu.input=='search' || vllu.input=='range' || vllu.input=='submit' || vllu.input=='reset' || vllu.input=='url' || vllu.input=='tel' || vllu.input=='file'){
							inpt='input';
						}
						$('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+') p:last-child '+inpt).attr("required", true);						
					}
					if(vllu.readonly==true){
						var inpt=vllu.input;
						if(vllu.input=='text' || vllu.input== 'button' || vllu.input=='radio' || vllu.input=='email' || vllu.input=='number' || vllu.input=='image' || vllu.input=='color' || vllu.input=='password' || vllu.input=='checkbox' || vllu.input=='hidden' || vllu.input=='search' || vllu.input=='range' || vllu.input=='submit' || vllu.input=='reset' || vllu.input=='url' || vllu.input=='tel' || vllu.input=='file'){
							inpt='input';
						}
						$('main section:nth-child('+(ke+1)+') div:nth-child('+(kes+2)+') p:last-child '+inpt).attr("readonly", true);						
					}				
				});
			});
		});
	}
	else{
		doc=[];
	}
	$(".form-input").keypress(function(e){
		if(e.which==13){
			$(".button-primary").click();
			return false;
		}
	});
	$(".button-primary").click(function(){
		var abc=$('.form-input').val();
		$("main").append('<section><h2>'+abc+'<button type="button" onclick="removeElement(this)">X</button><i class="fa fa-arrows" style="font-size:36px"></i></h2></section>');
		$("main section h2").addClass("heading-cls");
		$("main").addClass("main-class");
		var len=$("main section").length;
		$("main section").parent().sortable();
		$("main section h2").each(function(seckey,secval){
			console.log(seckey,secval);
		})
		$(".select-heading").append($("<option value="+len+">").text(abc));
		$(".form-select-heading").append($("<option value="+len+">").text(abc));
		doc.push({'title':abc,'subheading':[]});
		localStorage.setItem('formdata',JSON.stringify(doc));
		$('form')[0].reset();
	});
	$(".subheading-input").keypress(function(e){
		if(e.which==13){
			$(".subheading-save").click();
			return false;
		}
	});
	$(".subheading-save").click(function(){
		var ab=$(".select-heading").val();
		var cd=$(".subheading-input").val();
		$('main section:nth-child('+ab+')').append('<div><h6>'+cd+'<button onclick="removeElement(this)">X</button></h6></div>');
		doc[ab-1].subheading.push({'title':cd,'form':[]});
		localStorage.setItem('formdata',JSON.stringify(doc));
		$('form')[1].reset();
	});
	$(".form-select-heading").change(function(){
		var heading=$(this).val()
		$('.form-select-subheading option').remove();
		$('.form-select-subheading').append('<option value="">select sub-heading</option>');
		$('main section:nth-child('+heading+') div h6').each(function(ab){
			var curr_h=$(this).text().replace("X",'');
			ab=ab+1;
			$('.form-select-subheading').append('<option value="'+ab+'">'+curr_h+'</option>');
		});
	});
	$(".form-save").click(function(){
		var hcount=$(".form-select-heading").val();
		var shcount=$('main section:nth-child('+hcount+') div').length;
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
		var disb=false;
		var reado=false;
		var reqd=false;
		fsh=fsh+1;
		if (fst=='textarea') {
			$('main section:nth-child('+fh+') div:nth-child('+fsh+')').append('<p><label>'+label+'</label><textarea placeholder="'+ph+'" class="'+clas+'" name="'+name+'" value="'+value+'"></textarea></p>');
		}
		else if(fst=='select'){
			var opts=options.split(',');
			var p=$('<p>');
			var selecth=$('<select class="'+clas+'" name="'+name+'">');
			var pi=selecth.appendTo(p);
			$(opts).each(function(av,va){
				if(value==va){
					$('<option value="'+av+'" name="'+name+'" selected="selected">'+va+'</option>').appendTo(selecth);
				}
				else{
					$('<option value="'+av+'" name="'+name+'">'+va+'</option>').appendTo(selecth);
				}
			});
			pi.appendTo('main section:nth-child('+fh+') div:nth-child('+fsh+')');
		}
		else if(fst=='checkbox'){
			var opts=options.split(',')
			radioli=$('<p>')
			$(opts).each(function(av,va){
				if(value==va){
					$('<label>'+va+'</label><input type="'+fst+'" value="'+va+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'" checked="checked">').appendTo(radioli);
				}
				else{
					$('<label>'+va+'</label><input type="'+fst+'" value="'+va+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'">').appendTo(radioli);	
				}
			});
			radioli.appendTo('main section:nth-child('+fh+') div:nth-child('+fsh+')');

		}
		else if(fst=='radio'){
			var opts=options.split(',');
			console.log(opts);
			radioli=$('<p>')
			$(opts).each(function(av,va){
				if(value==va){
					$('<label>'+va+'</label><input type="'+fst+'" value="'+va+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'" checked="checked">').appendTo(radioli);
				}
				else{
					$('<label>'+va+'</label><input type="'+fst+'" value="'+va+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'">').appendTo(radioli);
				}
			});
			radioli.appendTo('main section:nth-child('+fh+') div:nth-child('+fsh+')');
		}
		else{
			$('main section:nth-child('+fh+') div:nth-child('+fsh+')').append('<p><label>'+label+'</label><input type="'+fst+'" value="'+value+'" placeholder="'+ph+'" class="'+clas+'" name="'+name+'"></p>');
		}
		if ($(".disable-class").is(':checked')){
			var inpt=fst;
			if(fst=='text' || fst== 'button' || fst=='radio' || fst=='email' || fst=='number' || fst=='image' || fst=='color' || fst=='password' || fst=='checkbox' || fst=='hidden' || fst=='search' || fst=='range' || fst=='submit' || fst=='reset' || fst=='url' || fst=='tel' || fst=='file'){
				inpt='input';
			}
			$('main section:nth-child('+fh+') div:nth-child('+fsh+') p:last-child '+inpt).attr("disabled", "disabled");
			disb=true;
		}
		if ($(".disable-class").is(':checked')){
			var inpt=fst;
			if(fst=='text' || fst== 'button' || fst=='radio' || fst=='email' || fst=='number' || fst=='image' || fst=='color' || fst=='password' || fst=='checkbox' || fst=='hidden' || fst=='search' || fst=='range' || fst=='submit' || fst=='reset' || fst=='url' || fst=='tel' || fst=='file'){
				inpt='input';
			}
			$('main section:nth-child('+fh+') div:nth-child('+fsh+') '+inpt).attr("disabled", "disabled");
			disb=true;
		}

		if ($(".readonlyy-class").is(':checked')){
			var inpt=fst;
			if(fst=='text' || fst== 'button' || fst=='radio' || fst=='email' || fst=='number' || fst=='image' || fst=='color' || fst=='password' || fst=='checkbox' || fst=='hidden' || fst=='search' || fst=='range' || fst=='submit' || fst=='reset' || fst=='url' || fst=='tel' || fst=='file'){
				inpt='input';
			}
			$('main section:nth-child('+fh+') div:nth-child('+fsh+') p:last-child '+inpt).attr('readonly',true);
			reado=true;
		}
		if ($(".required-classs").is(':checked')){
			var inpt=fst;
			if(fst=='text' || fst== 'button' || fst=='radio' || fst=='email' || fst=='number' || fst=='image' || fst=='color' || fst=='password' || fst=='checkbox' || fst=='hidden' || fst=='search' || fst=='range' || fst=='submit' || fst=='reset' || fst=='url' || fst=='tel' || fst=='file'){
				inpt='input';
			}
			$('main section:nth-child('+fh+') div:nth-child('+fsh+') p:last-child '+inpt).attr('required', true);
			reqd=true;
		}
		doc[fh-1].subheading[fsh-2].form.push({'input':fst,'label':label,'name':name,'placeholder':ph,'class':clas,'value':value,'options':options,'disabled':disb,'required':reqd,'readonly':reado});
		localStorage.setItem('formdata',JSON.stringify(doc));
		$("#formInputEnter").submit(function(e){
			e.preventDefault();
		})
		$('form')[2].reset();
	});
});
function removeElement(thiss){
	$(thiss).parent().parent().remove();
}