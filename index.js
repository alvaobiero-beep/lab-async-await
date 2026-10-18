
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  posts.forEach((post) => {
    // Create li, h1, and p elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add the post title and body
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to the ul
    ul.appendChild(li);
  });
}

// Fetch posts using async/await
async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await response.json();

  // Display the fetched posts
  displayPosts(posts);
}

fetchPosts();
