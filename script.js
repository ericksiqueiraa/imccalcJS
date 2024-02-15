document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de calcular
    const calcularBtn = document.getElementById('btn_calc');

    // Adiciona um ouvinte de evento de clique ao botão
    calcularBtn.addEventListener('click', function() {
        // Pega os valores dos inputs
        const alturaInput = document.getElementById('input_alt');
        const pesoInput = document.getElementById('input_peso');

        // Verifica se os valores são válidos
        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);

        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            alert('Por favor, insira valores válidos para altura e peso.');
            return;


        }

        // Calcula o IMC
        const imc = peso / (altura * altura);

        // Atualiza o elemento HTML com o valor do IMC
        document.getElementById('total_imc').textContent = imc.toFixed(2);

        

        if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById('ideal').textContent = "Seu peso é ideal"
        } else {
            document.getElementById('ideal').textContent = "Seu peso não é ideal"
        }
    });
});