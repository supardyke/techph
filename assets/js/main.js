$(document).ready(function() {
	//sidebar toggle
	$('.sidebar-toggle').on('click', function() {
		$('#tp-nav').toggleClass('became-active');
	});
	//toggle submenu
	var submenu = $("#tp-nav-two");
	$("#tp-community").click(function() {
		submenu.toggle('slow')
	});
	$("#tp-community").on({
		mouseenter: function() {
			submenu.show('fast')
		},
		mouseleave: function(e) {
			var toElem = $(e.toElement);
			if (toElem.closest("div.#tp-nav").id == "tp-nav-two")
				return;
		}
	});
	submenu.on({
		mouseenter: function() {
			submenu.show('fast')
		},
		mouseleave: function() {
			submenu.hide('fast')
		}
	});
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