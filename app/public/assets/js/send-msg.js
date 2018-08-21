//Survey submit form function
$("#send-btn").on("click", function () {
    var fanName = $("#name").val();
    var fanEmail = $("#mail").val();
    var fanMessage = $("#msg").val();

    var messageObj = {
        fanName: fanName,
        fanEmail: fanEmail,
        fanMessage: fanMessage
    }
    
    // Clears form inputs after submit
    setTimeout(function () {
        $("#name").val("");
        $("#mail").val("");
        $("#msg").val("");
        $("#send-btn").html("Sent!");
    }, 250);

    //Validate form data
    function validateForm() {
        var isValid = true;
        $('.form-control').each(function () {
            if ($(this).val() === '')
                isValid = false;
        });
        return isValid;
    }

    // AJAX post to server for nodemailer
    if (validateForm() == true) {
        $.ajax({
            url: "/sendFanMsg",
            data: messageObj,
            type: "POST",
            success: function(output) {
                alert(output);},
           error: function (request, status, error) {
               alert(request.responseText);}
        });
    }
    else {
        alert("Please fill out all fields before submitting!");
    }
    return false;
});