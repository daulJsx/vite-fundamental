export const pageTitle = (title) => {
  const h1 = document.getElementById("title");
  if (h1) {
    h1.innerText = `${title} Page`;
  } else {
    console.warn("Element with ID 'title' not found");
  }
};
