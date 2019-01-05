/* global $ */
/* global $body */
$(function(){
    fade('.side-menu');
});

function fade(elm){
    var $fade = $(elm),
        $body = $('body');
    // .toggleWrapを非表示にしておく
    $fade.addClass('hide');

    // #toggleがクリックされた時に、.hideの付け外しで .toggleWrapの表示・非表示を切り替え
    // .addClass('animation');でアニメーションのCSSを適応
    $('#toggle').on('click', function(){
        $fade.toggleClass('hide').addClass('animation');
        $('.trigger').toggleClass('active');

        // スクロールの制御
        // .hideを持っている状態はメニューが閉じている状態で、このときは.no-scrollは不要
        if ($fade.hasClass('hide')) {
            $body.removeClass('no-scroll').off('.noScroll');
        } else {
            // メニューが開いている時に、bodyに.no-scrollを追加してスクロールさせない
            $body.addClass('no-scroll').on('touchmove.noScroll', function(e){
                e.preventDefault();
            });
        }
    });
}
$body.on('touchmove.noScroll', function(e){
    e.preventDefault();
});
