function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultadoIMC = document.getElementById('resultado-imc');

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultadoIMC.textContent = 'Por favor, insira valores válidos para peso e altura.';
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(2);

  let categoria = '';
  if (imc < 18.5) {
    categoria = 'Baixo peso';
  } else if (imc < 24.9) {
    categoria = 'Peso normal';
  } else if (imc < 29.9) {
    categoria = 'Sobrepeso';
  } else {
    categoria = 'Obesidade';
  }

  resultadoIMC.textContent = `Seu IMC é ${imc}. Categoria: ${categoria}`;
}
