$(window).scroll(function(){ 
    if ($(this).scrollTop() > 250) { 
        $('#scroll').fadeIn(); 
    } 
    else { 
        $('#scroll').fadeOut(); 
    } 
}); 

$(document).ready(function(){ 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    });
    $(".main-button").click(function() {
	    $('html, body').animate({ scrollTop: $(".about-section").offset().top }, 1000);
	    return false;
	});
	$(".about-button").click(function() {
	    $('html, body').animate({ scrollTop: $(".about-section").offset().top }, 1000);
	    return false;
	});
	$(".portfolio-button").click(function() {
	    $('html, body').animate({ scrollTop: $(".portfolio-section").offset().top }, 1000);
	    return false;
	});
	$(".contact-button").click(function() {
	    $('html, body').animate({ scrollTop: $(".contact-section").offset().top }, 1000);
	    return false;
	});
    $('.navbar-nav>li>a').click(function(){
        if($(window).width() < 768){
            $('.navbar-collapse').css('height', 0);
        }
        $('.navbar-collapse').collapse('hide');
    });
});

$(document).ready(function(){
	var i = 0;
	var txt = "I'm a full stack web developer.";
	function typeWriter() {
  		if (i < txt.length) {
    		document.getElementById("designation").innerHTML += txt.charAt(i);
    		i++;
    		setTimeout(typeWriter, 100);
  		}
	}
	typeWriter();
});

$(document).ready(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){
        $('.fil-cat.active').removeClass('active');
        $(this).addClass('active');
        selectedClass = $(this).attr("data-rel"); 
        $("#workproject").fadeTo(100, 0.1);
        $("#workproject .tile").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('scale-anm');
            $("#workproject").fadeTo(300, 1);
        }, 300);
    });
});

$(document).ready(function() {
	var delay = 500;
	$(".progress-bar").each(function(i){
    	$(this).delay( delay ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );
	});
});

function openModal(tag, count, description, link){
    $(".modal .modal-heading").html($("#"+tag+"_heading").text());
    $(".modal .modal-tagline").html($("#"+tag+"_tagline").text());
    $(".carousel-inner").append('<div class="carousel-item active"><img src="img/'+tag+'/1.png" alt="" class="w-100 border"></div>');
    for(i=2; i<=count; i++){
        $(".carousel-inner").append('<div class="carousel-item"><img src="img/'+tag+'/'+i+'.png" alt="" class="w-100 border"></div>');
    }
    $(".modal .modal-description").html(description);
    if(link == null){
        $(".modal .modal-link").hide();
    }
    else{
        $(".modal .modal-link").attr('href', link);    
    }
    if(count === 1) {
        $(".carousel-control-prev").hide();
        $(".carousel-control-next").hide();
    }
    $("#workModal").modal({
        backdrop: 'static',
        keyboard: false
    });
}

function closeModal(){
    $(".carousel-inner").empty();
    $(".modal .modal-link").show();
    $(".carousel-control-prev").show();
    $(".carousel-control-next").show();
    $("#workModal").modal('hide');
}

function animateBars(item) {
    item.classList.toggle("change");
}

window.onscroll = function() {
    scrollIndicator();
};

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicatorBar").style.width = scrolled + "%";
}