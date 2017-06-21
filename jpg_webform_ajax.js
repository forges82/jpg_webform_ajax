(function ($) {
  Drupal.behaviors.jpg_webform_ajax = {
    attach: function (context, settings) {
      $('.webform-confirmation', context).each(function () {
	// if (($(".webform-client-form").length > 0)){
	  $(document).scrollTop( $(".webform-confirmation").offset().top );
	// }
    });
    }
  };

})(jQuery);
