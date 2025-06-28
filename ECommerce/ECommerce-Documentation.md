# E-commerce Front-End Application

## 📌 Overview

This project is a front-end e-commerce web application developed using **HTML**, **CSS**, and **JavaScript**. The system provides users with functionality to browse products, manage accounts (Login, Sign-Up, Forget Password), and submit product reviews.

---

## 🚀 Features

### 🔸 Home Page

* Browse products across **4 categories**.
* Each category displays **2 products per page**.
* Includes a **slider**-based navigation bar.
* Click “Buy Now”:

  * If logged in: navigates to **Shopping Cart**.
  * If not logged in: navigates to **Login Page**.
* Layout:

  * **Header**: App name.
  * **Navigation Bar**: Slider for category switching.
  * **Body**: Products displayed in distinct `<div>`s.
  * **Footer**: Contact info, branches, accounts.

### 🔸 Login Page

* Enter existing **Username** and **Password** to log in.
* Redirects to **Review Page** on success.
* Shows error and reloads on failure.
* Buttons:

  * **Login**
  * **Sign-Up** (navigates to Sign-Up form)

### 🔸 Sign-Up Page

* Form fields:

  * Username
  * Password
  * Age
  * Gender
  * Phone Number
  * City
* Validations:

  * Password: < 8 characters, letters & digits
  * Age: 18–60
  * Gender: "male" or "female"
  * Phone: 11 digits
* Redirects to **Login Page** after successful sign-up.

### 🔸 Forget Password

* Two input fields to update the password.

### 🔸 Review Page

* Displays 3 feedback questions (radio buttons in a table).
* On submit: alert message with user feedback.
* Redirects to **Home Page**.

### 🔸 Shopping Cart

* Visible after clicking "Buy Now" when logged in.
* Layout:

  * Header
  * Slider Navigation
  * Body (product summary in distinct `<div>`)
  * Footer (contact, branches, accounts)

---

## 💾 Data Structure

```js
let login_Users = [
  {
    username: "user1",
    pass: "pass123",
    age: 25,
    gender: "male",
    phone: "123-456-7890"
  },
  {
    username: "user2",
    pass: "abc456",
    age: 30,
    gender: "female",
    phone: "987-654-3210"
  }
];
```

---

## 🎨 CSS Requirements

The project must include the following CSS properties:

* `border`, `margin`, `padding`
* `font-family`, `font-size`, `color`, `background`
* `display: flex`, `align-items`, `justify-content`
* `position`, `height`, `width`
* `opacity`, `text-decoration`

---

## 📁 File Structure (Suggested)

```
/e-commerce-frontend
│
├── index.html               # Main page (with all forms)
├── style.css                # Styling file
├── script.js                # JavaScript logic
└── /img                     # Images, icons, etc.
```

---

## ☁️ Deployment

Upload the entire project to your GitHub repository as github pages.

---

## ✅ Author & Acknowledgment

Developed as part of a front-end development task focusing on building an interactive, user-friendly e-commerce interface using core web technologies.