/*
Usage:
<script type="text/javascript" language="javascript" src="bpm-init-app.js?v=0.1"></script>
*/

$( document ).ajaxStart(function() {
	$( "#loading" ).show();
});

$( document ).ajaxStop(function() {
	$( "#loading" ).hide();
});

$(document).ready(function () {

    var url = $('.navbar-brand').attr('href') || window.location.href;
   
    $('#qrcode').ClassyQR({
        create : true,
        type : 'url',
        size: '90',
        url : encodeURIComponent(url)
    });
	
	$("a[href^='#/']").each(function () {
		var view = $(this).attr('href');
		view = view.replace("#","");
		var endpoint = $(this).attr('data-endpoint');
		
		$(this).bpmApi({
			endpoint : endpoint,	
			templateUrl : "static/html" + view,
			target : "content",
			prefix : "endpoint"
		 }); 	
	});
	
	
	$("button[bpm-endpoint]").each( function () {
		var endpoint = $(this).attr('bpm-endpoint'),
			template = $(this).attr('bpm-template'),
			target = $(this).attr('bpm-target');
		
		$(this).bpmApi({
			endpoint : endpoint,
			template : template,
			target : target,
			prefix : "endpoint"
		 });
	});

});



