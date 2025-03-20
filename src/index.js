const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("#searchByID");
        const movieID = input.value.trim();
        fetch(`http://localhost:3000/movies/${movieID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        return response.json();
      })
      .then((data) => {
        // Select movie details section
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("#movieDetails p");
        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => {
        // Handle errors (e.g., invalid ID)
        alert(error.message);
      });
  });
};


document.addEventListener('DOMContentLoaded', init);