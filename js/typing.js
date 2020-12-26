let checked = false;
function typing() {
    if (checked === false) {
        ityped.init(document.querySelector("#ityped"), {
            strings: ['2021年もよろしくお願いします！','よいお年を！'],
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
