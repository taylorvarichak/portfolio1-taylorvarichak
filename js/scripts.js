$(".nav-toggle-button").on("click", function () {
    const nav = $("nav");
    if (nav.hasClass("opened")) {
        nav.removeClass("opened")
    } else {
        nav.addClass("opened")
    }
})