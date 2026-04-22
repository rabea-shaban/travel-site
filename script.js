function search() {
  const value = document.getElementById("search").value.toLowerCase();
  const results = document.getElementById("results");

  if (value.includes("beach")) {
    results.innerHTML = `
      <h2>Beaches</h2>
      <img src="https://source.unsplash.com/200x200/?beach">
      <img src="https://source.unsplash.com/200x200/?sea">
    `;
  } else if (value.includes("temple")) {
    results.innerHTML = `
      <h2>Temples</h2>
      <img src="https://source.unsplash.com/200x200/?temple">
      <img src="https://source.unsplash.com/200x200/?pagoda">
    `;
  } else if (value.includes("country")) {
    results.innerHTML = `
      <h2>Countries</h2>
      <img src="https://source.unsplash.com/200x200/?france">
      <img src="https://source.unsplash.com/200x200/?japan">
    `;
  } else {
    results.innerHTML = "<p>No results found</p>";
  }
}
