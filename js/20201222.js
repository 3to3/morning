let checked = false;
function typing() {
    if (checked === false) {
        ityped.init(document.querySelector("#ityped"), {
            strings: ['よいお年を！','来年もよろしくお願いします！'],
            startDelay: 500,
            typeSpeed: 200,
            backSpeed: 100,
            loop: false,
            showCursor: true,
            cursorChar: "|",
        });
    }
    checked = true;
}
