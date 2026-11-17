# GOKARAJU RANGARAJU INSTITUTE OF ENGINEERING AND TECHNOLOGY
### (Autonomous Institution Affiliated to JNTUH, Hyderabad)
**Department of Computer Science and Engineering / Information Technology**  
**Academic Year: 2025 – 2026**

---

# A MICRO-PROJECT REPORT
### ON
# **FOCUSFLOW: A FUNCTIONAL STUDENT TASK TRACKER & STUDY DASHBOARD**

**Course Name:** Scripting Languages Laboratory (SL LAB)  
**Course Code:** SL Lab GLOB  
**Class / Year:** B.Tech — III Year / II Semester  

---

## TABLE OF CONTENTS

| S.No. | Section Title | Page No. |
| :---: | :--- | :---: |
| **1** | Abstract | 1 |
| **2** | Introduction | 2 |
| **3** | Outlining the Problem | 3 |
| **4** | Key Features | 4 |
| **5** | Hardware and Software Requirements | 5 |
| **6** | Algorithm | 6 |
| **7** | Flowchart | 7 |
| **8** | Source Code | 8 |
| **9** | Output | 10 |
| **10**| Explanation (HTML, CSS Flexbox & JavaScript) | 11 |
| **11**| Future Enhancement | 13 |
| **12**| Project Success Summary | 14 |
| **13**| Conclusion | 15 |
| **14**| References | 16 |

---

## 1. ABSTRACT

In an academic environment, students balance multiple engineering subjects, lab records, assignments, and exam preparation daily. Maintaining focus and keeping track of pending deadlines often becomes overwhelming without a structured workflow. 

The objective of this micro-project, titled **"FocusFlow: A Functional Student Task Tracker & Study Dashboard"**, is to design and develop a clean, responsive, and 100% functional task management interface using core front-end scripting technologies: **HTML5**, **CSS3**, and clean **Vanilla JavaScript**.

Unlike heavy commercial applications that distract users with complex menus, FocusFlow adopts a clean, physical notepad aesthetic. It features an interactive 25-minute Pomodoro study countdown timer, an assignment input field that adds real tasks dynamically to the DOM, interactive checkboxes that strike through completed tasks, delete buttons that remove items, filter tabs (*All*, *Pending*, *Completed*), and a live visual completion progress bar that recalculates in real-time. 

Built with semantic HTML tags, standard CSS Flexbox, and short, beginner-friendly JavaScript, this project demonstrates how clean code produces an intuitive, fully operational study dashboard without any external frameworks.

---

## 2. INTRODUCTION

The World Wide Web is fundamentally built on three core scripting layers:
1. **HTML5** for organizing document structure and semantic meaning.
2. **CSS3** for visual presentation, spacing, and responsive layout.
3. **JavaScript** for client-side event handling and dynamic DOM manipulation.

In the **Scripting Languages Laboratory (SL LAB)** curriculum at GRIET, connecting these three technologies into a working, interactive application is the primary learning objective. 

FocusFlow demonstrates this complete lifecycle through a student-centric task tracker and study timer. It models a physical desktop study notebook, allowing students to set dedicated focus study intervals and maintain a checklist of laboratory experiments and homework tasks with immediate visual feedback.

---

## 3. OUTLINING THE PROBLEM

### 3.1 The Daily Challenge of Student Task Management
Engineering students at GRIET regularly manage concurrent deadlines across theoretical coursework, weekly laboratory assignments (such as Scripting Languages Lab, Operating Systems, DBMS), and project submissions. 

Common issues students face include:
1. **Scattered Deadlines:** Tasks are frequently jotted down across rough notebooks, chat groups, or random sticky notes, leading to forgotten deadlines.
2. **Study Fatigue:** Without dedicated focus blocks, students often multitask inefficiently and struggle to sustain deep focus.
3. **Overcomplicated Commercial Apps:** Many commercial productivity tools are cluttered with excessive features, account logins, advertisements, and complex interfaces that distract from actual studying.

### 3.2 The Need for a Simple, Functional Solution
Students need an instant-loading, clean application that runs directly in any browser. FocusFlow provides a practical, straightforward solution with zero setup, allowing students to start a focus timer and organize tasks with ease.

---

## 4. KEY FEATURES

FocusFlow includes the following 100% functional and visual features:

1. **Notepad-Style Card Layout:**
   - A clean, centered white card (`max-width: 680px`) with subtle borders and soft shadows on a gentle grey background (`#f4f6f9`), creating a comfortable, paper-like study notepad feel.

