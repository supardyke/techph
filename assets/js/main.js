$(document).ready(function() {
	//sidebar toggle
	$('.sidebar-toggle').on('click', function() {
		$('#tp-nav').toggleClass('is-active');
	});
	//submenu
	$('.sub-toggle').on('click', function() {
		$('#sub-menu').toggleClass('is-active');
		$('.sub-toggle').toggleClass('text-active');
	});
	//close sidebar
	var $sidebar = $('#tp-nav');
	$(document).on('mouseup', function(e) {
		if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
			$sidebar.removeClass('is-active');
		}
	});
});