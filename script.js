const events = [
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
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "images/quantum.jpg"
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "images/mixer.jpg"
    },

    // --- Day 2: Nov 21, 2025 ---
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "images/ethics.jpg"
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "images/scalable.jpg"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "images/react.jpg"
    },
    {
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "images/psychology-ux.jpg"
    },
    {
        title: "Panel: The Future of Remote Work in Tech",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
        image: "images/panel-remote.jpg"
    },

    // --- Day 3: Nov 22, 2025 ---
    {
        title: "UI/UX Design Fundamentals for Developers",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
        image: "images/ui-ux.jpg"
    },
    {
        title: "From Monolith to Serverless",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
        image: "images/serverless.jpg"
    },
    {
        title: "State of Web Assembly in 2025",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Discover how WebAssembly is enabling near-native performance for web applications.",
        image: "images/webassembly.jpg"
    },
    {
        title: "Data Visualization with D3.js",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Learn to create stunning, interactive data visualizations for the web from scratch.",
        image: "images/d3.jpg"
    },
    {
        title: "Closing Panel: Ask Me Anything with Speakers",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
        image: "images/panel-ama.jpg"
    },
    {
        title: "Pre-Conference Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
        image: "images/hackathon.jpg"
    },
    {
        title: "API Design Best Practices",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
        image: "images/api.jpg"
    },
    {
        title: "DevOps Culture and Tooling",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
        image: "images/devops.jpg"
    },
    {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
        image: "images/mobile-first.jpg"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
        image: "images/awards.jpg"
    }
];

// Helper function to format the date and time
function formatEventDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return `${month} ${day} @ ${time}`;
}

// Core Requirement: Function to dynamically generate event cards
function renderEventCards(eventArray) {
    const container = document.getElementById('event-container');
    // Clear existing content to prevent duplication when filtering
    container.innerHTML = ''; 

    eventArray.forEach(event => {
        // Create the card element
        const card = document.createElement('div');
        card.classList.add('event-card');
        // Use a data attribute for type, which is good practice for JS hooks
        card.dataset.eventType = event.type;

        // Populate the card HTML structure using template literals
        // NOTE: Ensure your 'images/' folder contains files like 'keynote.jpg', 'workshop-js.jpg', etc., or change the image paths.
        card.innerHTML = `
            <div class="event-image-container">
                <img src="${event.image}" alt="Image for ${event.title}">
            </div>
            <div class="card-content">
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <div class="event-meta">
                    <span class="event-type">${event.type}</span>
                    <span class="event-date-time">${formatEventDateTime(event.date)}</span>
                </div>
                <!-- Level 5: Add to Calendar Button -->
                <a href="${calendarLink}" target="_blank" rel="noopener noreferrer" class="add-to-calendar">Add to Calendar</a>
            </div>
        `;

        // Append the final card to the container
        container.appendChild(card);
    });
}

// Level 2: Event Filter Logic
function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.dataset.filter;

            // Update active state of buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter the events array
            const filteredEvents = (filterType === 'all')
                ? events
                : events.filter(event => event.type === filterType);

            // Re-render the filtered cards
            renderEventCards(filteredEvents);
        });
    });
}

// Initializing the application
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sort events by date to ensure they appear in chronological order
    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

    // 2. Render all events on initial page load
    renderEventCards(sortedEvents); 
    
    // 3. Setup filter functionality (Level 2)
    setupEventListeners();
});