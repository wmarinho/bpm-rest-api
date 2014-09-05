/*
Usage:
<script type="text/javascript" language="javascript" src="api/bpm-init-app.js?v=0.1"></script>
*/

$( document ).ajaxStart(function() {
	$( "#loading" ).show();
});

$( document ).ajaxStop(function() {
	$( "#loading" ).hide();
});


$("input[bpm-endpoint]").each( function () {
	var endpoint = $(this).attr('bpm-endpoint'),
		field = $(this).attr('bpm-get'),
		template = $(this).attr('bpm-template'),
		target = $(this).attr('bpm-get-info'),
		type = $(this).attr('type');
	
	$(this).bpmApi({
		endpoint : endpoint,
		field : field, 
		type : type,
		query : "",
		target: target,
		prefix: "",
		template : template,
		onSelected : function (obj, data) {			
			$.each(data, function (idx, val) {				
				$("input[bpm-set="+ idx +"]").html(val);
			});
	 }
	});
});


$("a[bpm-endpoint]").click( function () {
	var endpoint = $(this).attr('bpm-endpoint'),
		field = $(this).attr('bpm-get'),
		template = $(this).attr('bpm-template'),
		target = $(this).attr('bpm-target'),
		type = $(this).attr('type');
	//console.log(target);
	$('#' + target).bpmApi({
		endpoint : endpoint,
		template : template,
		target : target,
		onLoad : function () {
		
			$("button[bpm-endpoint]").click( function () {						
					var endpoint = $(this).attr('bpm-endpoint');
					console.log(endpoint);
					$('#' + target).bpmApi({
						endpoint : endpoint,
						template : template,
						target : target
					 });
				});
		}
	 });
});
