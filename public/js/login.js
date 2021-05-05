const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (email && password) {
      const response = await fetch('../../controllers/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        // alert(response.statusText);
        alert('Failed to login')
      }
    }
  };

 
  document
  .getElementById('submit')
  .addEventListener('click', loginFormHandler);
