
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


		});
