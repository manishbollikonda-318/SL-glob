# GOKARAJU RANGARAJU INSTITUTE OF ENGINEERING AND TECHNOLOGY
### (Autonomous Institution Affiliated to JNTUH, Hyderabad)
**Department of Computer Science and Engineering / Information Technology**  
**Academic Year: 2025 – 2026**

---

# A MICRO-PROJECT REPORT
### ON
# **FOCUSFLOW: A MINIMALIST STUDENT TASK TRACKER UI**

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
| **10**| Explanation | 11 |
| **11**| Future Enhancement | 13 |
| **12**| Project Success Summary | 14 |
| **13**| Conclusion | 15 |
| **14**| References | 16 |

---

## 1. ABSTRACT

In an academic environment, students balance multiple engineering subjects, lab records, assignments, and exam preparation daily. Maintaining focus and keeping track of pending deadlines often becomes overwhelming without a structured workflow. 

The objective of this micro-project, titled **"FocusFlow: A Minimalist Student Task Tracker UI"**, is to design and develop a clean, responsive, and student-friendly task management interface using core front-end scripting technologies: **HTML5** and **CSS3**. 

Unlike heavy modern commercial applications that distract users with excessive animations or complex menus, FocusFlow adopts a clean, physical notepad aesthetic. It incorporates a static Pomodoro study session timer, an assignment input field, filter tabs, a structured daily checklist with priority badges, and a visual completion progress bar. 

Built exclusively with semantic HTML tags and standard CSS Flexbox, this project demonstrates how clean code and simple CSS properties can produce an accessible, responsive study dashboard without any complex external dependencies.

---

## 2. INTRODUCTION

The World Wide Web is fundamentally built on two core declarative languages: **HyperText Markup Language (HTML)** for organizing document structure and **Cascading Style Sheets (CSS)** for visual presentation. In the **Scripting Languages Laboratory (SL LAB)** curriculum at GRIET, mastering these fundamental building blocks is crucial before advancing to dynamic client-side and server-side scripting.

A task tracker is one of the most practical, universally understood web applications. It provides direct, real-world utility while testing a developer's understanding of:
- Semantic document structure (`<header>`, `<main>`, `<section>`, `<ul>`, `<li>`, `<footer>`).
- Form elements and accessibility (`<input>`, `<label>`, `<button>`).
- The CSS Box Model (Margins, Borders, Padding, and Content Dimensions).
- One-dimensional flexible layouts using CSS Flexbox (`display: flex`).

FocusFlow was designed to model a student's physical daily study planner. It brings together daily homework tracking and dedicated focus study sessions into a single, cohesive, distraction-free view.

---

## 3. OUTLINING THE PROBLEM

### 3.1 The Daily Challenge of Student Task Management
Engineering students at GRIET regularly manage concurrent deadlines across theoretical coursework, weekly laboratory assignments (such as Scripting Languages Lab, Operating Systems, DBMS), and project submissions. 

Common issues students face include:
1. **Scattered Notes:** Tasks are frequently jotted down across rough notebooks, chat groups, or random sticky notes, leading to forgotten deadlines.
2. **Loss of Focus:** Without dedicated time blocks, students often multitask inefficiently, leading to study fatigue.
3. **Overcomplicated Task Apps:** Many commercial productivity tools are cluttered with excessive features, account logins, third-party trackers, and advertisements that distract from actual study.

### 3.2 The Need for a Simple, Clean Solution
There is a clear need for a lightweight, accessible, and distraction-free task tracker that opens instantly in any standard browser. By building this interface with pure HTML5 and CSS3, we demonstrate that a high-utility, aesthetic user experience can be achieved through disciplined layout design and standard CSS styling.

---

## 4. KEY FEATURES

FocusFlow includes the following core functional and visual features:

1. **Notepad-Style Card Layout:**
   - A clean, centered white card (`max-width: 720px`) with subtle borders and gentle box shadows on a soft grey background (`#f4f6f9`), creating a comfortable, paper-like study notepad feel.

2. **Static Pomodoro Study Timer Section:**
   - A dedicated study block displaying the active subject name, a large 25:00 focus timer display, and three primary control buttons (*Start Session*, *Pause*, *Reset*).

