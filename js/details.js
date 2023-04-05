// javascript for details.html
const id = new URLSearchParams(window.location.search).get("id");

const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

/* render details function for the spesefic id 
  1 - once we click  send the request using async js fetch function with the id 
*/
const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  const template = ` 
  <h1>${post.title}</h1>
  <p>${post.body}</p>             
  `;
  container.innerHTML = template;
};

/* handel the delete blog  and doning the delete event */

const deleteBlog = () => {
  deleteBtn.addEventListener("click", async (e) => {
    console.log(e);
    const res = await fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    });
    window.location.replace("/index.html");
  });
};

deleteBlog();

window.addEventListener("DOMContentLoaded", () => renderDetails());
