/*
Usage:
<script type="text/javascript" language="javascript" src="api/bpm-init-form.js?v=0.1"></script>
*/

$("a[bpm-endpoint]").click( function () {
	var endpoint = $(this).attr('bpm-endpoint');
	var targetInfo = $("div[bpm-get-info]");
        
	targetInfo.bpmApi({
		endpoint : endpoint
	});
	
});
