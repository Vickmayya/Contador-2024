// Data de início do namoro
const namoroInicio = new Date('2023-09-13T13:49:00');

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - namoroInicio;

  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('counter').innerText =
    `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos`;
}

// Atualiza o contador a cada minuto
setInterval(atualizarContador, 60000);
atualizarContador();