3. **Task Input Form:**
   - A full-width text input field paired with a clear "+ Add Task" button, allowing students to type new assignments and lab deadlines.

4. **Category Filter Tabs & Counter:**
   - Filter buttons (*All*, *Pending*, *Completed*) alongside an active counter displaying remaining tasks for the day.

5. **Structured Daily Checklist:**
   - An unordered list (`<ul>`) where each task item (`<li>`) includes an interactive checkbox, subject tags (e.g., `SL Lab`, `Web Tech`, `Viva Prep`), priority chips (`High Priority`, `Medium`), and a delete action button.

6. **Completed Task Distinction:**
   - Finished tasks feature a light grey background and clean strikethrough text formatting to provide clear visual satisfaction of progress.

7. **Daily Study Progress Bar:**
   - A visual progress meter showing the percentage of completed tasks for the day (e.g., 40% completion).

8. **Fully Responsive Design:**
   - Uses CSS media queries to cleanly stack elements vertically on smaller mobile displays.

---

## 5. HARDWARE AND SOFTWARE REQUIREMENTS

### 5.1 Hardware Requirements
- **System Architecture:** Standard Desktop PC or Laptop.
- **Processor:** Intel Core i3 / AMD Ryzen 3 or equivalent.
- **RAM:** Minimum 2 GB (4 GB recommended).
- **Hard Disk Space:** Less than 10 MB required for project source files.
- **Display Resolution:** $1366 \times 768$ pixels or higher.
- **Input Devices:** Standard keyboard and mouse.

### 5.2 Software Requirements
- **Operating System:** Windows 10/11, macOS, or Linux (Ubuntu).
- **Text Editor / IDE:** Visual Studio Code, Notepad++, or Antigravity IDE.
- **Web Browser:** Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).
- **Execution Engine:** Native web browser engine (no compiler, Node.js, or external server required).

---

## 6. ALGORITHM

The step-by-step logic of how the FocusFlow interface is structured, loaded, and styled by the browser is as follows:

- **Step 1: Document Initialization**
  - Define the `<!DOCTYPE html>` declaration and set the document language to English (`<html lang="en">`).
  - Specify the `<meta charset="UTF-8">` character encoding and configure the viewport meta tag for mobile responsiveness.
  - Link the external stylesheet (`styles.css`) in the `<head>` section.

- **Step 2: Page Centering & Background Setup**
  - In CSS, apply a global reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`).
  - Style the `<body>` element with `background-color: #f4f6f9` and apply `display: flex; justify-content: center;` to center the main container horizontally.

- **Step 3: Notepad Container Construction**
  - Create a `<div class="notepad-container">` with a `max-width: 720px`, white background (`#ffffff`), rounded corners (`border-radius: 12px`), and a subtle drop shadow (`box-shadow`).

- **Step 4: Header & Meta Branding**
  - Build `<header class="app-header">` containing the application title ("FocusFlow"), a student badge ("GRIET • SL LAB"), and a descriptive subtitle. Use Flexbox to position the title on the left and the badge on the right.

- **Step 5: Study Timer UI Assembly**
  - Inside a `<section class="timer-section">`, construct a centered card containing the session label, subject tag, time display (`25:00`), and control buttons.

- **Step 6: Add Task Input Row**
  - Implement a `<form class="task-form">` using `display: flex` with `gap: 10px`. Assign `flex: 1` to the text input so it automatically expands to fill the available row width next to the submit button.

- **Step 7: Task Checklist Rendering**
  - Use an unordered list (`<ul class="task-list">`) with `list-style: none`.
  - For each task item (`<li class="task-item">`), use `display: flex; justify-content: space-between; align-items: center;` to align the checkbox and title on the left, and subject tags and delete button on the right.

- **Step 8: Progress Bar & Footer Integration**
  - Render a progress bar container with a styled inner fill div set to a percentage width (e.g., `width: 40%`).
  - Add the footer with college and lab identification.

