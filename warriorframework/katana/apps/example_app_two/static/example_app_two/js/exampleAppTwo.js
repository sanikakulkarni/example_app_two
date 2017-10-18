var exampleAppTwo = {
    toggleColor: function(){
        var $elem = $(this);
        if($elem.hasClass('example-app-two-btn-color')){
            $elem.removeClass('example-app-two-btn-color');
        } else {
            $elem.addClass('example-app-two-btn-color');
        }
    }
}