const urls = [
    "https://www.jsperafico.me",
    "https://www.linkedin.com/in/jonathanpintosperafico/",
    "https://github.com/jsperafico",
    "mailto:jonathanpsperafico@hotmail.com"
];

function openCurriculum() {
    window.open("curriculum.html", '_self').focus();
}

window.onload = function(e) {
    var socials = document.querySelectorAll("#business-card .back aside ul li");
    for (let index = 0; index < socials.length; index++) {
        const element = socials[index];
        element.addEventListener("click", function(e) {
            e.preventDefault();
            window.open(urls[index], '_blank').focus();
        });
    }

    var article = document.querySelector("article");
    article.addEventListener('dblclick', () => openCurriculum());

    // Handle double-tap
    let lastTapTime = 0;
    article.addEventListener('touchstart', (e) => {
        const currentTime = new Date().getTime();
        const tapInterval = currentTime - lastTapTime;
        if (tapInterval < 300 && tapInterval > 0) {
            e.preventDefault();
            openCurriculum();
        }
        lastTapTime = currentTime;
    });
}