2. **Customizable & Flexible Study Session Timer:**
   - Allows students to adjust the timer freely and study for as much time as they need (from short 15-minute quick reviews to 90+ minute deep study blocks).
   - Features quick-pick duration presets (**15m**, **25m**, **45m**, **60m**, **90m**), stepper buttons (**-5m** and **+5m**), and a direct numeric input field where any custom number of minutes can be typed.
   - Fully functional *Start Session*, *Pause*, and *Reset* controls powered by JavaScript's `setInterval()`. Formats minutes and seconds cleanly (`MM:SS`) and alerts the user upon completion.

3. **Dynamic Task Addition:**
   - Typing into the task input box and clicking `+ Add Task` (or pressing Enter) dynamically creates and appends a new task item (`<li>`) to the document without refreshing the page (`e.preventDefault()`).

4. **Task Completion & Strikethrough:**
   - Toggling the checkbox strikes through the task text, switches the status badge to "Done", and recalculates the progress bar.

5. **Instant Task Deletion:**
   - Clicking the `&times;` delete button removes the selected task from the list immediately using event delegation (`closest('.task-item').remove()`).

6. **Interactive Filter Tabs:**
   - Clicking *All*, *Pending*, or *Completed* filters the displayed tasks using basic DOM style toggling (`display: flex` vs. `display: none`).

7. **Live Progress Bar & Counter:**
   - Automatically computes:
     $$\text{Progress} = \left( \frac{\text{Completed Tasks}}{\text{Total Tasks}} \right) \times 100\%$$
     and updates the progress bar fill width and remaining count dynamically.

8. **Fully Responsive Design:**
   - Uses standard CSS Flexbox and media queries (`@media (max-width: 600px)`) to ensure the dashboard works smoothly on smartphones and laptops alike.

---

## 5. HARDWARE AND SOFTWARE REQUIREMENTS

### 5.1 Hardware Requirements
- **System Architecture:** Standard Desktop PC or Laptop.
- **Processor:** Intel Core i3 / AMD Ryzen 3 or equivalent.
- **RAM:** Minimum 2 GB (4 GB recommended).
- **Hard Disk Space:** Less than 10 MB required for project source files.
- **Display Resolution:** $1366 \times 768$ pixels or higher.
- **Input Devices:** Standard keyboard and mouse/trackpad.

### 5.2 Software Requirements
- **Operating System:** Platform independent (Windows 10/11, macOS, or Linux Ubuntu).
- **Text Editor / IDE:** Visual Studio Code, Notepad++, or Antigravity IDE.
- **Web Browser:** Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
- **Execution Engine:** Standard browser JavaScript runtime (no Node.js or external web servers required).

---

## 6. ALGORITHM

### 6.1 Timer Execution & Custom Duration Algorithm
1. Initialize `totalMinutes = 25`, `timeLeft = totalMinutes * 60` (1500 seconds), and `timerId = null`.
2. Duration Adjustment (`setDuration(mins)`):
   - When the user selects a preset (15m, 25m, 45m, 60m, 90m), clicks `+5m`/`-5m`, or types a custom number into the numeric input, invoke `setDuration(mins)`.
   - Update `totalMinutes = mins` (bounded between 1 and 300 minutes).
   - Clear any running interval via `clearInterval(timerId)` and reset `timeLeft = totalMinutes * 60`.
   - Update the display text to the newly selected minutes (`MM:00`).
3. When the user clicks **Start Session**:
   - Check if `timerId` is already active; if not, call `setInterval()` every $1000\text{ ms}$.
   - On each tick, decrement `timeLeft` by $1$ and compute:
     $$\text{minutes} = \lfloor \text{timeLeft} / 60 \rfloor, \quad \text{seconds} = \text{timeLeft} \pmod{60}$$
   - Format with `.padStart(2, '0')` and update `timerDisplay.textContent`.
   - If `timeLeft === 0`, clear the interval and notify the student with a completion alert.
4. When the user clicks **Pause**:
   - Call `clearInterval(timerId)` and set `timerId = null`.
5. When the user clicks **Reset**:
   - Stop the interval, set `timeLeft = totalMinutes * 60`, and reset the display to the chosen duration.

### 6.2 Task Addition & Progress Update Algorithm
1. Intercept the task form submission via `e.preventDefault()`.
2. Read the sanitized value from `taskInput.value.trim()`.
3. If not empty, instantiate a new `<li>` element populated with checkbox, title, subject badge, and delete button.
4. Append the `<li>` to `#taskList` and clear the input field.
5. Invoke `updateProgress()`:
   - Query all `.task-item` elements ($N_{\text{total}}$).
   - Query all `.task-checkbox:checked` elements ($N_{\text{completed}}$).
   - Compute percentage: $P = \text{round}\left((N_{\text{completed}} / N_{\text{total}}) \times 100\right)$.
   - Mutate `progressBarFill.style.width = P + "%"`.
   - Update text counter to display remaining tasks ($N_{\text{total}} - N_{\text{completed}}$).