- **Step 9: Responsive Viewport Adaptation**
  - Add a `@media (max-width: 600px)` media query rule to shift flex directions from `row` to `column` on small mobile screens.

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
        └── [<div class="notepad-container">] (Max-width: 720px, white card)
              │
              ├── [<header class="app-header">]
              │     ├── [div.header-top] -> [h1 "FocusFlow"] + [span "GRIET • SL LAB"]
              │     └── [p "Daily Student Task Tracker & Study Dashboard"]
              │
              └── [<main class="app-content">]
                    │
                    ├── [<section class="timer-section">]
                    │     └── [div.timer-card]
                    │           ├── [div.timer-info] (Focus session & subject name)
                    │           ├── [div.timer-display] (25:00 digits + Pomodoro tag)
                    │           └── [div.timer-controls] (Start, Pause, Reset buttons)
                    │
                    ├── [<section class="add-task-section">]
                    │     └── [<form class="task-form">]
                    │           ├── [<input type="text" placeholder="...">]
                    │           └── [<button "+ Add Task">]
                    │
                    ├── [<section class="task-filter-section">]
                    │     ├── [div.filter-group] (All, Pending, Completed tabs)
                    │     └── [span.filter-counter] ("3 tasks remaining today")
                    │
                    ├── [<section class="task-list-section">]
                    │     └── [<ul class="task-list">]
                    │           ├── [<li class="task-item">] (Task 1: SL Lab Micro Project)
                    │           ├── [<li class="task-item">] (Task 2: Practice Flexbox)
                    │           ├── [<li class="task-item">] (Task 3: Prepare Viva Prep)
                    │           ├── [<li class="task-item task-completed">] (Task 4: Done)
                    │           └── [<li class="task-item task-completed">] (Task 5: Done)
                    │
                    └── [<section class="progress-section">]
                          ├── [div.progress-labels] (Completion text + 40%)
                          └── [div.progress-bar-container] -> [div.progress-bar-fill]
```

### 7.2 User Visual Interaction Flow
```text
           +-----------------------------------------+
           | User Opens FocusFlow in Web Browser     |
           +-----------------------------------------+
                                |
                                v
           +-----------------------------------------+
           | Browser Loads HTML & Applies styles.css |
           +-----------------------------------------+
                                |
                                v
           +-----------------------------------------+
           | User Views Study Timer & Focus Subject  |
           +-----------------------------------------+
                                |
                                v
           +-----------------------------------------+
           | User Views Daily Task List & Priorities |
           +-----------------------------------------+
                                |
       +------------------------+------------------------+
       |                                                 |
       v                                                 v
[Check Completed Task]                        [Type in New Task Box]
       |                                                 |
       v                                                 v
[Checkbox Checked & Strikethrough]            [Click '+ Add Task' Button]
       |                                                 |
       +------------------------+------------------------+
                                |
                                v
           +-----------------------------------------+
           | Observe Visual Progress Bar & Summary   |
           +-----------------------------------------+
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

---

## 9. OUTPUT

When printing screenshots for the final lab record, take and mount the following three clear screenshots:

### 9.1 Screenshot 1: Full Desktop Notepad View
- **Description:** Shows the entire FocusFlow user interface centered on a clean desktop browser window ($1920 \times 1080$).
- **Visible Elements:** The soft grey page background, the top header with the GRIET SL LAB badge, the Pomodoro study timer displaying "25:00", the task input bar, the five daily task items with subject badges, the 40% progress bar, and the footer.

### 9.2 Screenshot 2: Daily Tasks & Completed States Close-Up
- **Description:** A focused view of the task list section.
- **Visible Elements:** Clear visual distinction between pending tasks (white background with colored priority tags) and completed tasks (strikethrough text with light green "Done" badges and checked checkboxes).

### 9.3 Screenshot 3: Mobile Responsive Layout View
- **Description:** Shows how the interface neatly reflows on a mobile screen width (tested via Browser DevTools at 375px width).
- **Visible Elements:** The task items gracefully stacking checkbox labels above subject badges, the input field stacking above the "+ Add Task" button, and timer controls wrapping neatly.

---

## 10. EXPLANATION

### 10.1 Semantic HTML5 Elements
Instead of using generic `<div>` tags everywhere, FocusFlow utilizes semantic HTML5 tags:
- `<header>`: Encloses the application branding, title, and institutional identification.
- `<main>`: Contains the primary user interface sections.
- `<section>`: Divides the application logically into the Timer, Add Task, Filter, Task List, and Progress sections.
- `<ul>` and `<li>`: Used for the task checklist, representing a true list of items for accessibility and clean CSS targeting.
- `<label>` and `<input>`: Provides standard form input accessibility, allowing users to toggle checkboxes by clicking directly on the task text.

