$(".add-cart").click(function () {

    let productId = $(this).data("id");

    $.ajax({
        url: "/cart/add",
        type: "POST",
        data: { productId: productId },
        success: function () {
            alert("Added to cart");
        }
    });

});

// 파일 맨 아래에 선언
let users = [];