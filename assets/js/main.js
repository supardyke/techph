$(document).ready(function() {
	//sidebar toggle
	$('.sidebar-toggle').on('click', function() {
		$('#tp-nav').toggleClass('became-active');
	});
	//submenu
	// $('.sub-toggle').on('click', function() {
	// 	$('#sub-menu').toggleClass('became-active');
	// 	$('.sub-toggle').toggleClass('text-active');
	// });
	// close sidebar
	var $sidebar = $('#tp-nav');
	$(document).on('mouseup', function(e) {
		if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
			$sidebar.removeClass('became-active');
		}
	});
});

function openTab(evt, tabName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("content-tab");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("is-active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += "is-active";
}