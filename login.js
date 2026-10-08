const loginForm = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');   

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = username.value.trim();
    const password = password.value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful login, e.g., redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
});        

