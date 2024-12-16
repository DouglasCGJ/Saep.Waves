// Simulação de um banco de dados local usando um array
const fakeDatabase = [
    { email: 'user1@gmail.com', username: 'user1', password: 'password123' },
    { email: 'user2@gmail.com', username: 'user2', password: 'password456' },
];

// Função para verificar se os dados de login são válidos
function isValidLogin(email, password) {
    return fakeDatabase.some(user => user.email === email && user.password === password);
}

// Função para o evento de envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isValidLogin(email, password)) {
        alert('Login realizado com sucesso!');
        // Aqui você redirecionaria para a página principal ou painel do usuário
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }
});