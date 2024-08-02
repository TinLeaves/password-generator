document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <input type="text" id="password" class="border p-2 mb-4" readonly />
        <button id="generate" class="bg-blue-500 text-white p-2">Generate Password</button>
    `;

    document.getElementById('generate').addEventListener('click', generatePassword);

    function generatePassword() {
        const length = 12;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        document.getElementById('password').value = password;
    }
});
