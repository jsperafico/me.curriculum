const urls = [
    "https://jsperafico.me",
    "https://www.linkedin.com/in/jonathanpintosperafico/",
    "https://github.com/jsperafico",
    "mailto:jonathanpsperafico@hotmail.com"
];

function openBusinessCard() {
    window.open("index.html", '_self').focus();
}

window.onload = function(e) {
    var socials = document.querySelectorAll("ul.social li");
    for (let index = 0; index < socials.length; index++) {
        const element = socials[index];
        element.addEventListener("click", function(e) {
            e.preventDefault();
            window.open(urls[index], '_blank').focus();
        });
    }

    var article = document.querySelector("article");
    article.addEventListener('dblclick', () => openBusinessCard());

    // Handle double-tap
    let lastTapTime = 0;
    article.addEventListener('touchstart', (e) => {
        const currentTime = new Date().getTime();
        const tapInterval = currentTime - lastTapTime;
        if (tapInterval < 300 && tapInterval > 0) {
            e.preventDefault();
            openBusinessCard();
        }
        lastTapTime = currentTime;
    });
}