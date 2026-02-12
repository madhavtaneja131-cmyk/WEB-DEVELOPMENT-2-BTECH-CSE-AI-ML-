// Target the HTML elements like form, input fields, buttons
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// Take 2 sample events
let sampleEvent = [
    {
        title: "web dev",
        date: "4-6-2025",
        category: "Workshop",
        description: "ahgs nadg jhad jhai djabds"
    },
    {
        title: "web dev2",
        date: "4-7-2025",
        category: "conference",
        description: "ahgs dshjng ahg jhai djabds"
    }
];

// Create event card which contains the user data and store it inside a div
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.innerHTML = `
    <button class="delete-btn">X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
  `;
    return card;
}

// Add the created event and append inside the event container
function addEvent(eventData) {
    // If empty-state is present then remove it when new card will be added.
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

// Form handling using submit event
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // eventData stores the user given value
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
});