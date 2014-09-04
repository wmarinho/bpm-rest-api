/*
Usage:
<script type="text/javascript" language="javascript" src="api/bpm-init-form.js?v=0.1"></script>
*/

$("a[bpm-endpoint]").click( function () {
	var endpoint = $(this).attr('bpm-endpoint');
	var targetInfo = $(this).attr('bpm-info');
	
	$(this).bpmApi({
		endpoint : endpoint,
		field : field,
		type : type,
		query : "",
		target : targetInfo,
		template : template,
		onSelected : null
	});
});
