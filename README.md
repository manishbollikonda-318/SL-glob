# FocusFlow: A Functional Student Task Tracker & Study Dashboard
**Course:** Scripting Languages Laboratory (SL LAB)  
**Institution:** Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)  
**Department:** Computer Science and Engineering / Information Technology  
**Academic Year:** 2025 – 2026

---

## 📖 Project Overview
**FocusFlow** is a 100% functional, minimalist web application built to help engineering students manage daily laboratory assignments, homework tasks, and Pomodoro study sessions. 

The project features a clean desktop study notepad design using **HTML5**, **CSS3 Flexbox**, and approximately 100 lines of clean, beginner-friendly **Vanilla JavaScript**.

---

## ✨ 100% Functional Features
1. **Interactive Pomodoro Study Timer**:
   - Live 25-minute countdown (`25:00`).
   - Working **Start Session**, **Pause**, and **Reset** controls.
   - Session complete alert.
2. **Dynamic Task Addition**:
   - Type in the input field and press Enter (or click `+ Add Task`) to instantly add an assignment to the list.
3. **Task Completion & Strikethrough**:
   - Clicking a checkbox strikes through the task text and changes the badge to "Done".
4. **Instant Task Deletion**:
   - Clicking the `&times;` button removes the task from the list immediately using event delegation.
5. **Interactive Filter Tabs**:
   - Filter by **All**, **Pending**, or **Completed** tasks with zero lag.
6. **Live Progress Bar & Counter**:
   - Automatically computes `(completed / total) * 100%` and updates the progress bar fill and remaining task counter dynamically.
7. **Responsive Design**:
   - Adapts smoothly to mobile smartphones and widescreen desktop monitors using CSS Flexbox.

---

## 📂 Project Structure
```text
SL GLOB/
├── index.html           # Semantic HTML5 document markup
├── styles.css           # Clean CSS3 Flexbox stylesheet
├── script.js           # Short, 100% functional vanilla JavaScript
├── DOCUMENTATION.md     # Full 14-section collegiate spiral-bind report
├── PRESENTATION.md      # 10-slide PowerPoint presentation text and viva scripts
└── README.md            # Project overview and viva preparation guide
```

---

## 💡 Quick Viva Explanation Guide

| Topic | How to Explain in Your Viva |
| :--- | :--- |
| **How does the timer work?** | *"We initialize `timeLeft = 25 * 60` (1500 seconds). When 'Start' is clicked, `setInterval` runs once every 1000ms (1 second), decrements `timeLeft`, and updates the `MM:SS` display."* |
| **How are tasks added?** | *"When the form is submitted, `e.preventDefault()` prevents the page from reloading. `document.createElement('li')` creates a new item with our HTML structure, and `taskList.appendChild()` attaches it."* |
| **How does deletion work?** | *"We use event delegation on the parent `#taskList`. When a click matches `.delete-btn`, `e.target.closest('.task-item').remove()` deletes the item, and we recalculate the progress bar."* |
| **How is Flexbox used?** | *"`body` uses `display: flex; justify-content: center;` to center the notepad. Each `.task-item` uses `justify-content: space-between;` to push the title to the left and tags to the right."* |

---

## 🚀 Live Demo & Links
- **Live GitHub Pages URL:** [https://manishbollikonda-318.github.io/SL-glob/](https://manishbollikonda-318.github.io/SL-glob/)
- **GitHub Repository:** [https://github.com/manishbollikonda-318/SL-glob](https://github.com/manishbollikonda-318/SL-glob)
