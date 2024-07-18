// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  // Example: Perform validation or send to server-side for authentication
  // For simplicity, checking if email and password are not empty
  if (email && password) {
      // Perform login logic here (e.g., validate with server)
      // For now, just redirect to upload.html upon successful login
      alert('Login successful!');
      redirectToUpload(); // Redirect to upload.html
  } else {
      alert('Invalid email or password. Please try again.');
  }
});

// Function to redirect to upload.html
function redirectToUpload() {
  window.location.href = 'upload.html';
}

// Function to handle form submission from upload.html
document.getElementById('writeBlogForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let content = document.getElementById('content').value;

  // Store blog post in local storage (for simplicity; in a real application, use a server-side database)
  let newBlogPost = {
      title: title,
      author: author,
      content: content
  };

  // Assuming blog posts are stored as an array in local storage
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(newBlogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  // Display success message
  alert('Blog posted successfully!');

  // Redirect to index.html#blogs to display the newly posted blog
  window.location.href = 'index.html#blogs';
});

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  // Example: Perform validation or send to server-side for authentication
  // For simplicity, checking if email and password are not empty
  if (email && password) {
      // Perform login logic here (e.g., validate with server)
      // For now, just redirect to index.html upon successful login
      alert('Login successful!');
      redirectToIndex(); // Redirect to index.html
  } else {
      alert('Invalid email or password. Please try again.');
  }
});

// Function to redirect to index.html
function redirectToIndex() {
  window.location.href = 'index.html';
}

// Function to display blog posts on index.html
function displayBlogPosts() {
  let blogPostsContainer = document.querySelector('#blogs .blog-posts');
  blogPostsContainer.innerHTML = '';

  // Retrieve blog posts from local storage
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Iterate through blog posts and create HTML elements to display them
  blogPosts.forEach(function(blogPost) {
      let blogPostElement = document.createElement('div');
      blogPostElement.classList.add('blog-post');
      blogPostElement.innerHTML = `
          <h3>${blogPost.title}</h3>
          <p><strong>Author:</strong> ${blogPost.author}</p>
          <p>${blogPost.content}</p>
      `;
      blogPostsContainer.appendChild(blogPostElement);
  });
}

// Check if we are on the index.html page and if the #blogs section exists
if (window.location.href.includes('index.html') && document.getElementById('blogs')) {
  displayBlogPosts();
}