---

## 7. FLOWCHART

### 7.1 Text-Based DOM Component Tree
```text
[Document: index.html]
  │
  ├── [<head>] (Meta tags, Title, styles.css link)
  │
  └── [<body>] (Centered via Flexbox, background: #f4f6f9)
        │
        └── [<div class="notepad-container">] (Max-width: 680px, white card)
              │
              ├── [<header class="app-header">]
              │     ├── [div.header-top] -> [h1 "FocusFlow"] + [span "GRIET • SL LAB"]
              │     └── [p "Daily Student Task Tracker & Study Dashboard"]
              │
              └── [<main class="app-content">]
                    │
                    ├── [<section class="timer-section">]
                    │     └── [div.timer-card]
                    │           ├── [div.timer-display] -> [#timerDisplay "25:00"]
                    │           └── [div.timer-controls] -> [#startBtn, #pauseBtn, #resetBtn]
                    │
                    ├── [<section class="add-task-section">]
                    │     └── [<form id="taskForm">]
                    │           ├── [<input id="taskInput">]
                    │           └── [<button type="submit" "+ Add Task">]
                    │
                    ├── [<section class="task-filter-section">]
                    │     ├── [div.filter-group] -> [All, Pending, Completed buttons]
                    │     └── [#taskCounter "3 tasks remaining today"]
                    │
                    ├── [<section class="task-list-section">]
                    │     └── [<ul id="taskList">]
                    │           └── [<li class="task-item">] (Checkboxes, Titles, Badges, &times; buttons)
                    │
                    └── [<section class="progress-section">]
                          ├── [#progressPercent "40%"]
                          └── [div.progress-bar-container] -> [#progressBarFill]
```

### 7.2 Event-Driven Interactivity Flowchart
```text
                 +-----------------------------------+
                 | User Interacts with FocusFlow UI  |
                 +-----------------------------------+
                                   |
         +-------------------------+-------------------------+
         |                         |                         |
         v                         v                         v
  [Timer Buttons]          [Add Task Form]           [Task Item Actions]
         |                         |                         |
         v                         v                         v
- Click Start:            - Submit Form:            - Click Checkbox:
  setInterval(1s)           e.preventDefault()        Toggle .task-completed
- Click Pause:            - Create <li> Element     - Click Delete (&times;):
  clearInterval()         - Append to #taskList       closest('.task-item').remove()
- Click Reset:            - Clear Input Box                  |
  Reset to 25:00                   |                         |
         |                         +------------+------------+
         v                                      |
[Update Timer Display]                          v
                                      [Invoke updateProgress()]
                                                |
                                                v
                                      - Count Total & Completed
                                      - Set Progress Bar Width %
                                      - Update Remaining Counter
```

---

## 8. SOURCE CODE

### 8.1 HTML Structure (`index.html`)
*(Paste the complete `index.html` file content here during spiral binding).*

```html
<!-- Complete index.html source code placeholder -->
<!-- Ref: See project index.html file in repository -->
```

### 8.2 CSS Stylesheet (`styles.css`)
*(Paste the complete `styles.css` file content here during spiral binding).*

```css
/* Complete styles.css source code placeholder */
/* Ref: See project styles.css file in repository */
```

### 8.3 JavaScript Logic (`script.js`)
*(Paste the complete `script.js` file content here during spiral binding).*

```javascript
/* Complete script.js source code placeholder */
/* Ref: See project script.js file in repository */
```

---

## 9. OUTPUT

When demonstrating the project during your lab review, take the following three clear screenshots:

### 9.1 Screenshot 1: Desktop Overview & Active Timer
- **Description:** Full view of the FocusFlow interface centered on a desktop browser window ($1920 \times 1080$).
- **Visible Elements:** The soft grey background, the header with GRIET SL LAB badge, the active countdown timer (e.g., ticking down at 24:32), the task input bar, the task list, and the 40% progress bar.

### 9.2 Screenshot 2: Dynamic Task Addition & Completed Strikethrough
- **Description:** A focused view showing a freshly added task (e.g., "Review Experiment 4 Code") and checked tasks with strikethrough styling and green "Done" badges.
- **Visible Elements:** The live progress bar automatically updated to 50% or 60% reflecting completed tasks.

### 9.3 Screenshot 3: Filtered View (Completed Only) & Mobile View
- **Description:** The interface with the "Completed" filter tab active, displaying only finished tasks, or rendered on a mobile screen width (375px) showing responsive vertical stacking.

