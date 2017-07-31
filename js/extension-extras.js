document.addEventListener('DOMContentLoaded', function(){
    new Clipboard('#copy-button');
});
jQuery(document).ready(function($) {
    $('.popup').popup({position: 'bottom left'});
    $('.ui.toggle.button').popup();
    $('.ui.accordion').accordion();
    $('.scrollbar-inner').scrollbar();
    $.ajax(
        {
            url: '/view/releases/' + packageID,
            context: $('.releases-wrapper')
        }
    ).done(
        function(response) {
            $(this).html(response);
            $('.ui.accordion').accordion();
        }
    );
});
