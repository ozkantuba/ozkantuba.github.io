
		var clicks;

		$(document).ready(function(){

		$( "input" ).each(function() {
			var name = this.id;
			var distance = ("#" + name + "c")
			$(distance).css({"display": "none"});

		});

		$( "input" ).each(function() {

			$( this ).click(function(){

				   var name = this.id;
				   console.log(name);
		  		   var id = "#" + name;
		           var label = ("label[for=" + name +"]");
		  		   var distance = ("#" + name + "c");
		    	   clicks = $(this).data('clicks');

		    	if(clicks){

		    		 console.log("hide" + distance);
		    		 $(distance).css({"display": "none"});
		         $(label).css({"color": "#000"});
		    	
		    	} else{

		    		 console.log("show" + distance);
		    		 $(distance).css({"display": "block"});
		         $(label).css({"color": "#2196F3"});

		    	}

		    $(this).data("clicks", !clicks);
		      
		    });

		});


			$ ("button").click(function(){

				$('input[type="checkbox"]:checked').prop('checked',false);
		    	
		    	$ ("input").removeData();
		    	console.log("map is cleared");

				$( "input" ).each(function() {

					   var name = this.id;
		         var label = ("label[for=" + name +"]");
		  			 var distance = ("#" + name + "c");
		    		 $(distance).css({"display": "none"});
		         $(label).css({"color": "#000"});

				});

			});

// for clicking desks
			$(".peoplelist").each(function() {
			   
			    $(this).click(function(){

			    $ (".peoplelist").css({"stroke": "#2E68B0", "stroke-width":"0.5", "fill-opacity": "0.8"});

			    console.log("this clicked");
			    var name = this.id;
			    var personName = '#' + name;
			    var personCard = '#' + name + 'card';

			    $(personCard).css({"display": "none"});
			    clicks = $(this).data('clicks');

				if(clicks){

					$(personName).css({"stroke": "#2E68B0", "stroke-width":"0.5", "fill-opacity": "0.8"});
					$(personCard).css({"display": "none"});
				
				} else {

					$(personName).css({"stroke": "#9CC2F2", "stroke-opacity": "0.8", "stroke-width":"16", "fill-opacity": "1"});
					$(personCard).css({"display": "block"});
					console.log(personCard);
				}

				$(this).data("clicks", !clicks);

			    });
				
		  });

		});
