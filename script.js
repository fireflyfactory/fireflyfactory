document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById('header');

    if (!header) {
        console.warn("Header not found on this page.");
        return;
    }

    let isCollapsed = false;

    const updateHeaderState = () => {
        const scrollY = window.scrollY;

        if (scrollY > 120 && !isCollapsed) {
            header.classList.add('collapsed');
            header.classList.remove('expanded');
            isCollapsed = true;
        } else if (scrollY <= 50 && isCollapsed) {
            header.classList.add('expanded');
            header.classList.remove('collapsed');
            isCollapsed = false;
        }
    };

    window.addEventListener('scroll', updateHeaderState);
    updateHeaderState(); // Ensure correct state on page load
});
