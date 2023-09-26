$(document).ready(function(){
    
    $("p").slideUp(200);
    $("p").slideDown(1000);

    $("div .social #github").css("color","purple")
    $("div .social #mail").css("color","purple")
    $("div .social #instagram").css("color","purple")
    $("div .social #linkedin").css("color","purple")

    $("div .social #github").mouseenter(function(){
        $("#github").css("color","white")
    })

    $("div .social #github").mouseleave(function(){
        $("#github").css("color","purple")
    })

    $("div .social #mail").mouseenter(function(){
        $("#mail").css("color","white")
    })

    $("div .social #mail").mouseleave(function(){
        $("#mail").css("color","purple")
    })

    $("div .social #instagram").mouseenter(function(){
        $("#instagram").css("color","white")
    })

    $("div .social #instagram").mouseleave(function(){
        $("#instagram").css("color","purple")
    })

    $("div .social #linkedin").mouseenter(function(){
        $("#linkedin").css("color","white")
    })

    $("div .social #linkedin").mouseleave(function(){
        $("#linkedin").css("color","purple")
    })
})



$('#aboutme').click(function() {
  window.location='http://www.instagram.com/aliikrhnn';
});
$('#home').click(function() {
    window.location='http://www.alikarahan.net';
  });
  $('#project').click(function() {
    window.location='http://www.github.com/aliikrhnn';
  });
  $('#aboutme').click(function() {
    window.location='http://www.linkedin.com/in/aliikrhnn';
  });