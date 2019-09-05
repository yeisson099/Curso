//selector ID

var id = $('#miSection');
id.css("background", "red")
        .css("width", "50px")
        .css("fontColor", "blue")
var j = $('#j').css("color", "red")

console.log(id)

//selector clase
var zebra = $(".zebra").css("background", "blue")
var clase = $('.divcentral1').click(function () {
        $(this).addClass('zebra')


});
//selector por etiqueta
var li = $('li');
li.click(function () {
        //  optimiza la carga del dom
        var elemento = $(this);
        if (elemento.hasClass('zebra')) {
                elemento.removeClass('zebra')
        } else {
                elemento.addClass('zebra')
        }
})
var parrafos = $('p');
parrafos.click(function () {
        var elemento = $(this);
        elemento.toggleClass('zebra');
});
parrafos.css('cursor','pointer')