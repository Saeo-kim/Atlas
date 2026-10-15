$("#joinBtn").click(function () {
    $.ajax({
        url: "/register",
        type: "POST",
        data: {
            id: $("#id").val(),
            pw: $("#pw").val(),
            email: $("#email").val()
        },
        success: function (res) {
            alert("회원가입 완료");
            location.href = "/pages/login.html";
        }
    });
});