
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }
    if (isValid) {
        const hashedPassword = sha256(password);
        console.log('Email:', email);
        console.log('Hashed Password:', hashedPassword);
        alert('Login successful!');
    }
});
function sha256(str) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str)).then(hash => {
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    });
}