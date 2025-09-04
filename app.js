document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (username.length === 0 || username.length > 20) {
        alert('Username must be between 1 and 20 characters.');
        return;
    }
    if (message.length === 0 || message.length > 500) {
        alert('Message must be between 1 and 500 characters.');
        return;
    }

    // Create post element
    const post = document.createElement('div');
    post.className = 'post';
    const timestamp = new Date().toLocaleString();
    post.innerHTML = `<strong>${username}</strong>: ${message}<br><small>Posted on ${timestamp}</small><hr>`;

    // Add to post list
    document.getElementById('post-list').prepend(post);

    // Clear form
    this.reset();
});