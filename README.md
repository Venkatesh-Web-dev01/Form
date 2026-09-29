# 📋 Form — React + Vite Application

A lightweight, modern web application built with **React 18** and **Vite**. This project provides a fast, responsive form interface featuring Hot Module Replacement (HMR), modular styling, and optimized linting rules.

---

## 🛠️ Tech Stack & Features

* **Core Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/) (Fast bundling and near-instant HMR)
* **Styling:** CSS3 (Modern responsive layouts and global design system)
* **Code Quality:** [ESLint](https://eslint.org/) flat configuration (`eslint.config.js`)
* **Assets:** Modular SVG icon support and static media management

---

## 🏗️ Project Architecture & Flow

```mermaid
graph TD
    A[index.html] -->|Script Entry| B[src/main.jsx]
    B -->|Mounts UI with StrictMode| C[src/App.jsx]
    C -->|Applies Component Styles| D[src/App.css]
    C -->|Applies Global Styles| E[src/index.css]
    C -->|Imports Assets| F[Static & Media Assets]

    subgraph Assets Management
        F --> G[src/icons.svg]
        F --> H[src/react.svg]
        F --> I[src/vite.svg]
        F --> J[src/hero.png]
    end


