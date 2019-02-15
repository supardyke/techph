$(document).ready(function() {
          //sidebar toggle
          $('.sidebar-toggle').on('click', function() {
                    $('#tp-nav').toggleClass('is-active');

          });

          //close sidebar
          var $sidebar = $('#tp-nav');

          $(document).mouseup(function(e) {

                    if (!$sidebar.is(e.target) &&
                              $sidebar.has(e.target).length === 0) {
                              $sidebar.removeClass('is-active');
                    }
          });

});