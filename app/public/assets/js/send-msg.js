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

    //Validate form data
    function validateForm() {
        var isValid = true;
        $('.form-control').each(function () {
            if ($(this).val() === '')
                isValid = false;
        });

        return isValid;
    }
    if (validateForm() == true) {
        $.ajax({
            url: "/sendFanMsg",
            data: messageObj,
            type: "POST"
        })
    } else {
        alert("Please fill out all fields before submitting!");
    }
    return false;
});