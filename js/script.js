(function(){
	$('.menu1').on('click', '.btn1', function(evt){
		
		var target = $(evt.target),
			url    = target.data('url');

			

			$(".active.btn1").removeClass("active");
			target.addClass("active");

			
		$.get(url, function(data){
			
			$(".slide-container").html(data);

		});

		evt.preventDefault();

		if(url=="productos.htm")
		{
			$(".productos-submenu").css("display","block");
		}
		else
		{
			$(".productos-submenu").css("display","none");
		}

	});


})();