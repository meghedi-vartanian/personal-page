const sections = document.querySelectorAll('.reveal');

function onScroll() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
            sec.classList.add('active');
        }
    });
}

window.addEventListener('scroll', onScroll);
onScroll();
