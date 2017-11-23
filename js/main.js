var clickDisabled = false;
var headerHeight = $("header").innerHeight();
var footerHeight = $("footer").innerHeight();
var screenHeight = screen.height;
var mainHeight = $("main").innerHeight();
$().ready(function(){
	//search tab buttons click
	$(".carsearch .tabs button").click(function(){
		//alert($(this).index());
		$(".activetab").removeClass("activetab").addClass("inactive");
		$(this).removeClass("inactive").addClass("activetab");
		$(".activesrchform").removeClass("activesrchform");
		$($(".srchform")[$(this).index()]).addClass("activesrchform");
	});

	//news tab button click
	$(".newsbtns div button").click(function(){
		$(".newsbtns .active").removeClass("active");
		$(this).addClass("active");
		$(".newcars section").hide();
		$($(".newcars section")[$(this).index()]).fadeIn();
	});

	//Vip slider
	//previous slide
	$(".vip .next").click(function(){
		if (clickDisabled)
         return;

		console.log(parseInt($($(".vipslider article")[0]).css('left')));
		if(parseInt($($(".vipslider article")[0]).css('left')) == -((($(".vipslider article").size() - 5) * 220)))
		{
			//do nothing
		}
		else
		{
			$(".vipslider article").each(function(){
			$(this).animate({left: (parseInt($(this).css('left')) - 220) + "px"});

			});
		}

		clickDisabled = true;
     	setTimeout(function(){clickDisabled = false;}, 900);
	});
	//next slide
	$(".vip .prev").click(function(){
		if (clickDisabled)
         return;

		if(parseInt($($(".vipslider article")[0]).css('left')) == 0)
		{
			//do nothing
		}
		else
		{
			$(".vipslider article").each(function(){
			$(this).animate({left: (parseInt($(this).css('left')) + 220) + "px"});
			});
		}

		clickDisabled = true;
     	setTimeout(function(){clickDisabled = false;}, 900);
	});

var counter = 0;
var scrollCounter = 130;
//show scroller gradient
if($(".innerslider .gallery img").size() > 4)
{
	$(".bottomgrad").show();
}

$(".gallery .mda").scroll(function(){
	if($(".gallery img").size() > 4 && $(this).scrollTop() > 0){
		$(".topgrad").show();
	}
	else
	{
		$(".topgrad").hide();
	}

	if($(".mda img").size() > 4 && $(this).scrollTop() < ($(".mda img").size()*130)-(4*130)){
		$(".bottomgrad").show();
	}
	else
	{
		$(".bottomgrad").hide();
	}
});
//initialize gallery numeration
$(".innerslider .gallery .numeration").text("1/"+$("#slider img").size());

	// inner page slider
	//slide left
	$("#slider > .prev").click(function(){
		if($($("#slider img")[0]).css('display') == 'inline')
		{
			counter = $("#slider img").size()-1;
			$($("#slider img")[0]).hide();
			$($("#slider img")[counter]).fadeIn();
			//removing first img class active
			$($(".innerslider .gallery div > div")[0]).removeClass("active");
			$($(".innerslider .gallery div > div")[counter]).addClass("active");


			//remove current image numeration
			$(".mda").find("span").remove();
			//create span element
			var span = document.createElement("span");
			span.setAttribute("class","numeration");
			span.textContent = (counter + 1) + "/" + $(".mda img").size();
			//add numeration next img
			$($(".innerslider .gallery div > div")[counter]).append(span);

			//scroll gallery side
			scrollCounter*=counter+1;
			//$(".mda").scrollTop(scrollCounter);
			$(".mda").animate({scrollTop: scrollCounter});
		}
		else
		{
			var span = document.createElement("span");
			span.setAttribute("class","numeration");
			span.textContent = counter + "/" + $(".mda img").size();


			$(".mda").find("span").remove();
			//alert($($(".mda div")[counter]).find("span"));
			$($("#slider img")[counter]).hide();
			$($(".innerslider .gallery div > div")[counter]).removeClass("active");
			counter--;
			$($("#slider img")[counter]).fadeIn();
			$($(".innerslider .gallery div > div")[counter]).addClass("active");
			$($(".mda div")[counter]).append(span);

			//scroll
			//alert(counter);
			if(counter+1 == (Math.ceil(counter/4) * 4))
			{
				//$(".gallery .mda").scrollTop($(".gallery .mda").scrollTop() - (130*4));
				$(".mda").animate({scrollTop:$(".gallery .mda").scrollTop() - (130*4)});
			}
		}
	});
	//slide right
	$("#slider > .next").click(function(){	
		if($($("#slider img")[$("#slider img").size()-1]).css('display') == 'inline')
		{
			$($("#slider img")[$("#slider img").size()-1]).hide();
			counter = 0;
			$($("#slider img")[counter]).fadeIn();

			//removing last img class active
			$($(".innerslider .gallery div > div")[$("#slider img").size()-1]).removeClass("active");
			$($(".innerslider .gallery div > div")[counter]).addClass("active");


			//remove current image numeration
			$(".mda").find("span").remove();
			//create span element
			var span = document.createElement("span");
			span.setAttribute("class","numeration");
			span.textContent = (counter + 1) + "/" + (counter + 1);
			//add numeration next img
			$($(".mda > div")[counter]).append(span);

			//$(".mda").scrollTop(0);
			$(".mda").animate({scrollTop:0});
		}
		else
		{
			//remove current numeration
			$(".mda").find("span").remove();

			$($("#slider img")[counter]).hide();
			$($(".innerslider .gallery div > div")[counter]).removeClass("active");
			counter++;
			$($("#slider img")[counter]).fadeIn();
			$($(".innerslider .gallery div > div")[counter]).addClass("active");

			//create numeration
			var span = document.createElement("span");
			span.setAttribute("class","numeration");
			span.textContent = (counter + 1) + "/" + $(".mda div").size();
			$($(".mda div")[counter]).append(span);

			//scroll
			if($(".mda img").size() > 4 && counter == Math.ceil(counter/4) * 4)
			{
				//$(".gallery .mda").scrollTop($(".gallery .mda").scrollTop() + (130*4));
				$(".mda").animate({scrollTop:$(".gallery .mda").scrollTop() + (130*4)});
			}
		}
	});



	$(".mda div").click(function(){
		//alert(counter);
		$($("#slider img")[counter]).hide();
		counter = $(this).index();
		$($("#slider img")[counter]).fadeIn();
		$(".mda div").removeClass("active");
		$(".mda").find("span").remove();

		var span = document.createElement("span");
			span.setAttribute("class","numeration");
			span.textContent = $(this).index()+1 + "/" + $(".mda div").size();

		$(this).addClass("active");
		$(this).append(span);
	});


	//validation
	$("#register").click(function(){
		if(document.getElementById("agree").checked == false)
		{
			return false;
		}
		else
		{
			$("#reg input[type='text']").each(function(){
				if($(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).next("span").css("visibility","visible");
				}
				else
				{
					$(this).css("border","1px solid green");
					$(this).next("span").css("visibility","hidden");
				}
			});
			$("#reg input[type='password']").each(function(){
				if($(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).next("span").css("visibility","visible");
				}
				else
				{
					$(this).css("border","1px solid green");
					$(this).next("span").css("visibility","hidden");
				}
			});
			if($("#fullname").val() == "" || $("#mail").val() == "" || $("#mailagain").val() == "" || $("#piradin").val() == "" || $("#address").val() == "" || $("#tell").val() == "" || $("#pass").val() == "" || $("#passagain").val() == "")
			{
				return false;
			}
			else
			{
				$("#reg").submit();
			}
		}
	});
	
	//footer position
	if((headerHeight + mainHeight) < (screenHeight - footerHeight - 80)){
		$("footer").css({'position' : 'absolute','bottom' : '1px'});
	} else {
		$("footer").css({'position' : 'relative','bottom' : '1px'});
	}

	//user page tabs
	$(".usertabs button").click(function(){

		$(".usertabs button").removeClass("active");
		$(".usertabs button").each(function(){
			console.log($(this).find("i").attr("class") + ".png");
			$(this).find("i").css("background-image","url('resources/" + $(this).find("i").attr("class") + ".png')")
		});
		$(this).find("i").css("background-image","url('resources/" + $(this).find("i").attr("class") + "-white.png')")
		$(this).addClass("active");
		$(".userpage .tab").hide();
		$($(".userpage .tab")[$(this).index()]).fadeIn();
		mainHeight = $("main").innerHeight();
		//alert(screenHeight);
		if((headerHeight + mainHeight) < (screenHeight - footerHeight - 80)){
			$("footer").css({'position' : 'absolute','bottom' : '1px'});
		} else {
			$("footer").css({'position' : 'relative','bottom' : '1px'});
		}
	});

	// vechile add tabs
	$(".additemtabs button").click(function(){
		$(".additemtabs button").removeClass("active");
		$(this).addClass("active");
		$("div.carraddform").hide();
		$($("div.carraddform")[$(this).index()]).show();
	});


	// input spinner
	$(".upspinner").click(function(){
		$(this).siblings("input").val(Number($(this).siblings("input").val()) + 1);
	});
	$(".downspinner").click(function(){
		$(this).siblings("input").val(Number($(this).siblings("input").val()) - 1);
	});

	
	//my jquery select
	$(".Gselect").click(function(){
	  $(this).find(".dropdown").toggle();
	});

	$(".Gselect .dropdown span").click(function(){
	  $(this).parent().siblings(".default").data("val",$(this).data("val"));
	  $(this).parent().siblings(".default").text($(this).text());
	});

	// file upload form
	var filecounter = 0;
var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
    if(this.files.length > 5)
      {
        alert("ფაილების მაქსიმალური ზომაა 5");
      }
     else
     {
     	//alert(this.files[0].name);
         var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
     }
	});
});


});