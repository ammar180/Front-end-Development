# Tic Tac Toe Game

## 📌 Overview

A classic Tic Tac Toe game implementation using **HTML**, **CSS**, and **JavaScript**. The game features a clean interface, player customization, and score tracking.

---

## 🚀 Features

### 🔸 Player Setup
* Customizable player names
* Symbol selection (X/O) for Player 1
* Automatic symbol assignment for Player 2

### 🔸 Game Board
* 3x3 grid layout
* Clear visual feedback
* Responsive button design
* Dotted grid lines

### 🔸 Game Logic
* Alternating turns between players
* Win detection for:
  * Horizontal matches
  * Vertical matches
  * Diagonal matches
* Draw detection
* Score tracking

### 🔸 Controls
* Reset button for new round
* New Game button for fresh start
* Points display for both players

---

## 🎨 Visual Design
* Clean and minimalist interface
* Contrasting colors for readability
* Responsive layout
* Hover effects on buttons
* Dotted grid pattern

---

## 💾 Technical Implementation

```js
// Game Matrix Structure
[
    ['a0', 'a1', 'a2'],
    ['b0', 'b1', 'b2'],
    ['c0', 'c1', 'c2']
]

// Win conditions checked:
- Horizontal rows
- Vertical columns
- Both diagonals
```

---

## 📁 File Structure

```
/Tic_Tac_Toe-Game
│
├── index.html    # Game structure and UI
├── style.css    # Visual styling
└── script.js    # Game logic
```

---

## ☁️ Live Demo

Try the game at: [Tic Tac Toe Demo](https://ammar180.github.io/FrontEnd-Development/Tic_Tac_Toe-Game)

---

## ✅ Technical Details

* Pure JavaScript implementation
* DOM manipulation for UI updates
* Event-driven architecture
* Flexbox for layout
* CSS transitions for interactivity
