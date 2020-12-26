let checked = false;
function typing() {
    if (checked === false) {
        ityped.init(document.querySelector("#ityped"), {
            strings: ['KinKi Kids「O album」2020.12.23 On Sale！'],
            startDelay: 500,
            typeSpeed: 200,
            backSpeed: 100,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });
    }
    checked = true;
}