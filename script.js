// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const totalCount = document.getElementById("totalCount");
const progressBar = document.getElementById("progressBar");
const greetingMessage = document.getElementById("greetingMessage");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // Prevent empty names
  if (name === "") {
    alert("Please enter an attendee name.");
    return;
  }

  // Increment count
  count++;
  console.log("Total check-ins: ", count);

  // Update total count display
  if (totalCount) {
    totalCount.textContent = count;
  }

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  console.log(`Progress: ${percentage}%`);

  if (progressBar) {
    progressBar.style.width = percentage + "%";
    progressBar.textContent = percentage + "%";
  }

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  if (teamCounter) {
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
  }

  // Show welcome message
  const message = `Welcome, ${name} from ${teamName}`;
  console.log(message);

  if (greetingMessage) {
    greetingMessage.textContent = message;
  }

  form.reset();
});