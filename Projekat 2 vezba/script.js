let navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function() {
    let navMenu = document.getElementById('nav-menu-container');
    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'block'
    } else {
        navMenu.style.display = 'none';
    }
})