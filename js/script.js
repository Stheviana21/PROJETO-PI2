document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('.accordion-icon');

        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-icon').textContent = "+";
            }
        });

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }
    });
});