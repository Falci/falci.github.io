function fotos(produto, i) {
  return `
  <div id="carousel-${i}" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      ${produto.fotos.map(function(foto, index) {
    return `<li data-target="#carousel-example-generic" data-slide-to="${index}" class="${!index ? 'active': ''}"></li>`;
  }).join('')}
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      ${produto.fotos.map(function(foto, index) {
    return `
        <div class="item ${!index ? 'active' : ''}">
          <img src="${foto.url}" class="foto">
        <div class="carousel-caption">${foto.title}</div>
        </div>`;
  }).join('')}
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-${i}" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="right carousel-control" href="#carousel-${i}" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Próximo</span>
    </a>
  </div>`;
}

function preco(produto) {
  if(produto.precos) {
    return `<ul>${produto.precos.map(function(preco) {
      return `<li>${preco}</li>`;
    }).join('')}</ul>`;
  } else {
    return `<span class="preco">${produto.preco}</span>`;
  }
}

var $acc = $('#accordion');

[
  {
    nome: 'Bancada e Banquetas',
    fotos: [
      {url: 'http://i.imgur.com/ApGs5QK.jpg', title: ''},
      {url: 'http://i.imgur.com/y0ajTkS.jpg', title: ''},
      {url: 'http://i.imgur.com/pwjfgzp.jpg', title: ''},
      {url: 'http://i.imgur.com/851m9p0.jpg', title: ''}

    ],
    descricao: 'Bancada alta com duas cadeiras',
    precos: [
      'R$ 680,00', 'R$ 400,00 (bancada)', 'R$ 280,00 (banquetas x2)'
    ]
  },
  {
    nome: 'Sofá',
    fotos: [
      {url: 'http://i.imgur.com/CGADZy3.jpg', title: ''}

    ],
    descricao: 'Sofá 2 lugares (grande), retrátil, recline ajustável',
    preco: 'R$ 1400,00'
  },
  {
    nome: 'Fogão',
    fotos: [
      {url: 'http://i.imgur.com/iGlLIiC.jpg', title: ''}

    ],
    descricao: 'Fogão 4 bocas. Atlas U.Top ',
    preco: 'R$ 490,00'
  },
  {
    nome: 'Cama de casal',
    fotos: [
      {url: 'http://i.imgur.com/4RtKEO9.jpg', title: ''},
      {url: 'http://i.imgur.com/gLkohHY.jpg', title: ''},
      {url: 'http://i.imgur.com/uU1dv2j.jpg', title: ''}

    ],
    descricao: 'Cama de casal box',
    preco: 'R$ 280,00'
  },
  {
    nome: 'Guarda-roupas',
    fotos: [
      {url: 'http://i.imgur.com/o8gkjOn.jpg', title: ''},
      {url: 'http://i.imgur.com/7uUEVhz.jpg', title: ''}

    ],
    descricao: 'Garda-roupas, portas de correr com espelho grande',
    preco: 'R$ 1610,00'
  },
  {
    nome: 'Geladeira',
    fotos: [
      {url: 'http://i.imgur.com/8ZZkdx1.jpg', title: ''}

    ],
    descricao: 'Geladeira Consul 342 litros, Frost free',
    preco: 'R$ 850,00'
  },
  {
    nome: 'Mesa de Escritório',
    fotos: [
      {url: 'http://i.imgur.com/70WgAXZ.jpg', title: ''},
      {url: 'http://i.imgur.com/ZhuZysL.jpg', title: ''}

    ],
    descricao: 'Mesa em "L". Pode ser dividida em duas partes',
    preco: 'R$ 224,00'
  }
]

  .forEach(function(produto, i) {
    $acc.append(`
<div class="panel panel-primary">
  <div class="panel-heading" role="tab" id="heading${i}">
    <h4 class="panel-title">
<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse${i}" aria-expanded="${!i?'true':'false'}" aria-controls="collapse${i}">
      ${produto.nome}
      </a>
    </h4>
  </div>
<div id="collapse${i}" class="panel-collapse collapse ${!i?'in':''}" role="tabpanel" aria-labelledby="heading${i}">
  <div class="panel-body">
    ${fotos(produto, i)}
    <span class="descricao">${produto.descricao}</span>

    <h3>Preço:</h3>
    ${preco(produto)}

    <a href="https://www.messenger.com/t/RenattinhaP" target="_blank" class="face">
<img src="http://i.utdstc.com/icons/256/facebook-lite-android.png"/>
      Faça uma proposta
    </a>
  </div>
</div>`);
  })