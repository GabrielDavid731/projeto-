function mascaraCPF(campo) {
  let valor = campo.value;

  // Remove qualquer caractere que não seja número
  valor = valor.replace(/\D/g, "");

  // Adiciona os pontos e o traço conforme o CPF é digitado
  if (valor.length <= 11) {
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  campo.value = valor;
}









function mascaraCelular(campo) {
  let valor = campo.value.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  campo.value = valor;
}








document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio real do formulário
  
  // Limpa os campos do formulário
  this.reset();
});
