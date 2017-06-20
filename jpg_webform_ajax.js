(function ($) {
  Drupal.behaviors.jpg_webform_ajax = {
    attach: function (context, settings) {
      $('.links a:not(.ajax-processed)', context).each(function () {
	$(document).scrollTop( $("article.node-webform").offset().top );
    });
    }
  };

})(jQuery);
