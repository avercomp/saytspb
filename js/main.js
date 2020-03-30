
$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
        
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
});
$(document).ready(function() {
    
    var modalSend = $('.modal__button');

    modalSend.on('click', function() {
        $(".modal__button").val("");
    });
});



$(document).ready(function(){
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });



    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() +10 +bullets.width() +10)
    bullets.css('left', prev.width() +10)
    
    new WOW().init();

    $('.modal__form').validate ({
        rules: {
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: {
                required: true,
                minlength: 17
            },
            policy__label: "required",
            userEmail: {
              required: true,
              email: true
            },
            
          },

            errorElement: "em",
            errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв",
                    rangelength: "Имя не длиннее 15 символов"
            },  
            modal__policy__checkbox: "Необходимо согласие на обработку данных",
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Телефон должен состоять из 11 цифр",
            },
            userEmail: {
              required: "Обязательно укажите Ваш E-mail",
              email: "введите в формате: name@domain.com"
            }
          },
        // submitHandler: function(form) {
        //     $.ajax({
        //         type: "POST",
        //         url: "send.php",
        //         data: $(form).serialize(),
        //         success: function (response) {
        //             // alert('форма отправлена, мы свяжемся с вами через 10 минут');
        //             $(form)[0].reset();
        //             modal.removeClass('modal--visible');
        //         }
        //     });
        // } 
    });
    $('.footer__form').validate ({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: {
                required: true,
                minlength: 17
            },
            userQuestion: {
              required: true,
            }
          },
          errorElement: "em",
          errorClass: "invalid",
            messages: {
                footer__policy__checkbox: "Необходимо согласие на обработку данных",
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух символов",
                    rangelength: "Имя не длиннее 15 символов"
                },  
                userPhone: {
                    required: "Телефон обязателен",
                    minlength: "Телефон должен состоять из 11 цифр",
                },

                userQuestion: {
                    required: "Задайте вопрос",
                }
          },
        //   submitHandler: function(form) {
        //     $.ajax({
        //         type: "POST",
        //         url: "send.php",
        //         data: $(form).serialize(),
        //         success: function (serialize) {
        //             $(form)[0].reset();
        //             modal.removeClass('modal--visible');
        //         }
        //     });
        // } 
    });
    $('.control__form').validate ({
        rules: {
            control__policy__checkbox: "required",
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: {
                required: true,
                minlength: 17
            },
          },
          errorElement: "em",
            errorClass: "invalid",
            messages: {
                control__policy__checkbox: "Необходимо согласие на обработку данных",
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв",
                    rangelength: "Имя не длиннее 15 символов"
                },  
                userPhone: {
                    required: "Телефон обязателен",
                    minlength: "Телефон должен состоять из 11 цифр",
                },
          },
        //   submitHandler: function(form) {
        //     $.ajax({
        //         type: "POST",
        //         url: "send.php",
        //         data: $(form).serialize(),
        //         success: function (response) {
        //             $(form)[0].reset();
        //         }
        //     });
        // }
    });
    
    // Маска для телефона 
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона"});
    
    var isAddedMap = false;

    $(window).scroll(function() {
        var el = $('.map');
        if ($(this).scrollTop() > el.offset().top - 800) {
            if(isAddedMap) return;
            isAddedMap = true;
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6e1b29bfb831e6868ca0460087b9bd7b138ea93171c356178daa1ba8f18be9dd&amp;width=100%25&amp;lang=ru_RU&amp;scroll=false";
            el.append(script);
        };
    });
    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '465',
          width: '100%',
          videoId: 'RHzzLqJWqHs',
          events: {
            'onReady': videoPlay,

          }
        });
      })
      function videoPlay(event) {
          event.target.playVideo();
      };
      $(document).ready(function(){
        $(".nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 3000);
        });
    });
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1200);
        e.preventDefault();
      });
});




