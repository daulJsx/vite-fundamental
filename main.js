export const pageGreeting = (name) => {
  const h1 = document.getElementById("title");
  if (h1) {
    h1.innerText = `Hello ${name}`;
  } else {
    console.warn("Element with ID 'title' not found");
  }
};
