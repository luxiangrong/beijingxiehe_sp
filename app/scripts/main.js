// jshint devel:true
;
(function($){
	$(document).ready(function(){
		$('.btn-side-nav').on('click', function(e){
			e.preventDefault();
			$('.side-nav-wrap').addClass('active');
		});
		$('.side-nav-wrap .btn-back').on('click', function(e){
			e.preventDefault();
			$('.side-nav-wrap').removeClass('active');
		})
	});
})(jQuery);