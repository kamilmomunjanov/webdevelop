

$(document).ready(function () {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active')
            .eq($(this).index()).addClass('active');
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        dotsContainer: '#carousel-custom-dots',
        loop: true,
        margin: 30,
        autoplay: true
    });
// Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel',[$(this).index(), 300]);
    })

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.878982, 74.595075],
            zoom: 17
        });
        var myIcon = DG.icon({
            iconUrl: 'http://simpleicon.com/wp-content/uploads/map-marker-1-256x256.png',
            iconSize: [38, 38],

        });
        DG.marker([42.878982, 74.595075], {icon: myIcon}).addTo(map) .bindPopup('Вы кликнули по мне!');
    });

});

