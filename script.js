function check() {
    const password = document.querySelector('input[name=password]');
    const confirmation = document.querySelector('input[name=confpassword]');
    const errorMessage = document.getElementById('error');

    if (confirmation.value === password.value) {
        confirmation.setCustomValidity('');
        password.setCustomValidity('');
        errorMessage.textContent = '';
    } else {
        password.setCustomValidity("Passwords do not match");
        confirmation.setCustomValidity("Passwords do not match");
        errorMessage.textContent = '* Passwords do not match';
    }
}