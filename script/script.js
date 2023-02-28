(function(){
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
    
  //   email check
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
      $(".result-email").text('');
      }
    });
  
      document.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      };
    }, true);
    
})(jQuery);