(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space


$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });

});


$(".button-collapse").click(function() {
	window.setTimeout(function(){
		$("img.cart-tmb").addClass("move");
	},800);
});

$(".buy").click(function(){
  var mid = $(".buy").attr("ng").split(".");
  var midb = mid[0].split("/");
  var idx = midb[1]+Math.floor((Math.random() * 10) + 1);
  
  $("#base").append('<div class="row row-cart" id="'+idx+'"> <div class="col s6"><img src="'+$(".buy").attr("ng")+'" class="cart-tmb"></div><h6>T-SHIRT</h6> <div class="col s6 white">$ 13,99</div><a href="#" class="delete-cart" id="'+idx+'"><i class="small material-icons">delete</i></a></div>')
  window.setTimeout(function() {
		$(".info-cart").addClass("show");
		window.setTimeout(function(){
			$(".button-collapse").trigger("click");
			window.setTimeout(function(){
				$("img.cart-tmb").addClass("move");
			},800);
		}, 1000);
	}, 1000);
  removeCart();
  checkCart();
});

$("#cart").click(function(){
  $(".button-collapse").trigger("click");
});

function checkCart(){
  var total = $(".row-cart").length;
  $(".info-cart a.btn-floating.btn-large.waves-effect.waves-light.red").text("");
  $(".info-cart a.btn-floating.btn-large.waves-effect.waves-light.red").append(total);
}


function removeCart(){
  $(".row-cart a.delete-cart").each(function(i){
    $(this).click(function(){
       //alert($(this).attr("id"));
       $('#'+$(this).attr("id")).fadeOut().remove();
       checkCart();
    });
  });

}



$("#close").click(function() {
  $('.button-collapse').sideNav('hide');
  $("#show-all").trigger("click");
});

$(".nw").click(function() {
  $('.button-collapse').sideNav('hide');
  //$("#show-all").trigger("click");
});

window.setTimeout(function(){
  showImages();
  addcartBtn();
  zoomtBtn();
  
  $(".link-img").attr('href','#detail');
  $(".product img").click(function(){
      // alert();
      $("#img-large").attr("src",$(this).attr("src"));
      $(".buy").attr("ng",$(this).attr("src"));
      $(".info-cart").removeClass("show");
  });
  $('a.smoothScroll.link-img').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
  
  
},4000);



function showImages(){
  $(".col.s12.m6.l3 img").each(function(index) {
    var times = (index*100);
    setTimeout(function(){ $(".col.s12.m6.l3 img").eq(index).addClass("showit"); }, times);
  });
}

function addcartBtn(){
    $(".add a").each(function(i){
      $(this).click(function(){
        $("#img-large").attr("src",$(this).attr("data-photo"));
        $(".buy").attr("ng",$(this).attr("data-photo"));
        $(".info-cart").removeClass("show");
        $("a.smoothScroll.link-img").eq(i).trigger("click");
      });
    });
}


function zoomtBtn(){
    $(".add a").each(function(i){
      $(this).mouseover(function(){
        $(".product img").eq(i).addClass('zoom');
      });
      $(this).mouseout(function(){
        $(".product img").eq(i).removeClass('zoom');
      });
    });
}
