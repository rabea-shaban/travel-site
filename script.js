function search() {
  const input = document.getElementById("search").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = ""; // Clear current results before showing new ones

  if (input.includes("beach")) {
    results.innerHTML = `
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=400&auto=format&fit=crop" alt="Beach">
        <h3>Maldives Coastal Paradise</h3>
      </div>
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=400&auto=format&fit=crop" alt="Sea">
        <h3>The Azure Shores</h3>
      </div>
    `;
  } else if (input.includes("temple")) {
    results.innerHTML = `
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=400&auto=format&fit=crop" alt="Temple">
        <h3>Angkor Wat, Cambodia</h3>
      </div>
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=400&auto=format&fit=crop" alt="Pagoda">
        <h3>Historic Kyoto Temples</h3>
      </div>
    `;
  } else if (input.includes("country")) {
    results.innerHTML = `
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400&auto=format&fit=crop" alt="France">
        <h3>Paris, France</h3>
      </div>
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop" alt="Japan">
        <h3>Tokyo, Japan</h3>
      </div>
    `;
  } else if (input === "") {
    results.innerHTML = "<p>Please enter a keyword to search.</p>";
  } else {
    results.innerHTML =
      "<p>No results found. Try 'beach', 'temple', or 'country'.</p>";
  }
}

function clearSearch() {
  document.getElementById("search").value = "";
  document.getElementById("results").innerHTML = "";
}
