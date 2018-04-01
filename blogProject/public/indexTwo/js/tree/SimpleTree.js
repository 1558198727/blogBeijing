
// $( "#specialId:has(img)" ).length==0
        $(".st_tree ul ul").hide();
		$(".st_tree ul li").each(function () {

			// this.innerHTML = i ++;
			// alert($(this).children('li').length);
			if( $(this).next('ul').length > 0 ){
				$(this).addClass('folder');
				// this.innerHTML = 'dd';
                $(this).attr("show","true");
			}
		});
				// $(".st_tree ul ul").hide();
				// $(".st_tree ul li").removeClass("open");

				// $("ul ul[show='true']").show();
				// $("ul ul[show='true']").prev("li").addClass("open");

			// $("a").click(function(){ $(this).parent("li").click(); return false; });
			

			$("ul li").click(function(){

				if($(this).hasClass("open") && $(this).hasClass("folder")){
					// alert('opened');
                    $(this).next("ul").hide();
                    $(this).removeClass("open");

				}else if(!$(this).hasClass("open")&& $(this).hasClass("folder")){
                    // alert('closed');
                    $(this).addClass("open");
                    $(this).children("ul").attr("show","true");
                    $(this).next("ul").show();
				}


			});

			// this.find("ul").prev("li").addClass("folder");
			

			// this.find("li").find("a").attr("hasChild",false);
			// this.find("ul").prev("li").find("a").attr("hasChild",true);