### 10.2 CSS Box Model in Practice
The CSS Box Model is the foundation of this project's layout:
1. **Content:** The actual text, timer digits, and icons.
2. **Padding:** Generous internal whitespace (e.g., `padding: 28px 32px` in `.app-content`) ensures components do not feel cramped.
3. **Borders:** Thin, subtle borders (`border: 1px solid #e2e8f0`) provide clean structure without looking harsh.
4. **Margins:** Controlled external spacing (e.g., `margin-bottom: 24px`) keeps sections clearly separated.

### 10.3 CSS Flexbox Alignment
CSS Flexbox (`display: flex`) is used throughout FocusFlow for one-dimensional layouts:
- **Horizontal Centering:**
  ```css
  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  ```
- **Space-Between Alignment in Task Rows:**
  ```css
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ```
  This automatically pushes the checkbox and task title to the far left, while anchoring the subject tags and delete button to the far right.
- **Flexible Form Input:**
  ```css
  .task-input {
    flex: 1;
  }
  ```
  By setting `flex: 1`, the input field dynamically expands to fill all remaining horizontal room, regardless of the screen width.

---

## 11. FUTURE ENHANCEMENT

FocusFlow provides a solid structural and visual base. Future enhancements can extend its capabilities:

1. **Adding JavaScript Interactivity:**
   - Implement functional JavaScript to make the Pomodoro timer actually countdown from 25:00 to 00:00 with start, pause, and reset functionality.
   - Dynamically append new task items to the list when the user submits the form.
   - Allow deleting tasks and toggling completed status dynamically.
2. **Local Storage Persistence (`localStorage`):**
   - Store tasks in the browser's `localStorage` so tasks remain saved even after refreshing the page or closing the browser.
3. **Audio Notifications:**
   - Play a gentle chime when a 25-minute study session finishes.
4. **Dark Mode Toggle:**
   - Add a simple button to switch between the current physical notepad theme and a dark study theme.

---

## 12. PROJECT SUCCESS SUMMARY

The FocusFlow micro-project successfully satisfies all curriculum objectives for the Scripting Languages Laboratory:
- **Clean, Understandable Code:** The HTML and CSS files are thoroughly commented, making them easy to understand and explain during oral viva examinations.
- **Visual Polish:** Achieves a modern, distraction-free aesthetic comparable to popular student productivity tools.
- **Zero External Dependencies:** Built with 100% native HTML5 and CSS3, requiring no external frameworks, CDNs, or complex build setups.
- **Complete Responsiveness:** Thoroughly tested and verified across desktop, tablet, and smartphone screen dimensions.

---

## 13. CONCLUSION

The **FocusFlow: A Minimalist Student Task Tracker UI** micro-project successfully demonstrates how fundamental web technologies—semantic HTML5 and standard CSS3—can be used to build a clean, purposeful, and visually appealing web interface. 

By focusing on clean layout design, thoughtful whitespace, readable typography, and the versatile power of CSS Flexbox, this project highlights that complex frameworks are not always necessary to solve everyday student productivity problems. 

This micro-project has provided practical, hands-on experience in frontend styling, box-model mechanics, and responsive design, establishing a strong foundation for future web development coursework.

---

## 14. REFERENCES

1. **Mozilla Developer Network (MDN Web Docs):** *HTML5 Semantic Elements and Document Structure*. [https://developer.mozilla.org/en-US/docs/Glossary/Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
2. **Mozilla Developer Network (MDN Web Docs):** *Basic Concepts of Flexbox*. [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
3. **World Wide Web Consortium (W3C):** *CSS Flexible Box Layout Module Level 1*. [https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)
4. **W3Schools Online Web Tutorials:** *CSS Box Model, Borders, Margin, and Padding*. [https://www.w3schools.com/css/css_boxmodel.asp](https://www.w3schools.com/css/css_boxmodel.asp)
5. **GRIET Academic Regulations & Lab Manual:** *Scripting Languages Laboratory (SL LAB)*, Department of CSE & IT, Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad.
