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

new TypeIt('.typed', {
    strings: 'This is my string!',
    speed: 150,
    cursor: false,
    loop: true
});