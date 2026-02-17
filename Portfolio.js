document.addEventListener('DOMContentLoaded', () => {
    console.log('Miquéias - FullStack Developer Portfólio Ativo');

    const links = document.querySelectorAll('.contact-info a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#34d399';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '#10b981';
        });
    });
});
