# FOCUSFLOW: A FUNCTIONAL STUDENT TASK TRACKER UI
## 10-Slide Presentation Text & Oral Viva Script
**Course:** Scripting Languages Laboratory (SL LAB GLOB)  
**Institution:** Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)

---

### SLIDE 1: Title & Team Details
- **Slide Title:** FocusFlow: A Functional Student Task Tracker UI
- **Subtitle:** An Interactive Micro-Project on HTML5, CSS3 Flexbox & Vanilla JavaScript
- **Course & Department:** 
  - Scripting Languages Laboratory (SL LAB)
  - Department of Computer Science and Engineering / Information Technology
  - Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
- **Presented By:**
  - Student Name: *[Your Name]*
  - Roll Number: *[Your GRIET Roll Number, e.g., 22241A05XX]*
  - Academic Year: 2025 – 2026
- **Faculty Supervisor / Lab In-Charge:** *[Faculty Name / Lab Coordinator]*
- **Slide Layout & Visuals:** Clean light-grey background with a blue accent card representing an interactive student study planner.

> **Speaker Notes (Viva Script):**
> "Good morning respected faculty and evaluators. Today I am presenting my micro-project for the Scripting Languages Laboratory titled 'FocusFlow: A Functional Student Task Tracker UI'. This project is a 100% working interactive application combining semantic HTML5, CSS3 Flexbox, and concise Vanilla JavaScript."

---

### SLIDE 2: Introduction to FocusFlow
- **Slide Title:** Introduction to FocusFlow
- **Bullet Points:**
  - **What is FocusFlow?** A lightweight, interactive web application built to help college students track daily assignments and conduct focused 25-minute study sessions.
  - **100% Functional Features:**
    - Live countdown Pomodoro Study Timer (Start, Pause, Reset).
    - Dynamic task addition via form input (without page refresh).
    - Interactive completion checkboxes with strikethrough styling.
    - Instant task deletion with automatic counter and progress updates.
    - Category filter tabs (*All*, *Pending*, *Completed*).
  - **Simplicity & Speed:** Zero third-party libraries, pure native code that runs instantly in any browser.
- **Slide Layout & Visuals:** Screenshot of the FocusFlow interface centered with bullet points outlining the 5 functional components.

> **Speaker Notes (Viva Script):**
> "FocusFlow solves the daily challenge of tracking multiple engineering assignments and lab records. Unlike static mockups, every feature in FocusFlow works: the timer ticks down, new tasks can be added, checkboxes strike through finished tasks, delete buttons remove items, and the progress bar calculates completion in real time."

---

### SLIDE 3: Problem Description
- **Slide Title:** Problem Description
- **Subtitle:** Task Overload & Study Distractions
- **Bullet Points:**
  - **Scattered Deadlines:** Lab records and assignments for multiple subjects (SL Lab, OS, DBMS) are often lost across multiple notebooks and chat groups.
  - **Commercial App Bloat:** Popular task apps are filled with complex settings, advertisements, account logins, and unnecessary features.
  - **Lack of Dedicated Focus:** Students multitask without structured time blocks, resulting in study fatigue.
  - **Our Solution:** A single-page, distraction-free study notepad that opens locally in seconds and provides immediate feedback.
- **Slide Layout & Visuals:** Comparison table showing "Commercial Apps (Heavy, Slow, Distracting)" vs. "FocusFlow (Instant, Simple, 100% Functional)".

> **Speaker Notes (Viva Script):**
> "In college, we often lose track of lab deadlines because they are scattered. Many commercial apps are too complicated for quick daily use. FocusFlow gives students a single, clean screen with an integrated study timer and an instant checklist."

---

### SLIDE 4: Objectives
- **Slide Title:** Project Objectives
- **Bullet Points:**
  - **Semantic HTML5 Markup:** Utilize standard tags (`<header>`, `<main>`, `<section>`, `<ul>`, `<li>`, `<form>`) for clean, accessible document structure.
  - **CSS Box Model & Flexbox:** Apply clean padding, borders, and `display: flex` with `justify-content: space-between` for consistent horizontal alignment.
  - **Short, Explainable JavaScript:** Write concise, modular JavaScript under 100 lines for:
    - Timer countdowns using `setInterval()`.
    - Dynamic DOM manipulation using `createElement()` and `appendChild()`.
    - Event delegation for efficient item deletion and state toggling.
  - **Responsive Design:** Ensure complete usability on desktop monitors and mobile screens using media queries.
- **Slide Layout & Visuals:** Four numbered cards representing Structure, Layout, Interactivity, and Responsiveness.

> **Speaker Notes (Viva Script):**
> "Our objective was to practice the complete triad of web scripting—HTML for structure, CSS for layout, and JavaScript for interactivity. We specifically prioritized short, readable code so that every function could be easily explained in an academic viva."

---

### SLIDE 5: Expected Outcomes
- **Slide Title:** Expected Outcomes
- **Bullet Points:**
  - **A Fully Interactive Working Model:**
    - Timer counts down smoothly from 25:00 to 00:00 with Start, Pause, and Reset controls.
    - Adding a task updates the checklist instantly.
    - Checking a task toggles strikethrough text and switches status to "Done".
    - Deleting a task smoothly updates the list.
    - Live progress bar dynamically calculates:
      $$\text{Percentage} = \left(\frac{\text{Completed}}{\text{Total}}\right) \times 100\%$$
  - **Clean Code Architecture:** Separate `index.html`, `styles.css`, and `script.js` files with zero external dependencies.
- **Slide Layout & Visuals:** Showcase diagram highlighting the 5 interactive user touchpoints.

