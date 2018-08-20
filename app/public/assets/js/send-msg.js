//Survey submit form function
        $("#send-btn").on("click", function() {
  
//Validate form data
        // function validateForm() {
		//   var isValid = true;
		//   $('.form-control').each(function() {
		//     if ( $(this).val() === '' )
		//         isValid = false;
		//   });
		//   $('.chosen-select').each(function() {
		//   	if( $(this).val() === "")
		//   		isValid = false
		//   })
		//   return isValid;
		// }
//Survey answer data
            // if (validateForm() == true) {
                var fanName = $("#name").val();
                var fanEmail = $("#mail").val();
                var fanMessage = $("#msg").val();
            
                var messageObj = {
                    fanName: fanName,
                    fanEmail: fanEmail,
                    fanMessage: fanMessage
                }

                console.log(messageObj);


//Survey answer integer conversion
                // var newfanMessage = JSON.parse("[" + fanMessage + "]");
                
//Matched friend data for modal
        //         var userData = {
        //             name: $("#name").val(),
        //             photo: $("#photo").val(),
        //             scores: newfanMessage
        //         };
        //         var currentURL = window.location.origin;
        //         $.post(currentURL + "/api/friends", userData, function(data) {
        //             $("#matchName").text(data.name);
        //             $('#matchImg').attr("src", currentURL + data.photo);
        //             $("#resultsModal").modal('toggle');
        //         });
        //     } 
        //     else {
        //         alert("Please fill out all fields before submitting!");
        //     }
        //     return false;
        });