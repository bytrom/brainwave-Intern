document.getElementById('writeBlogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let content = document.getElementById('content').value;

    // Store blog post in local storage
    let newBlogPost = {
        title: title,
        author: author,
        content: content
    };

    // Retrieve existing blog posts from local storage or initialize an empty array
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(newBlogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Display success message (optional)
    alert('Blog posted successfully!');

    // Redirect to index.html#blogs to display the newly posted blog
    window.location.href = 'index.html#blogs';
});
