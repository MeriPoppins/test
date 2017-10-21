// $(".spincrement").spincrement({
//     from: 0,                // Стартовое число
//     to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
//     decimalPlaces: 0,       // Сколько знаков оставлять после запятой
//     decimalPoint: " ",      // Разделитель десятичной части числа
//     thousandSeparator: " ", // Разделитель тыcячных
//     duration: 20000          // Продолжительность анимации в миллисекундах
// });

$(document).ready(function(){
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                from: 0,  
                to: false,
                decimalPlaces: 0,
                decimalPoint: " ",
                thousandSeparator: " ",
                duration: 20000 
            });
 
            show = false;
        }
    });
});