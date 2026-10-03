const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".assignment-card");

const visibleCount = document.getElementById("visibleCount");
const noResults = document.getElementById("noResults");

let activeCategory = "all";

function filterAssignments() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  let count = 0;

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    const matchesSearch =
      title.includes(searchTerm) ||
      description.includes(searchTerm) ||
      category.includes(searchTerm);

    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;

    const shouldShow = matchesSearch && matchesCategory;

    card.style.display = shouldShow ? "block" : "none";

    if (shouldShow) {
      count++;
    }
  });

  visibleCount.textContent = String(count).padStart(2, "0");

  noResults.style.display = count === 0 ? "block" : "none";
}

// Search
searchInput.addEventListener("input", filterAssignments);

// Category filters
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    activeCategory = button.dataset.category;

    filterAssignments();
  });
});

// Keyboard shortcut: Ctrl/Cmd + K
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInput.focus();
  }

  if (e.key === "Escape") {
    searchInput.value = "";
    filterAssignments();
    searchInput.blur();
  }
});

// Initial count
filterAssignments();
