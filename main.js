$(document).ready(function(){
    var $pantalla = $(window);     
    const $imgloc = $('.s03').children('.descripcion');
    
    // Animacion de ancla     
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });



    // Efecto cambio en navbar

    if ($pantalla.width() <= 768) {
        // Desactivar efecto en pantalla chica
        $pantalla.off('scroll');
    }
    else if($pantalla.width() > 768){
        // Cambiar navbar en scroll
        $pantalla.on('scroll', function () {
            // Bajar ::after blanco y cambiara ancho de nav
            if ($pantalla.scrollTop()) {            
                $('nav').css({
                    '--var-effect': '0px',
                    'height': '90px'
            });
            // Ajustar div inferior, para evitar seccion en blanco
            $('.s01').children('.row').css('margin-top', '90px');
            // Cambiar imagen de logo
            $('nav').find('img').attr('src', 'img/evil-logo.png').css('width', '180px');  
            // Cambiar color de vinculos 
            $('nav').find('.x').find('a').css({
                'color': '#420f0f',
                'font-weight': 'initial' 
            });         
            }
            else{
                // Volver a valores por defecto
                $('nav').css({
                    '--var-effect': '-115px',
                    'height': '110px'
                });
                $('.s01').children('.row').css('margin-top', '110px');
                $('nav').find('img').attr('src', 'img/logo.png').css('width', '200px');
                $('nav').find('.x').find('a').css({
                    'color': 'white',
                    'font-weight': 'lighter' 
                });             
            } 
        });

    } 

   

    // Cambio de imagenes y descripcion  (seccion 3)

    if($pantalla.width() > 992){        
        // Imagen uno
        $imgloc.find('.imagen-uno').on('mouseenter', function(){
            $(this).children('img').attr('src', 'img/chica1hover.jpg');
            $(this).children('.d1').css('bottom', '0px');
        })
        $imgloc.find('.imagen-uno').on('mouseleave', function(){
            $(this).children('img').attr('src', 'img/chica1.jpg');
            $(this).children('.d1').css('bottom', '-100px');
        })

        // Imagen dos
        $imgloc.find('.imagen-dos').on('mouseenter', function(){
            $(this).children('img').attr('src', 'img/chica2hover.jpg');
            $(this).children('.d2').css('bottom', '0px');
        })
        $imgloc.find('.imagen-dos').on('mouseleave', function(){
            $(this).children('img').attr('src', 'img/chica2.jpg');
            $(this).children('.d2').css('bottom', '-100px');
        })
    }
    else{
        $imgloc.find('.imagen-uno').removeClass('overflow-hidden');
        $imgloc.find('.imagen-dos').removeClass('overflow-hidden');
    }   


    // Activar mismos ajustes anteriores en  resize de pantalla
    $pantalla.resize(function(){
        if($pantalla.width() <= 760){
            $pantalla.off('scroll');  
            $('nav').css({                
                'height': 'initial'
            });         
        }
        else if($pantalla.width() > 760){
            // Cambiar navbar en scroll
            $pantalla.on('scroll', function () {
                if ($pantalla.scrollTop()) {            
                    $('nav').css({
                        '--var-effect': '0px',
                         'height': '90px'
                    });
                    $('.s01').children('.row').css('margin-top', '90px');
                    $('nav').find('img').attr('src', 'img/evil-logo.png').css('width', '180px');   
                    $('nav').find('.x').find('a').css({
                        'color': '#420f0f',
                        'font-weight': 'initial' 
                    });         
                }
                else{
                    $('nav').css({
                        '--var-effect': '-115px',
                        'height': '110px'
                    });
                    $('.s01').children('.row').css('margin-top', '110px');
                    $('nav').find('img').attr('src', 'img/logo.png').css('width', '200px');
                    $('nav').find('.x').find('a').css({
                        'color': 'white',
                        'font-weight': 'lighter' 
                    });             
                } 
            });
        }

    })


    $pantalla.resize(function(){        
        if($pantalla.width() <= 992){         
            $imgloc.find('.imagen-uno').removeClass('overflow-hidden');
            $imgloc.find('.imagen-dos').removeClass('overflow-hidden'); 
            
            // Imagen uno
            $imgloc.find('.imagen-uno').on('mouseenter', function(){
                $(this).children('img').attr('src', 'img/chica1.jpg');
                $(this).children('.descripciones').css('bottom', '-100px');
            })

            // Imagen dos
            $imgloc.find('.imagen-dos').on('mouseenter', function(){
                $(this).children('img').attr('src', 'img/chica2.jpg');
                $(this).children('.descripciones').css('bottom', '-100px');
            })            
        }        
        else if($pantalla.width() > 992){
            // Cambio de imagenes y descripcion   
            $imgloc.find('.imagen-uno').addClass('overflow-hidden');
            $imgloc.find('.imagen-dos').addClass('overflow-hidden');          
    
            // Imagen uno
            $imgloc.find('.imagen-uno').on('mouseenter', function(){
                $(this).children('img').attr('src', 'img/chica1hover.jpg');
                $(this).children('.descripciones').css('bottom', '0px');
            })
            $imgloc.find('.imagen-uno').on('mouseleave', function(){
                $(this).children('img').attr('src', 'img/chica1.jpg');
                $(this).children('.descripciones').css('bottom', '-100px');
            })
    
            // Imagen dos
            $imgloc.find('.imagen-dos').on('mouseenter', function(){
                $(this).children('img').attr('src', 'img/chica2hover.jpg');
                $(this).children('.descripciones').css('bottom', '0px');
            })
            $imgloc.find('.imagen-dos').on('mouseleave', function(){
                $(this).children('img').attr('src', 'img/chica2.jpg');
                $(this).children('.descripciones').css('bottom', '-100px');
            })
        }    

    })

     // Barra separadora en seccion 2 mobile
     const $separador = $("<div class='separador d-sm-block d-md-none'></div>");
     $('.s02').find('article').before($separador);
     
     

})