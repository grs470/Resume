$(document).ready( () => {

    $('.employer').click(function(e){
        e.preventDefault();
        $(this).children('ul').toggle();
    })
})