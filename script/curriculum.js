const urls = [
    "https://www.jsperafico.me",
    "https://www.linkedin.com/in/jonathanpintosperafico/",
    "https://github.com/jsperafico",
    "mailto:jonathanpsperafico@hotmail.com"
];

window.onload = function(e) {
    var socials = document.querySelectorAll("ul.social li");
    for (let index = 0; index < socials.length; index++) {
        const element = socials[index];
        element.addEventListener("click", function(e) {
            e.preventDefault();
            window.open(urls[index], '_blank').focus();
        });
    }

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
    {
        var article = document.querySelector("article:not(.apple)");
        var background = document.querySelector("div.background");
        var apple = document.querySelector("article.apple");
        article.classList.add("hidden");
        background.classList.add("hidden");
        apple.classList.remove("hidden");
    }
}