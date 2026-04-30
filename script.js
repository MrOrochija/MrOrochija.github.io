const theme_toggle = document.getElementById("theme-toggle");

theme_toggle.addEventListener("change", () => {
    if (theme_toggle.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

const passwordInput = document.getElementById('password-input');
const errMsg = document.getElementById('error-message');
const togglePassword = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

passwordInput.addEventListener('input', () => {
    const length = passwordInput.value.length;

    if (length > 0 && (length < 8 || length > 16)) {
        errMsg.classList.add('visible');
        passwordInput.style.borderColor = '#ff4d4d';
        errMsg.textContent = length < 8 ? "Пароль слишком короткий!" : "Пароль слишком длинный!";
    } else {
        errMsg.classList.remove('visible');
        passwordInput.style.borderColor = length > 0 ? "green" : ""; 
    }
});

const eyeOpenSvg = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
const eyeClosedSvg = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22"></path><path d="M12.01 8.637a3.36 3.36 0 0 1 1.116.326M14.99 12.01a3.36 3.36 0 0 1-.326 1.116"></path>';

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = eyeOpenSvg; 
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = eyeClosedSvg; 
    }
    passwordInput.focus(); 
});

const strengthBar = document.getElementById('strength-bar');

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    let strength = 0;

    if (value.length >= 8) strength += 1;
    if (/[0-9]/.test(value)) strength += 1;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength += 1;
    if (/[^A-Za-z0-9]/.test(value)) strength += 1;

    switch(strength) {
        case 0:
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = '#e0e0e0';
            break;
        case 1:
            strengthBar.style.width = '25%';
            strengthBar.style.backgroundColor = '#ff4d4d';
            break;
        case 2:
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = '#ffd700';
            break;
        case 3:
            strengthBar.style.width = '75%';
            strengthBar.style.backgroundColor = '#a3cfbb';
            break;
        case 4:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = '#2ecc71';
            break;
    }
});