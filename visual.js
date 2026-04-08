// Aguarda que o DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

    // Scroll Suave para os links de navegação
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adiciona uma classe de visibilidade conforme o utilizador desce a página
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Estado inicial para a animação
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Efeito de Hover Dinâmico nos itens da lista de tecnologias
    const techItems = document.querySelectorAll('#tecnologias li');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = '#007bff'; 
            item.style.fontWeight = 'bold';
        });
        item.addEventListener('mouseleave', () => {
            item.style.color = '';
            item.style.fontWeight = '';
        });
    });

});