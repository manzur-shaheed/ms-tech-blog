// script to login (following example in mini-project)
const loginHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const username = document.querySelector('#login-username').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  // console.log(username, password);
  
  console.log(username, password);
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // redirect to dashboard if sign up is successful
    if (response.ok) {
      session['username'] = username;
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('.login-form').addEventListener('submit', loginHandler);