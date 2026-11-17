/**
 * FocusFlow — Student Task Tracker Logic
 * Short, clean, and 100% functional JavaScript
 * Features an adjustable timer so students can study as long as they need!
 */

// --- 1. CUSTOMIZABLE STUDY TIMER ---
let totalMinutes = 25;            // Default duration in minutes
let timeLeft = totalMinutes * 60; // Converted to seconds (1500s)
let timerId = null;               // Stores the setInterval reference

const timerDisplay = document.getElementById("timerDisplay");
const customMinutes = document.getElementById("customMinutes");
const decreaseTimeBtn = document.getElementById("decreaseTimeBtn");
const increaseTimeBtn = document.getElementById("increaseTimeBtn");
const presetPills = document.querySelectorAll(".preset-pill");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Helper function to format seconds into MM:SS format
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // padStart ensures numbers look like "05:00" instead of "5:0"
  timerDisplay.textContent = 
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

// Function to set any duration (from 1 minute to 300 minutes / 5 hours)
function setDuration(mins) {
  mins = parseInt(mins) || 25;
  if (mins < 1) mins = 1;
  if (mins > 300) mins = 300;

  totalMinutes = mins;
  customMinutes.value = mins;

  // Stop running timer and reset to the new duration
  clearInterval(timerId);
  timerId = null;
  timeLeft = totalMinutes * 60;
  updateTimerDisplay();

  // Highlight the matching preset button if one matches
  presetPills.forEach((pill) => {
    pill.classList.toggle("active", parseInt(pill.dataset.mins) === mins);
  });
}

// -5 minutes step button
decreaseTimeBtn.addEventListener("click", () => {
  setDuration(totalMinutes - 5);
});

// +5 minutes step button
increaseTimeBtn.addEventListener("click", () => {
  setDuration(totalMinutes + 5);
});

// When user types any custom number directly into the input box
customMinutes.addEventListener("change", (e) => {
  setDuration(e.target.value);
});

// Quick preset buttons (15m, 25m, 45m, 60m, 90m)
presetPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    setDuration(pill.dataset.mins);
  });
});

// Start button: Runs the countdown once every second (1000ms)
startBtn.addEventListener("click", () => {
  if (timerId !== null) return; // Prevent multiple timers running at once
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerId);
      timerId = null;
      alert(`Great job! Your ${totalMinutes}-minute study session is complete!`);
    }
  }, 1000);
});

// Pause button: Stops the countdown
pauseBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

// Reset button: Resets the timer back to the selected minutes
resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  timeLeft = totalMinutes * 60;
  updateTimerDisplay();
});


// --- 2. PROGRESS BAR & COUNTER UPDATE ---
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const progressPercent = document.getElementById("progressPercent");
const progressBarFill = document.getElementById("progressBarFill");

// Calculates total tasks and completed tasks to update the progress bar
function updateProgress() {
  const allTasks = taskList.querySelectorAll(".task-item");
  const completedTasks = taskList.querySelectorAll(".task-checkbox:checked");
  
  const total = allTasks.length;
  const completed = completedTasks.length;
  const remaining = total - completed;

  // Percentage calculation: (completed / total) * 100
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  // Update text and width of progress bar
  progressPercent.textContent = percent + "%";
  progressBarFill.style.width = percent + "%";
  taskCounter.textContent = `${remaining} task${remaining === 1 ? "" : "s"} remaining today`;
}


// --- 3. ADD NEW TASK FUNCTIONALITY ---
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents browser from refreshing the page
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create a new <li> element dynamically
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <div class="task-left">
      <input type="checkbox" class="task-checkbox">
      <span class="task-title">${taskText}</span>
    </div>
    <div class="task-right">
      <span class="tag tag-sl">Study</span>
      <span class="tag tag-priority-med">Pending</span>
      <button class="delete-btn" title="Delete task">&times;</button>
    </div>
  `;

  // Append new task to the list and clear the input field
  taskList.appendChild(li);
  taskInput.value = "";

  // Refresh progress bar calculation
  updateProgress();
});


// --- 4. TOGGLE COMPLETE & DELETE (EVENT DELEGATION) ---
taskList.addEventListener("click", (e) => {
  // If user clicks the delete button (×)
  if (e.target.classList.contains("delete-btn")) {
    const item = e.target.closest(".task-item");
    item.remove();
    updateProgress();
  }
});

// When checkbox changes (checked or unchecked)
taskList.addEventListener("change", (e) => {
  if (e.target.classList.contains("task-checkbox")) {
    const item = e.target.closest(".task-item");
    const isChecked = e.target.checked;
    
    // Toggle completed class for strikethrough styling
    item.classList.toggle("task-completed", isChecked);

    // Update status tag badge
    const statusTag = item.querySelector(".tag:last-of-type");
    if (statusTag) {
      if (isChecked) {
        statusTag.className = "tag tag-done";
        statusTag.textContent = "Done";
      } else {
        statusTag.className = "tag tag-priority-med";
        statusTag.textContent = "Pending";
      }
    }

    // Refresh progress bar calculation
    updateProgress();
  }
});


// --- 5. FILTER TABS (ALL / PENDING / COMPLETED) ---
const filterTabs = document.querySelectorAll(".filter-tab");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Set active tab styling
    filterTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter; // "all", "pending", or "completed"
    const items = taskList.querySelectorAll(".task-item");

    items.forEach((item) => {
      const isCompleted = item.classList.contains("task-completed");
      if (filter === "all") {
        item.style.display = "flex";
      } else if (filter === "pending") {
        item.style.display = isCompleted ? "none" : "flex";
      } else if (filter === "completed") {
        item.style.display = isCompleted ? "flex" : "none";
      }
    });
  });
});

// Run once on load to ensure numbers are synchronized
updateProgress();
