// Фикс для яндекс карт, google speed page плохо реагирует на карты от яндекса, с данным скриптом можно выиграть до от 20 до 40 баллов на (https://developers.google.com/speed/pagespeed/insights/)


$(document).ready(function() {
    // указываем элемент по которому будет событие
    var rewiews = $('.vip-partners');
    // узнаем координаты у элемента до топа
    var rewiewsTop  = rewiews.offset().top;
    // добавляем привязку bind для глобального обьекта window, это нужно для того что бы присвоить и отследить скролл
    $(window).bind('scroll', (function(){
        // присваиваем переменной значение, this ссылается на глобальный обьект window, узнаем текущее значения скролла
        var windowTop = $(this).scrollTop();
        // если скролл по оси х у window(рабочее поле нашего окна сайта) больше чем скролл по оси х у выбранного элемента rewiewsTop
        if(windowTop > rewiewsTop){
            console.log('работает');
            // добавляем в блок maps html код с картой конструктором, ссылка на сайт конструктор(https://yandex.ru/map-constructor/) после создания меняем um, в данном случае um=constructor%3Ab352db3701468afcd658c3af41f8e957f74958161ecf1bef5aa541b4294712a2
            $('.maps').html("<script charset='utf-8' async src='https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab352db3701468afcd658c3af41f8e957f74958161ecf1bef5aa541b4294712a2&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=false'></script>");
            // убираем привязку bind, это нужно что бы карта запустилась только один раз
            $(window).unbind('scroll');
            // елси скачет фиксированное меню, то ниже фикс для тех кто пишет на бутстрапе и добовляет классы
            $(window).scroll(function(){
            ($(window).scrollTop() > 132.5)?
            $('.menu').addClass('fixed-top m-0'):
            $('.menu').removeClass('fixed-top m-0');
        });  
            
        }
    }))
})