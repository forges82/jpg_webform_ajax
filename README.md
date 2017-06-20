# jpg_webform_ajax
Enable webform ajax in new webforms by default and relocate browser position after a webform submit for Drupal 7:

1- When you install webform_ajax module (https://www.drupal.org/project/webform_ajax) and you create a webform, it doesn't use ajax. You must go to webform configuration and enable this funcionality. With this module this is automatic.
2- If you submit an ajax webform and the confirmation message is shorter than the last page of the webform, you don't see that message: you see your web page footer. This is confused, because your users don't know if they have sent your webform right unless they scroll up. With this module, after a webform submission the user's browser scroll up automatically.
