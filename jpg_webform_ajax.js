(function ($) {
  Drupal.behaviors.jpg_webform_ajax = {
    attach: function (context, settings) {
      $('.links a:not(.ajax-processed)', context).each(function () {
	if (($("article.node-webform").length > 0)){
	  $(document).scrollTop( $("article.node-webform").offset().top );
	}
    });
    }
  };

})(jQuery);