---

## 10. EXPLANATION (HTML, CSS FLEXBOX & JAVASCRIPT)

### 10.1 HTML Semantic Structure
- `<header>`, `<main>`, `<section>`, and `<footer>` define the document's logical landmark regions.
- `<ul>` and `<li>` represent the checklist, ensuring proper accessibility for keyboard and screen-reader navigation.
- Accessible form elements (`<input>`, `<button>`, `<form>`) allow both mouse clicks and keyboard "Enter" key submissions.

### 10.2 CSS Flexbox Mechanics
Flexbox is used throughout to solve common alignment challenges:
1. **Container Centering:**
   ```css
   body {
     display: flex;
     justify-content: center;
     align-items: flex-start;
   }
   ```
2. **Two-Sided Row Layout (Left content vs. Right actions):**
   ```css
   .task-item {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   ```
   `justify-content: space-between` pushes the checkbox and title to the left edge, and the badges and delete button to the right edge.
3. **Flexible Input Expansion:**
   ```css
   .task-input {
     flex: 1;
   }
   ```
   `flex: 1` tells the text box to take up all available remaining space on the line.

### 10.3 JavaScript Functionality (Short & Easy to Explain)
The JavaScript logic is structured into four intuitive sections:
1. **The Timer (`setInterval` and `clearInterval`):**
   - `setInterval(callback, 1000)` executes the countdown every second.
   - `clearInterval(timerId)` stops the countdown when Paused or Reset.
2. **Dynamic DOM Creation (`document.createElement`):**
   - When the form is submitted, `createElement('li')` creates a new list item and `appendChild(li)` inserts it into the page.
3. **Event Delegation (`taskList.addEventListener`):**
   - Instead of attaching click listeners to every single delete button, a single listener is attached to the parent `#taskList`. Using `e.target.closest('.task-item').remove()`, it efficiently removes any task that was clicked.
4. **Automatic Progress Math:**
   - Queries `querySelectorAll('.task-checkbox:checked')` to get the completed count and calculates the percentage, setting `progressBarFill.style.width`.

---

## 11. FUTURE ENHANCEMENT

FocusFlow provides a complete working model that can be expanded in future semesters:
1. **Local Storage Persistence (`localStorage`):**
   - Save tasks to `localStorage.setItem()` so tasks remain saved even when the browser is closed or refreshed.
2. **Sound Alerts:**
   - Play a gentle notification sound when the 25-minute Pomodoro timer reaches 00:00 using the HTML5 Audio API.
3. **Custom Session Lengths:**
   - Allow students to choose between 25-minute study intervals and 5-minute break intervals.
4. **Dark Mode Toggle:**
   - Add a simple toggle button to switch between the light notepad theme and a dark study theme.

---

## 12. PROJECT SUCCESS SUMMARY

The FocusFlow micro-project successfully satisfies all curriculum objectives for the Scripting Languages Laboratory:
- **100% Functional:** The timer ticks, new tasks can be added, checkboxes strike through completed tasks, delete buttons work, and the progress bar updates live.
- **Short & Clean Code:** Built in approximately 100 lines of readable JavaScript that is easy to explain during viva examinations.
- **Visual Polish:** Clean, distraction-free aesthetic with proper typography and spacing.
- **Zero External Dependencies:** 100% native HTML5, CSS3, and JavaScript requiring no third-party libraries.

---

## 13. CONCLUSION

The **FocusFlow: A Functional Student Task Tracker & Study Dashboard** micro-project successfully demonstrates how HTML5, CSS3 Flexbox, and Vanilla JavaScript work harmoniously to build an interactive, useful web application.

By keeping the code concise, modular, and well-commented, this project proves that complex external libraries are not necessary to create an engaging, responsive, and functional student productivity tool. 

This project establishes a strong foundation in DOM manipulation, event-driven programming, and CSS layout design for future coursework in web technologies and software engineering.

---

## 14. REFERENCES

1. **Mozilla Developer Network (MDN Web Docs):** *Manipulating the DOM with JavaScript*. [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
2. **Mozilla Developer Network (MDN Web Docs):** *WindowOrWorkerGlobalScope.setInterval()*. [https://developer.mozilla.org/en-US/docs/Web/API/setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
3. **Mozilla Developer Network (MDN Web Docs):** *CSS Flexible Box Layout*. [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
4. **W3Schools Online Web Tutorials:** *JavaScript DOM Event Listeners*. [https://www.w3schools.com/js/js_htmldom_eventlistener.asp](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
5. **GRIET Academic Regulations & Lab Manual:** *Scripting Languages Laboratory (SL LAB)*, Department of CSE & IT, Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad.
