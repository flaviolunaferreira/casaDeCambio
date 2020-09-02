const apiInfo = {
  api: 'https://api.ratesapi.io/api/',
  endPoint: 'latest?'
}
const url = `${apiInfo.api}${apiInfo.endPoint}`;

window.onload = () => {
  setupEvent();
}

const setupEvent = () => {
  const btnPesquisar = document.querySelector('#btnPesquisar');
  btnPesquisar.addEventListener('click', procurar);
}

const procurar = () => {
  const valorCorrente = document.querySelector('#moeda').value;
  fetchAtual(valorCorrente);
}

const fetchAtual = (valor) => {
  const endPoint = `${url}?base=${valor}`;
  fetch(endPoint)
    .then((resposta) => resposta.json() )
    .then((objeto) => trabalharComTaxas(objeto.rates));
}

const trabalharComTaxas = (taxas) => {
  const chaveTaxas = Object.keys(taxas);
  chaveTaxas.forEach((key) => {
    const value = taxas[key];
    renderizandoTaxas(key, value);
    console.log(taxas[key]);
  });
}

const renderizandoTaxas = (key, value) => {
  const lista = document.querySelector('#lista-corrente');
  const formattedValue = value.toFixed(2);
  const item = document.createElement('li');
  item.innerHTML = `<b>${key}:</b> ${formattedValue}`;
  lista.appendChild(item);
}
