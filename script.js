const produtos = [
  {
    id: 1,
    nome: "G-Shock GW-329 Preto All Black",
    descricao: "Rel\u00f3gio digital esportivo com visual all black, resistente, moderno e discreto.",
    preco: "R$ 109,90",
    cor: "#1a1a1a",
    imagem: "assets/g-shock-gw-329-preto-all-black.jpeg"
  },
  {
    id: 2,
    nome: "G-Shock GA-2100 Vermelho 40mm",
    descricao: "Modelo esportivo vermelho com mostrador preto, ideal para quem gosta de presen\u00e7a e personalidade.",
    preco: "R$ 119,90",
    cor: "#cc2222",
    imagem: "assets/g-shock-ga-2100-vermelho-40mm.jpeg"
  },
  {
    id: 3,
    nome: "G-Shock GA-2100 Azul 40mm",
    descricao: "G-Shock azul com mostrador preto, visual vibrante, moderno e urbano.",
    preco: "R$ 119,90",
    cor: "#2255cc",
    imagem: "assets/g-shock-ga-2100-azul-40mm.jpeg"
  },
  {
    id: 4,
    nome: "G-Shock GW-329 Verde",
    descricao: "Modelo digital verde com visual robusto, militar e esportivo.",
    preco: "R$ 109,90",
    cor: "#2d7a3a",
    imagem: "assets/g-shock-gw-329-verde.jpeg"
  },
  {
    id: 5,
    nome: "G-Shock GW-329 Coral",
    descricao: "Rel\u00f3gio digital esportivo na cor coral, moderno, vibrante e cheio de estilo.",
    preco: "R$ 109,90",
    cor: "#ff6b5a",
    imagem: "assets/g-shock-gw-329-coral.jpeg"
  },
  {
    id: 6,
    nome: "G-Shock GW-329 Lil\u00e1s",
    descricao: "Modelo lil\u00e1s com detalhes em violeta, visual moderno, delicado e estiloso.",
    preco: "R$ 109,90",
    cor: "#9b59b6",
    imagem: "assets/g-shock-gw-329-lilas.jpeg"
  },
  {
    id: 7,
    nome: "G-Shock GW-329 Rosa Beb\u00ea",
    descricao: "Modelo rosa beb\u00ea com mostrador azul claro, visual clean, moderno e casual.",
    preco: "R$ 109,90",
    cor: "#f8a5c2",
    imagem: "assets/g-shock-gw-329-rosa-bebe.jpeg"
  }
];

const WHATSAPP_NUM = "5585997754849";
const WHATSAPP_ICON = '<svg class="whatsappIcon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.16 1.6 5.97L.04 24l6.24-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.18-3.51-8.42ZM12.09 21.82h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7c0 5.46-4.45 9.9-9.96 9.9Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>';

function gerarLinkWhatsApp(mensagem) {
  return "https://wa.me/" + WHATSAPP_NUM + "?text=" + encodeURIComponent(mensagem);
}

