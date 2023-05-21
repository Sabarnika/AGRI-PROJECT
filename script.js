const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            window.location.href = '/dashboard';
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
    }
});
