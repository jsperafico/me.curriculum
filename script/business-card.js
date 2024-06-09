const urls = [
    "https://www.jsperafico.me",
    "https://www.linkedin.com/in/jonathanpintosperafico/",
    "https://github.com/jsperafico",
    "mailto:jonathanpsperafico@hotmail.com"
];

window.onload = function(e) {
    var socials = document.querySelectorAll("#business-card .back aside ul li");
    for (let index = 0; index < socials.length; index++) {
        const element = socials[index];
        element.addEventListener("click", function(e) {
            e.preventDefault();
            window.open(urls[index], '_blank').focus();
        });
    }
}