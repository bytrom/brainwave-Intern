document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    // Store in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    // Display registration success message
    document.getElementById('registrationMessage').style.display = 'block';
  
    // Optionally clear form fields after successful registration
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  });
  