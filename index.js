// Write your code here!

    


async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        displayPost(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
// Function to display the posts on the webpage
function displayPost(posts) {
    const ul = document.getElementById("post-list");

    if (!ul) return;
    ul.innerHTML = ""; 

   
    

    posts.forEach(post => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.textContent = post.title;
        p.textContent = post.body;
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}
window.onload = fetchPost;