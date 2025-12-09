$(document).ready(function () {
    $("#regForm").submit(function () {
        if ($("#fullname").val() === "" ||
            $("#email").val() === "" ||
            $("#phone").val() === "" ||
            $("#gender").val() === "" ||
            $("#course").val() === "" ||
            $("#address").val() === "") 
        {
            alert("All fields are required!");
            return false;
        }
        return true; // submit form
    });
});
