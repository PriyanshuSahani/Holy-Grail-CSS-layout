function toggle_nav() {
    const ogrid = document.querySelector('.outer-grid');
    ogrid.classList.toggle('outer-grid-expanded');

    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-hidden');
}