$(document).on("mouseenter", ".navbar-brand", function(e){
	e.preventDefault();
	var $logo = $(this).find("img");
	$logo.attr("src", "logoblack2.png");
	$(this).on("mouseleave", function(e){
		e.preventDefault();
		$logo.attr("src", "logowhite2.png");
	});
});

$(window).resize(function(){
	var width = Math.max( $(window).width(), window.innerWidth);
	var $textover = $(".showcase").find(".textover");
	if(width <= 991){
		$textover.show();
		$(this).off("mouseleave");
	}else{
		$textover.hide();
	}
});

$(document).on("mouseenter", ".showcase", function(e){
	e.preventDefault();
	var $textover = $(this).find(".textover");
	var width = Math.max( $(window).width(), window.innerWidth);
	if(width >= 992){
		$textover.fadeIn();
		$(this).on("mouseleave", function(e){
			e.preventDefault();
			$textover.fadeOut();
		});
	}else{
		$textover.show();
		$(this).off("mouseleave");
	}
});

$(document).on("mouseenter", "#lastword", function(e){
	e.preventDefault();
	var $siteinfo = $(this).find("#siteinfo");
	$siteinfo.fadeIn();
	$(this).on("mouseleave", function(e){
		console.log("mouse leaving showcase");
		e.preventDefault();
		$siteinfo.fadeOut();
	});
});