(function(){
  // 메뉴 호버 이벤트
    $(".menu > ul > li").hover(function(){
      $(this).find(".subMenu").stop().slideDown(500);
    }, function(){
      $(this).find(".subMenu").stop().slideUp(500);
    });
    
    $(".p2imgCon").hide();
    $(".p2ImgList > ul > li").hover(function(){
      $(this).find(".p2imgCon").stop().slideToggle(500, 'linear');
    }, function(){
      $(this).find(".p2imgCon").stop().slideToggle(500, 'linear');
    });
    
  //  이메일 유효성 검사 스크립트(구글 참조)
    function email_check( email ) {    
      var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return (email != '' && email != 'undefined' && regex.test(email)); 
    }
  
    $("input[type=email]").blur(function(){
      var email = $(this).val();
      if( email == '' || email == 'undefined') return;
      if(! email_check(email) ) {
        $(".result-email").text('Please wirte it in E-mail format');
        $(this).focus();
        return false;
      }else {
        document.getElementById("p4Form").submit();
        alert('Thank you for subscribe!');
      }
    });
  
      document.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      };
    }, true);

    // 이메일에 아무 입력 값이 없을 때 데이터 전송을 막기위한 함수
    $("#p4Form").submit(function(e){
      e.preventDefault();
    });

    //클릭 시 부드러운 scroll down(구글 참조)
    $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
  });
    
})(jQuery);