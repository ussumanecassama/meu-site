document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar o menu automaticamente ao clicar em qualquer link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// Função para solicitar orçamento pelo WhatsApp oficial da Kulkadur
function solicitarOrcamento(servico) {
    const numeroWhatsApp = "245955858266";
    const mensagem = encodeURIComponent(`Olá! Vim pelo site da Kulkadur e gostaria de solicitar um orçamento para o serviço: *${servico}*.`);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
}