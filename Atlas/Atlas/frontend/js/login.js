$("#loginBtn").click(function () {

    let id = $("#id").val();
    let pw = $("#pw").val();

    $.ajax({
        url: "/login",
        type: "POST",
        data: {
            id: id,
            pw: pw
        },
        success: function (res) {

            if (res === "ok") {
                alert("로그인 성공");
                location.href = "/pages/index.html";
            } else {
                alert("로그인 실패");
            }

        }
    });

});