> **Speaker Notes (Viva Script):**
> "The expected outcome is a fully functional web dashboard. The timer ticks accurately, new tasks appear immediately upon pressing Enter, and the progress bar adjusts smoothly whenever tasks are checked or deleted."

---

### SLIDE 6: Algorithm
- **Slide Title:** System Algorithm & Logic Flow
- **Bullet Points:**
  - **1. Timer Logic:**
    - `timeLeft = 25 * 60` (1500 seconds).
    - `setInterval` decrements `timeLeft` by 1 every 1000ms.
    - Converts seconds into `MM:SS` format using `.padStart(2, '0')`.
  - **2. Task Addition Logic:**
    - Intercept form submit using `e.preventDefault()`.
    - Create `<li>` element using `document.createElement()`.
    - Append to `#taskList` and call `updateProgress()`.
  - **3. Event Delegation for Delete & Check:**
    - Attach listener to `#taskList` parent.
    - Checkbox click: toggle class `task-completed`.
    - Delete button click: call `e.target.closest('.task-item').remove()`.
  - **4. Progress Calculation:**
    - Count total `<li>` items and checked checkboxes.
    - Set `progressBarFill.style.width` and update text counter.
- **Slide Layout & Visuals:** Flowchart diagram showing the event listeners and DOM update pathways.

> **Speaker Notes (Viva Script):**
> "Here is our algorithmic workflow. When the user interacts with the app, JavaScript listens for events: the timer decrements seconds with setInterval, the form appends a new list item, and our event delegation listener removes items and triggers the updateProgress function."

---

### SLIDE 7: Core Technologies
- **Slide Title:** Core Technologies Used
- **Bullet Points:**
  - **HTML5:**
    - Semantic elements: `<header>`, `<main>`, `<section>`, `<ul>`, `<li>`, `<footer>`.
    - Standard form controls: `<input type="text">`, `<input type="checkbox">`, `<button>`.
  - **CSS3:**
    - Layout: CSS Flexbox (`display: flex`, `justify-content: space-between`, `align-items: center`).
    - Box Model: `box-sizing: border-box`, clean padding, and subtle shadows.
    - Mobile responsiveness: `@media (max-width: 600px)`.
  - **Vanilla JavaScript:**
    - Timers: `setInterval()` and `clearInterval()`.
    - DOM Manipulation: `createElement()`, `appendChild()`, `remove()`.
    - Event Handling: Event delegation and `e.preventDefault()`.
- **Slide Layout & Visuals:** HTML5, CSS3, and JavaScript logos displayed side-by-side with concise descriptions.

> **Speaker Notes (Viva Script):**
> "Our application uses 100% native web technologies. HTML5 provides semantic ontology, CSS3 Flexbox handles the fluid notepad layout, and Vanilla JavaScript manages the live countdown timer and DOM updates without any external frameworks."

---

### SLIDE 8: Key Code Snippets (Easy to Explain)
- **Slide Title:** Key Code Snippets
- **Snippet 1: Starting the Timer (`script.js`)**
```javascript
// Starts countdown every 1 second (1000ms)
startBtn.addEventListener("click", () => {
  if (timerId !== null) return;
  timerId = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
  }, 1000);
});
```
- **Snippet 2: Dynamic Progress Calculation (`script.js`)**
```javascript
function updateProgress() {
  const total = taskList.querySelectorAll(".task-item").length;
  const completed = taskList.querySelectorAll(".task-checkbox:checked").length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  progressBarFill.style.width = percent + "%";
  progressPercent.textContent = percent + "%";
}
```
- **Slide Layout & Visuals:** Two clean, syntax-highlighted code panels with annotations for viva explanation.

> **Speaker Notes (Viva Script):**
> "These two snippets demonstrate how simple the code is. Snippet 1 starts the timer using setInterval and decrements timeLeft every second. Snippet 2 counts total tasks and checked checkboxes, computes the percentage, and updates the progress bar width in two simple lines."

---

### SLIDE 9: Output & Visuals
- **Slide Title:** Project Output & Visual Verification
- **Visual Display Slots:**
  - **Panel 1 (Active Study Session):** View showing the timer actively counting down (e.g., 24:32) with Start/Pause controls.
  - **Panel 2 (Dynamic Tasks & Filters):** View showing newly added tasks, strikethrough styling for completed tasks, and filter tabs in action.
  - **Panel 3 (Live Progress Bar & Mobile View):** View showing the progress bar fill updated to 60% alongside the responsive mobile layout.
- **Slide Layout & Visuals:** A 3-screenshot display gallery with descriptive captions.

> **Speaker Notes (Viva Script):**
> "Slide 9 displays the rendered output. In Panel 1, you can see the active countdown timer. In Panel 2, tasks are dynamically added and checked off with clean strikethrough formatting. In Panel 3, the progress bar and counter automatically synchronize with the completed tasks."

---

### SLIDE 10: Conclusion & Questions
- **Slide Title:** Conclusion & Viva Q&A
- **Summary Points:**
  - **Project Realized:** Built a 100% functional, responsive student task tracker and Pomodoro timer.
  - **Pedagogical Takeaways:**
    - Semantic HTML5 structure.
    - One-dimensional CSS Flexbox alignments.
    - Clean DOM manipulation and event delegation in JavaScript.
  - **Code Quality:** Short, highly readable, and thoroughly commented for easy viva explanations.
- **Closing Remarks:**
  - *"Thank you for your valuable guidance."*
  - *"Ready for live demonstration and questions!"*
- **Slide Layout & Visuals:** Centered Thank You card with GRIET college crest and student details.

> **Speaker Notes (Viva Script):**
> "In conclusion, FocusFlow demonstrates that short, clean, and well-structured code can build a fully operational, responsive web application. I am ready to demonstrate the live application and answer any questions from the evaluators. Thank you!"

---