function renderizarProdutos() {
  const grid = document.getElementById("produtosGrid");
  grid.innerHTML = "";

  produtos.forEach(function(produto) {
    var card = document.createElement("div");
    card.className = "produtoCard";

    var corFundo = produto.cor;
    var textoSombra = "";
    if (corFundo === "#1a1a1a") {
      textoSombra = "#333";
    } else {
      textoSombra = corFundo;
    }

    var imagemProduto = produto.imagem
      ? '<img src="' + produto.imagem + '" alt="' + produto.nome + '" class="produtoFoto">'
      : '<div class="produtoImageContent">' +
          '<span class="watchIcon">G-SHOCK</span>' +
          '<span class="watchColor" style="background:' + corFundo + '; box-shadow: 0 0 20px ' + textoSombra + '80;"></span>' +
        '</div>';

    card.innerHTML =
      '<span class="produtoBadge">Dispon\u00edvel</span>' +
      '<div class="produtoImage">' +
        '<div class="produtoImageBg"></div>' +
        imagemProduto +
      '</div>' +
      '<div class="produtoInfo">' +
        '<h3>' + produto.nome + '</h3>' +
        '<p>' + produto.descricao + '</p>' +
        '<div class="produtoPrice">' + produto.preco + '</div>' +
        '<div class="produtoActions">' +
          '<a href="' + gerarLinkWhatsApp("Ol\u00e1, vi no site o modelo " + produto.nome + " e gostaria de consultar disponibilidade.") + '" target="_blank" rel="noopener noreferrer" class="btn btnWhatsApp">' + WHATSAPP_ICON + 'Consultar no WhatsApp</a>' +
          '<button class="btnDetails" data-id="' + produto.id + '">Ver detalhes</button>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });

  document.querySelectorAll(".btnDetails").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var id = parseInt(this.getAttribute("data-id"));
      var produto = produtos.find(function(p) { return p.id === id; });
      if (produto) abrirModal(produto);
    });
  });
}

function abrirModal(produto) {
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("modal");
  var body = document.getElementById("modalBody");

  var caracteristicas = [
    "Visual esportivo",
    "Design moderno",
    "Modelo resistente",
    "Ideal para uso di\u00e1rio",
    "Atendimento pelo WhatsApp"
  ];

  var listaHTML = "";
  caracteristicas.forEach(function(item) {
    listaHTML += "<li>" + item + "</li>";
  });

  var corFundo = produto.cor;
  var textoSombra = corFundo === "#1a1a1a" ? "#333" : corFundo;
  var modalImagem = produto.imagem
    ? '<div class="modalProductImage"><img src="' + produto.imagem + '" alt="' + produto.nome + '"></div>'
    : '<div class="modalProductImage modalProductPlaceholder">' +
        '<span class="watchIcon">G-SHOCK</span>' +
        '<span class="watchColor" style="background:' + corFundo + '; box-shadow: 0 0 24px ' + textoSombra + '80;"></span>' +
      '</div>';

  body.innerHTML =
    modalImagem +
    '<h3>' + produto.nome + '</h3>' +
    '<p class="modalDesc">' + produto.descricao + '</p>' +
    '<div class="modalPrice">' + produto.preco + '</div>' +
    '<div class="modalFeatures">' +
      '<h4>Caracter\u00edsticas</h4>' +
      '<ul>' + listaHTML + '</ul>' +
    '</div>' +
    '<a href="' + gerarLinkWhatsApp("Ol\u00e1, vi no site o modelo " + produto.nome + " e gostaria de consultar disponibilidade.") + '" target="_blank" rel="noopener noreferrer" class="modalWhatsBtn">' + WHATSAPP_ICON + 'Consultar este modelo no WhatsApp</a>';

  overlay.classList.add("active");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "";
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  var hamburger = document.getElementById("hamburger");
  menu.classList.toggle("open");
  hamburger.classList.toggle("active");
}

function fecharMenu() {
  document.getElementById("menu").classList.remove("open");
  document.getElementById("hamburger").classList.remove("active");
}

function initHeaderScroll() {
  var header = document.getElementById("header");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initScrollSuave() {
  document.querySelectorAll("a[href^='#']").forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        fecharMenu();
        var header = document.getElementById("header");
        var headerOffset = header ? header.offsetHeight : 88;
        var pos = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    });
  });
}

document.getElementById("modalClose").addEventListener("click", fecharModal);
document.getElementById("overlay").addEventListener("click", fecharModal);
document.getElementById("hamburger").addEventListener("click", toggleMenu);

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    fecharModal();
  }
});

document.addEventListener("click", function(e) {
  var menu = document.getElementById("menu");
  var hamburger = document.getElementById("hamburger");
  if (menu.classList.contains("open") && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    fecharMenu();
  }
});

window.addEventListener("load", function() {
  renderizarProdutos();
  initHeaderScroll();
  initScrollSuave();
});
