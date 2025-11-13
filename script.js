// Event Data
const events = [
  {
    title: "Opening Keynote: The Future of AI",
    date: "2025-11-20T09:00:00",
    description: "Join Dr. Evelyn Reed as she discusses upcoming breakthroughs in Artificial Intelligence.",
    image: "images/keynote.jpg"
  },
  {
    title: "Advanced JavaScript Workshop",
    date: "2025-11-20T11:00:00",
    description: "A hands-on session exploring ES6+, Promises, and async programming.",
    image: "meet.jpg"
  },
  {
    title: "Cybersecurity in 2025",
    date: "2025-11-21T10:00:00",
    description: "Learn about the latest cybersecurity trends and defense strategies.",
    image: "images/cyber.jpg"
  }
];

const eventContainer = document.getElementById("event-container");

// Generate Event Cards
function displayEvents() {
  eventContainer.innerHTML = "";
  events.forEach(ev => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <img src="${ev.image}" alt="${ev.title}">
      <div class="event-card-content">
        <h3>${ev.title}</h3>
        <p><strong>Date:</strong> ${new Date(ev.date).toLocaleString()}</p>
        <p>${ev.description}</p>
      </div>
    `;
    eventContainer.appendChild(card);
  });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("mode", mode);
});

// Remember Mode
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}

displayEvents();