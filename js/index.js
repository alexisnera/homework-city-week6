
// Set function to fire when user selects an option/value
function selectCity(cityLoc){

	// Prevent default function from running
	event.preventDefault();

	// Assign a variable to get value of #city-type
	var city = jQuery('#city-type').val();

	// Apply conditionals
	// Change html class using .attr()
		if (city == 'ATX') {
			jQuery('body').attr('class','austin');
		}	else if	(city == 'LA') {
			jQuery('body').attr('class','la');
		}	else if (city == 'NYC') {
			jQuery('body').attr('class','nyc');
		}	else if (city == 'SF') {
			jQuery('body').attr('class','sf');
		}	else if (city == 'SYD') {
			jQuery('body').attr('class','sydney');
		}	else if (city == 'ASG') {
			jQuery('body').attr('class','asgard');
		}	else if (city == 'QC') {
			jQuery('body').attr('class','quezon');
		}	else {
			jQuery('body').attr('class','default');
		}

}

// Main
jQuery(document).ready(function(){

	// Indicate function to get starting value .val() of select tag with id #city-type
	selectCity(jQuery("#city-type").val());

	// Create an array with the following values: NYC, SF, LA, ATX, SYD
	var cityCode = (['ATX', 'LA', 'NYC', 'SF', 'SYD', 'ASG', "QC"]);
	// Create an array wfor adding text content in option tags
	var cityNames = (['Austin', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney', 'Asgard', 'Quezon City']);
	// Use a for loop to add values to the <select> menu
	for(var x=0; x<cityCode.length; x++) {
		jQuery('#city-type').append('<option value="' + cityCode[x] + '">' + cityNames[x] + '</option>');
	}

	// Value will update when user selects an option - use .change()
	jQuery('#city-type').change(function(){
		// Create variable containing value of #city-type
		var cityLoc = jQuery(this).val();
		// Create function that will "hold" variable containing value of user selected option
		selectCity(cityLoc);
	})
	
})