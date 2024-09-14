document.getElementById('meuform').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value

    alert(`Mensagem enviada com sucesso\nNome: ${name}\nEntrarei em contato o mais breve possivel\nFique atento no email: ${email} Sua resposta chegará em instantes\nVamos Trabalhar Juntos!`)

});