// script.js

// Exemplo de dados de bebidas (pode ser substituído por dados reais)
const coqueteis = [
    { nome: 'Margarita', preco: 10.99 },
    { nome: 'Mojito', preco: 9.99 },
    { nome: 'Martini', preco: 12.99 }
  ];
  
  const sucos = [
    { nome: 'Suco de Laranja', preco: 5.99 },
    { nome: 'Suco de Abacaxi', preco: 6.99 },
    { nome: 'Suco de Morango', preco: 7.99 }
  ];
  
  const smoothies = [
    { nome: 'Smoothie de Banana', preco: 8.99 },
    { nome: 'Smoothie de Manga', preco: 9.99 },
    { nome: 'Smoothie de Morango', preco: 10.99 }
  ];
  
  const bebidasQuentes = [
    { nome: 'Café Expresso', preco: 3.99 },
    { nome: 'Cappuccino', preco: 4.99 },
    { nome: 'Chá de Camomila', preco: 2.99 }
  ];
  
  // Função para exibir as bebidas em uma seção do site
  function exibirBebidas(bebidas, secaoId) {
    const secao = document.getElementById(secaoId);
    const menu = secao.querySelector('.menu');
  
    bebidas.forEach(bebida => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `<h3>${bebida.nome}</h3><p>R$ ${bebida.preco.toFixed(2)}</p>`;
      menu.appendChild(item);
    });
  }
  
  // Chamando a função para exibir as bebidas em cada seção
  exibirBebidas(coqueteis, 'coquetels');
  exibirBebidas(sucos, 'sucos');
  exibirBebidas(smoothies, 'smoothies');
  exibirBebidas(bebidasQuentes, 'bebidas-quentes');
  