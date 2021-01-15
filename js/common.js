// カレント表示
$(function () {
    //上部からどれぐらいの位置で変化させるか
    let set = 200;
    let boxTop = new Array;
    let current = -1;
    //.nowがある要素がカレント表示の対象になる
    $('.now').each(function (i) {
        boxTop[i] = $(this).offset().top;
    });
    //最初の要素(TOP)にclass="now"をつける
    changeBox(0);
    //スクロールした時の処理
    $(window).scroll(function () {
        scrollPosition = $(window).scrollTop();
        for (let i = boxTop.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() > boxTop[i] - set) {
                changeBox(i);
                break;
            }
        };
    });
    //gnavの設定
    function changeBox(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;
            //.currentを追加・削除したい要素を指定
            $('.gnav-item a').removeClass('current');

            //位置による個別処理
            // TOP
            if (current == 0) {
                $('#top-link-js').addClass('current');
                // ABOUT ME
            } else if (current == 1) {
                $('#about-link-js').addClass('current');
            } else if (current == 2) {
                // PORTFOLIO
                $('#portfolio-link-js').addClass('current');
            }
            else if (current == 3) {
                // SKILLS
                $('#skills-link-js').addClass('current');
            }
            else if (current == 4) {
                // CONTACT
                $('#contact-link-js').addClass('current');
            }

        }
    };
});

// ページ内リンクスムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let adjust = -100;
        let speed = 500;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        let header = $('.header-inner').height();
        //ヘッダーの高さを引く
        let position = target.offset().top - header;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

// TOPへもどるボタン
$(function () {
    var pagetop = $('#pagetop');
    // ボタン非表示
    pagetop.hide();
    // 200px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
