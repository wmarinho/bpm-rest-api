/*
Usage:
<script type="text/javascript" language="javascript" src="api/bpm-init-form.js?v=0.1"></script>
*/

$("a[bpm-endpoint]").each( function () {
	var endpoint = $(this).attr('bpm-endpoint');
	
	$(this).bpmApi({
		endpoint : endpoint,
		field : field,
		type : type,
		query : "",
		template : template,
		onSelected : null
	});
});
