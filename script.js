// script.js
document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.getElementById("scrollArrow");

    scrollArrow.addEventListener("click", function () {
        scrollToBottom();
    });

    function scrollToBottom() {
        const body = document.body;
        const html = document.documentElement;

        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );

        window.scrollTo({
            top: height,
            behavior: "smooth"
        });

        
        scrollArrow.removeEventListener("click", scrollToBottom);
        scrollArrow.addEventListener("click", scrollToTop);
        scrollArrow.style.transform = "rotate(180deg)";
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

       
        scrollArrow.removeEventListener("click", scrollToTop);
        scrollArrow.addEventListener("click", scrollToBottom);
        scrollArrow.style.transform = "rotate(360deg)";
    }
});
