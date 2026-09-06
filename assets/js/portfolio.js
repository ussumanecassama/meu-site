const portfolioItems = [
    // Flyers (todos configurados com extensão .png)
    {
        id: 1,
        title: "Flyer Escola Adventista Betel - Flefé",
        category: "flyers",
        image: "assets/images/portfolio/flyer-betel.png"
    },
    {
        id: 2,
        title: "Flyer Início de Matrículas",
        category: "flyers",
        image: "assets/images/portfolio/Imagem2.png"
    },
    {
        id: 3,
        title: "Flyer Matrículas Abertas",
        category: "flyers",
        image: "assets/images/portfolio/Imagem13.png"
    },
    {
        id: 4,
        title: "Flyer Escolar Pré-Escolar ao 4º Ano",
        category: "flyers",
        image: "assets/images/portfolio/Imagem14.png"
    },

    // Logótipos
    {
        id: 5,
        title: "Logótipo Estúdio Mario Djavanha",
        category: "logos",
        image: "assets/images/portfolio/Imagem4.png"
    },
    {
        id: 6,
        title: "Logótipo Tocha Acesa",
        category: "logos",
        image: "assets/images/portfolio/Imagem11.png"
    },
    {
        id: 7,
        title: "Logótipo Desbravadores Clube Águia",
        category: "logos",
        image: "assets/images/portfolio/Imagem12.png"
    },
    {
        id: 8,
        title: "Logótipo Kulkadur Agência",
        category: "logos",
        image: "assets/images/portfolio/Imagem15.png"
    },

    // Camisolas
    {
        id: 9,
        title: "Design de Camisola Polo Tocha",
        category: "camisolas",
        image: "assets/images/portfolio/Imagem6.png"
    },
    {
        id: 10,
        title: "Design de T-Shirt Branca Tocha",
        category: "camisolas",
        image: "assets/images/portfolio/Imagem7.png"
    },
    {
        id: 11,
        title: "Design de Camisola Esportiva Azul e Vermelha",
        category: "camisolas",
        image: "assets/images/portfolio/Imagem8.png"
    },
    {
        id: 12,
        title: "Design de Camisola Esportiva Amarela e Vermelha",
        category: "camisolas",
        image: "assets/images/portfolio/Imagem9.png"
    },
    {
        id: 13,
        title: "Design de T-Shirt Preta Tocha",
        category: "camisolas",
        image: "assets/images/portfolio/Imagem10.png"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderPortfolio(filter = 'all') {
        if (!grid) return;
        grid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filter);

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'portfolio-card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="portfolio-img" onerror="tratarErroImagem(this)">
                <div class="portfolio-info">
                    <h4>${item.title}</h4>
                </div>
            `;
            
            // Evento para abrir o modal de zoom na imagem
            card.addEventListener('click', () => abrirModal(item.image));
            grid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });

    renderPortfolio();
});

// Tratamento dinâmico para extensão de imagem (tenta .jpg ou .JPG se .png falhar)
function tratarErroImagem(img) {
    if (img.src.endsWith('.png')) {
        img.src = img.src.replace('.png', '.jpg');
    } else if (img.src.endsWith('.jpg')) {
        img.src = img.src.replace('.jpg', '.JPG');
    }
}

// Modal Zoom
function abrirModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = src;
    }
}

const modalClose = document.querySelector('.modal-close');
if (modalClose) {
    modalClose.addEventListener('click', () => {
        const modal = document.getElementById('imageModal');
        if (modal) modal.style.display = "none";
    });
}