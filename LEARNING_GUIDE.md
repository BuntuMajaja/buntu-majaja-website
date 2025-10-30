# Learning Guide - Understanding This Website

Welcome! This guide will help you understand how this website works, even if you're new to web development.

## 🎯 What You'll Learn

By exploring this codebase, you'll understand:
- How modern websites are built
- React components and how they work together
- Responsive design (making sites work on all devices)
- Interactive features like carousels and filters
- How to deploy a website to the internet

## 📚 Prerequisites

### What You Should Know First

**Basic Level (Recommended):**
- HTML basics (tags, attributes, structure)
- CSS basics (selectors, properties, layout)
- JavaScript fundamentals (variables, functions, arrays)

**Don't worry if you're not an expert!** The code has lots of comments to help you learn.

### Tools You Need

1. **Code Editor**: [VS Code](https://code.visualstudio.com/) (free)
2. **Node.js**: [Download here](https://nodejs.org/) (choose LTS version)
3. **Browser**: Chrome or Firefox with developer tools

## 🚀 Getting Started

### Step 1: Set Up the Project

```bash
# Open your terminal and run these commands:

# 1. Navigate to where you want the project
cd ~/Documents  # or wherever you keep projects

# 2. Clone or download the code
# (If you have the folder already, skip to step 3)

# 3. Enter the project folder
cd buntu-majaja-website

# 4. Install dependencies (this might take a few minutes)
npm install

# 5. Start the development server
npm run dev

# 6. Open http://localhost:5173 in your browser
```

**What just happened?**
- `npm install` downloaded all the code libraries this project needs
- `npm run dev` started a local web server so you can see the site
- The site automatically refreshes when you make changes!

### Step 2: Explore the Code

Open the project in VS Code:
```bash
code .
```

## 🗺️ Code Tour

### Start Here: `src/App.jsx`

This is the "main" file. It's like a table of contents for the website.

**Open it and you'll see:**
```jsx
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* ... more sections */}
    </div>
  );
}
```

**What this means:**
- Each `<ComponentName />` is a section of the website
- They appear in order from top to bottom
- Each component is defined in its own file

### Understanding Components

**What is a component?**
Think of components like LEGO blocks. Each one is a reusable piece of the website.

**Example: The Navbar Component**

Location: `src/components/Navbar.jsx`

```jsx
function Navbar() {
  return (
    <nav className="...">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
    </nav>
  );
}
```

**Breaking it down:**
1. `function Navbar()` - This creates a component
2. `return (...)` - This is what the component displays
3. `<nav>
