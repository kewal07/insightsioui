(function($){
  "use strict";
  // Cache selectors
  var lastId,
  topMenu = $("#main-menu"),
  topMenuHeight = topMenu.outerHeight()+15,
  menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("id"));
    if (item.length) { return item; }
  });

  var side_navigators_home_page = $(".side-navigator").find("span");
  side_navigators_home_page.click(function(e){
      var index = $(this).attr("id").split('-')[3];
      var offsetTop = 0;
      var href = "";
      if(index === "1"){
        href = "#top";
        offsetTop = href === "#" ? 0 : $("#top").offset().top-topMenuHeight+1;
      } else if(index === "2"){
        href = "#product-inner";
        offsetTop = href === "#" ? 0 : $("#product-inner").offset().top-topMenuHeight+1;
      } else if(index === "3"){
        href = "#portfolio";
        offsetTop = href === "#" ? 0 : $("#portfolio").offset().top-topMenuHeight+1;
      } else if(index === "4"){
        href = "#solutions";
        offsetTop = href === "#" ? 0 : $("#solutions").offset().top-topMenuHeight+1;
      } else if(index === "5"){
        href = "#services";
        offsetTop = href === "#" ? 0 : $("#services").offset().top-topMenuHeight+1;
      } else if(index === "6"){
        href = "#contact";
        offsetTop = href === "#" ? 0 : $("#contact").offset().top-topMenuHeight+1;
      } else if(index === "7"){
        href = "#top";
        offsetTop = href === "#" ? 0 : $("#top").offset().top-topMenuHeight+1;
      } else if(index === "8"){
        href = "#product-inner";
        offsetTop = href === "#" ? 0 : $("#product-inner").offset().top-topMenuHeight+1;
      } else if(index === "9"){
        href = "#product-salient-features";
        offsetTop = href === "#" ? 0 : $("#product-salient-features").offset().top-topMenuHeight+1;
      }
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 300);
  });

  // Bind click handler to menu items
	// so we can get a fancy scroll animation
  // menuItems.click(function(e){
  //   var href = $(this).attr("href"),
  //   offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  //   $('html, body').stop().animate({
  //       scrollTop: offsetTop
  //   }, 300);
  //   e.preventDefault();
  // });
	// Bind to scroll 
  $(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topMenuHeight;   
    
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
       
    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
    }                   
  });
  $('#Grid').mixitup();
    
  $(function(){
    $('[data-rel="lightbox"]').lightbox();
  });
})(jQuery);