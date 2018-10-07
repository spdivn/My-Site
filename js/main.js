$(function () {
    updateResize();
    const templateImg = (data) => `url("${data}")`;
    const templateP = (data) => `<p>${data}</p>`;

    //Fetch images form json
    $.ajax('/app/json/image.json')
        .done(function (items) {
            for (let index = 0; index < items.images.length - 1; index++) {
                let parallax = $('<div>');
                parallax.addClass('parallax');
                let space = $('<div>');
                space.addClass('whiteSpace');
                $(space).insertAfter('.marginTop');
                $(parallax).insertAfter('.marginTop');
            }

            const $parallaxDiv = $('.parallax');
            $parallaxDiv.each(index => {
                $parallaxDiv.eq(index).css('background-image', templateImg(items.images[index].url));
            });

            const $parallaxP = $('.whiteSpace');
            $parallaxP.each(index => {
                $parallaxP.eq(index).html(templateP(items.images[index].quotes));
            });
        });

    //When resize window
    $(window).resize(function () {
        updateResize();
    });

    //When click on down arrow
    $('#downArrow').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $('.cover').outerHeight() + 4
        }, 1000);
    });

    //Update Resize margin top for first whitespace
    function updateResize() {
        let heightCover = $('.cover').outerHeight() + 4;
        $('.marginTop').css('margin-top', heightCover)
    }
});