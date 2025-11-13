const events = [
  {
    title: "Opening Keynote: The Future of AI",
    type: "Keynote",
    date: "2025-11-20T09:00:00",
    description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
    image: "images/keynote.jpg"
  },
  {
    title: "Advanced JavaScript Workshop",
    type: "Workshop",
    date: "2025-11-20T10:30:00",
    description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
    image: "images/workshop-js.jpg"
  },
  {
    title: "Cybersecurity in the Cloud Era",
    type: "Talk",
    date: "2025-11-20T11:00:00",
    description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
    image: "images/cybersecurity.jpg"
  },
  {
    title: "Networking Mixer & Welcome Reception",
    type: "Social",
    date: "2025-11-20T17:00:00",
    description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
    image: "images/mixer.jpg"
  }
];

let currentFilter = "All";
let searchTerm = "";

// ✅ Display Events
function displayEvents() {
  const container = document.getElementById("event-container");
  container.innerHTML = "";

  const filteredEvents = events.filter(event => {
    const matchType = currentFilter === "All" || event.type === currentFilter;
    const matchSearch =
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.type.toLowerCase().includes(searchTerm);
    return matchType && matchSearch;
  });

  if (filteredEvents.length === 0) {
    container.innerHTML = <p style="text-align:center;color:#555;">No events found.</p>;
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    const img = document.createElement("img");
    img.src = event.image;
    img.alt = event.title;

    const content = document.createElement("div");
    content.classList.add("event-content");

    const title = document.createElement("h2");
    title.textContent = event.title;

    const type = document.createElement("p");
    type.classList.add("event-type");
    type.textContent = event.type;

    const date = document.createElement("p");
    date.classList.add("event-date");
    date.textContent = new Date(event.date).toLocaleString();

    const desc = document.createElement("p");
    desc.textContent = event.description;

    content.append(title, type, date, desc);
    card.append(img, content);
    container.appendChild(card);
  });
}

// ✅ Filter Buttons
const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.type;
    displayEvents();
  });
});

// ✅ Search Input (Live Update)
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", e => {
  searchTerm = e.target.value.toLowerCase();
  displayEvents();
});

// ✅ Dark Mode (Auto-detect + Toggle)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}

// ✅ Run when page loads
document.addEventListener("DOMContentLoaded", () => displayEvents());