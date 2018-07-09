window.sr = ScrollReveal({
    reset: true
});
sr.reveal('#nav-arrow', {
    duration: 1500,
});
sr.reveal('nav ul', {
    duration: 1500,
});
sr.reveal('#header-content div:nth-of-type(1)', {
    duration: 1500,
});
sr.reveal('#header-content div:nth-of-type(2)', {
    duration: 1500,
});
sr.reveal('#about img', {
    origin: 'left',
    duration: 1500
});
sr.reveal('#about div:nth-of-type(2)', {
    origin: 'right',
    duration: 1500  
});
sr.reveal('#work div.small-4', {
    duration: 1500
});
sr.reveal('#work div.small-8', {
    duration: 1500
});
sr.reveal('.info-me', {
    origin: 'right',
    duration: 1500
});
sr.reveal('.img-me img', {
    origin: 'left',
    duration: 1500
});
sr.reveal('#skills div.small-4', {
    duration: 1500
});
sr.reveal('#skills div.small-8', {
    duration: 1500
});

new TypeIt('.typed', {
    strings: 'This is my string!',
    speed: 150,
    cursor: false,
    loop: true
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 950, 'swing', function () {
        window.location.hash = target;
    });
});

var card = document.querySelectorAll('.box-skill');
card.forEach(card => card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
}))