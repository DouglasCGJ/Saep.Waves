const fakeDatabase = [
    { email: 'o@gmail.com', username: 'o', password: '123' },
    { email: 'u@gmail.com', username: 'u', password: '132' },
];

function isEmailRegistered(email) {
    return fakeDatabase.some(user => user.email === email);
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verifica se as senhas são iguais
    if (password != confirmPassword) {
        alert('As senhas não coincidem!');
        return; // Interrompe o processo de cadastro se as senhas não coincidem
    }

    if (isEmailRegistered(email)) {
        alert('Este email já está cadastrado. Por favor, use outro email.');
    } else {
        // Simula o envio dos dados para o banco de dados
        fakeDatabase.push({ email, username, password });
        alert('Cadastro realizado com sucesso!');
        // Aqui você poderia redirecionar o usuário para a página de login ou outra página
    }
});